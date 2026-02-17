import { useEffect, useRef, useState, useCallback } from "react";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl";
import * as handPoseDetection from "@tensorflow-models/hand-pose-detection";
import { Webcam } from "./Webcam";

/**
 * HandDetector Component
 * Initializes TensorFlow.js, loads the hand pose detection model,
 * and continuously detects hand landmarks from webcam feed
 */
export function HandDetector() {
  const videoRef = useRef(null);
  const detectorRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lastHandCountRef = useRef(0);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [handCount, setHandCount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const initializeModel = async () => {
      try {
        console.log("⏳ Initializing TensorFlow.js...");

        // Initialize TensorFlow.js backend first
        tf.enableProdMode();
        await tf.ready();
        console.log("✅ TensorFlow.js initialized");

        // Wait for video to be ready
        await new Promise((resolve) => setTimeout(resolve, 500));

        console.log("⏳ Loading Hand Pose Detection model...");

        // Load the hand pose detection model with TFJS runtime (more stable)
        const detector = await handPoseDetection.createDetector(
          handPoseDetection.SupportedModels.MediaPipeHands,
          {
            runtime: "tfjs",
            modelType: "lite",
          },
        );
        detectorRef.current = detector;
        setIsModelLoaded(true);
        console.log("✅ Hand Pose Detection model loaded successfully");
      } catch (error) {
        console.error("❌ Error initializing model:", error);
        // Retry after delay
        console.log("⏳ Retrying model initialization...");
        setTimeout(() => {
          initializeModel();
        }, 2000);
      }
    };

    initializeModel();

    return () => {
      // Cleanup when component unmounts
      if (detectorRef.current) {
        try {
          detectorRef.current.dispose();
        } catch (e) {
          console.warn("Error disposing detector:", e);
        }
      }
    };
  }, []);

  // Continuous detection using requestAnimationFrame
  useEffect(() => {
    if (!isModelLoaded || !detectorRef.current) return;

    let lastLogTime = 0;
    let lastStateUpdateTime = 0;
    const STATE_UPDATE_INTERVAL = 500; // Update UI state only every 500ms

    const detectHands = async () => {
      try {
        // Get the video element from the Webcam component
        const videoElement = videoRef.current;

        if (
          !videoElement ||
          videoElement.videoWidth === 0 ||
          videoElement.readyState !== videoElement.HAVE_ENOUGH_DATA
        ) {
          animationFrameRef.current = requestAnimationFrame(detectHands);
          return;
        }

        // Estimate hand positions and landmarks
        const hands = await detectorRef.current.estimateHands(videoElement, {
          flipHorizontal: true,
        });

        // Ensure hands is an array (may be undefined or null)
        const detectedHands = hands || [];

        // Update hand count only if it changed
        const now = Date.now();
        if (detectedHands.length !== lastHandCountRef.current) {
          lastHandCountRef.current = detectedHands.length;
          setHandCount(detectedHands.length);
        }

        // Log detected hands (throttled to every 1 second to avoid spam)
        if (detectedHands.length > 0 && now - lastLogTime > 1000) {
          console.log(`🖐️ Detected ${detectedHands.length} hand(s)`);

          detectedHands.forEach((hand, index) => {
            console.log(`\nHand ${index + 1}:`);
            console.log(`  Handedness: ${hand.handedness}`);
            console.log(`  Score: ${(hand.score * 100).toFixed(2)}%`);
            console.log(
              `  Landmarks (${hand.landmarks?.length || 0} points):`,
              hand.landmarks,
            );

            // Log individual landmark positions (x, y, z coordinates)
            if (hand.landmarks && Array.isArray(hand.landmarks)) {
              hand.landmarks.forEach((landmark, i) => {
                console.log(
                  `    Point ${i}: x=${landmark[0].toFixed(2)}, y=${landmark[1].toFixed(2)}, z=${landmark[2]?.toFixed(2) || "N/A"}`,
                );
              });
            }
          });
          lastLogTime = now;
        }

        // Update processing state only periodically to prevent re-renders
        if (now - lastStateUpdateTime > STATE_UPDATE_INTERVAL) {
          setIsProcessing(false);
          lastStateUpdateTime = now;
        }
      } catch (error) {
        console.error("Error detecting hands:", error);
      }

      // Continue the detection loop
      animationFrameRef.current = requestAnimationFrame(detectHands);
    };

    animationFrameRef.current = requestAnimationFrame(detectHands);

    // Cleanup animation frame on unmount
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isModelLoaded]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">
          🖐️ Hand Pose Detection
        </h1>
        <p className="text-slate-300 text-lg">
          Show your hand in front of the camera
        </p>
      </div>

      {/* Model Status */}
      <div className="mb-6">
        {isModelLoaded ? (
          <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-lg">
            <span className="text-green-400 text-lg">●</span>
            <span className="text-green-300 font-medium">Model Ready</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-500/50 rounded-lg">
            <span className="text-yellow-400 text-lg">⟳</span>
            <span className="text-yellow-300 font-medium">
              Loading Model...
            </span>
          </div>
        )}
      </div>

      {/* Webcam Container */}
      <div className="relative w-full max-w-2xl aspect-video bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700">
        {isModelLoaded && <Webcam ref={videoRef} />}

        {/* Info Overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <div className="bg-slate-900/80 backdrop-blur px-4 py-2 rounded-lg border border-slate-700">
            <p className="text-slate-300 text-sm">
              Hands Detected:{" "}
              <span className="text-cyan-400 font-bold text-lg">
                {handCount}
              </span>
            </p>
          </div>

          {isProcessing && (
            <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur px-4 py-2 rounded-lg border border-slate-700">
              <span className="text-cyan-400 text-lg">⟳</span>
              <p className="text-slate-300 text-sm">Processing...</p>
            </div>
          )}
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-8 max-w-2xl bg-slate-800/50 border border-slate-700 rounded-lg p-6">
        <h2 className="text-white font-semibold mb-3">📋 Instructions:</h2>
        <ul className="text-slate-300 space-y-2 text-sm">
          <li>✓ Allow camera access when prompted</li>
          <li>✓ Position your hand clearly in front of the camera</li>
          <li>✓ Keep your hand within the frame for best detection</li>
          <li>✓ Open the browser console (F12) to see detailed landmarks</li>
          <li>✓ The model detects hand position, orientation, and keypoints</li>
        </ul>
      </div>

      {/* Technical Info */}
      <div className="mt-6 text-center text-slate-500 text-xs">
        <p>Powered by TensorFlow.js + MediaPipe Hands</p>
        <p>Real-time hand pose detection running in your browser</p>
      </div>
    </div>
  );
}
