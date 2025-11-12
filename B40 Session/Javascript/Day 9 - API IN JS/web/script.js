// STT : Speech to text
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  const recognition = new SpeechRecognition();

  recognition.continuous = true; // Keep listening
  recognition.interimResults = true; // Get results as you speak
  recognition.lang = "en-US"; // Set language

  recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
      .map((result) => result[0].transcript)
      .join("");
    console.log("You said:", transcript);
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
  };

  recognition.start(); // Start listening
}

// Ts : Text To Speech

const utterance = new SpeechSynthesisUtterance(
  "Hello, this is speech synthesis!"
);

// Customize voice properties
utterance.rate = 10; // Speed (0.1 to 10)
utterance.pitch = 2; // Pitch (0 to 2)
utterance.volume = 1; // Volume (0 to 1)
utterance.lang = "en-US";

// Optional: Choose a specific voice
const voices = speechSynthesis.getVoices();
utterance.voice = voices[0];

// Speak the text
speechSynthesis.speak(utterance);
