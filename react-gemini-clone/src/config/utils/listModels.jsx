const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
export async function listAvailableModels() {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models?key=${API_KEY}`
    );

    if (!response.ok) throw new Error("Failed to fetch models");

    const data = await response.json();

    console.log("✅ Available Gemini models:");
    data.models.forEach((model) => {
      console.log("🧠", model.name);
      // Available Gemini models:
      // gemini.js:67 🧠 models/gemini-2.5-flash
      // gemini.js:67 🧠 models/gemini-2.5-pro
      // gemini.js:67 🧠 models/gemini-2.0-flash
      // gemini.js:67 🧠 models/gemini-2.0-flash-001
      // gemini.js:67 🧠 models/gemini-2.0-flash-lite-001
      // gemini.js:67 🧠 models/gemini-2.0-flash-lite
      // gemini.js:67 🧠 models/gemini-2.0-flash-preview-image-generation
      // gemini.js:67 🧠 models/gemini-2.5-flash-lite
      // gemini.js:67 🧠 models/embedding-001
      // gemini.js:67 🧠 models/text-embedding-004
    });

    return data.models;
  } catch (error) {
    console.error("Error listing models:", error);
    return [];
  }
}

// Optional: Run it once for testing
listAvailableModels();
