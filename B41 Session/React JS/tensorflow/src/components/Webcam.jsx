import { useEffect, useRef, forwardRef } from "react";

export const Webcam = forwardRef((props, ref) => {
  useEffect(() => {
    // Request access to webcam
    const initWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 640, height: 480 },
        });

        if (ref && ref.current) {
          ref.current.srcObject = stream;
          // Wait for video to load before proceeding
          ref.current.onloadedmetadata = () => {
            ref.current.play();
          };
        }
      } catch (error) {
        console.error("Error accessing webcam:", error);
      }
    };

    initWebcam();

    return () => {
      if (ref && ref.current && ref.current.srcObject) {
        ref.current.srcObject.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, [ref]);

  return (
    <video ref={ref} className="w-full h-full rounded-lg object-cover" muted />
  );
});

Webcam.displayName = "Webcam";
