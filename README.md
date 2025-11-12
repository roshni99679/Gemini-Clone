# 💬 Gemini Chat Assistant

A modern **AI chat interface** built with **React** and powered by **Google’s Gemini API** (Generative AI).  
This project mimics the functionality of Google Gemini (formerly Bard) — providing conversational responses, saving chat history, and enabling dynamic prompts through an intuitive, responsive UI.

---

## 🌟 Features

- 🤖 **Real-time AI Responses** – Ask anything, get intelligent answers instantly from Gemini.
- 💡 **Dynamic Prompt Cards** – Predefined cards with quick prompts for instant AI queries.
- 💬 **Chat History (Recents)** – Automatically saves your previous chats; reopen any to instantly view past responses.
- 🧠 **No Duplicate Recents** – Clicking an existing chat doesn’t re-add it to the list.
- ⚡ **Instant History Loading** – Past chats load instantly without re-fetching from the API.
- 🎨 **Responsive UI** – Modern, clean interface styled with CSS (or Tailwind, if extended).
- 🗂️ **Context API Integration** – State management via React Context for smooth data flow.
- 📄 **Extensible Codebase** – Easy to modify, integrate new APIs, or enhance features.

---

## 🖥️ Demo Preview

![alt text](image.png)
![alt text](image3.png)
![alt text](image2.png)

---

## 🧰 Tech Stack

| Tool / Library | Purpose |
|----------------|----------|
| ⚛️ **React.js** | Frontend Framework |
| 🧠 **Context API** | Global state management |
| 🎨 **CSS Modules** | Styling and layout |
| 🌐 **Gemini API (Google Generative AI)** | Backend AI response generation |
| 🗃️ **LocalStorage (Optional)** | Persistent chat history |

---

## 📦 Folder Structure

gemini-chat/
├── src/
│ ├── assets/ # Icons and images
│ ├── components/
│ │ ├── Main/ # Chat interface
│ │ ├── Sidebar/ # Recents and menu
│ ├── context/
│ │ ├── Context.jsx # Context object
│ │ ├── ContextProvider.jsx# Context logic & state
│ ├── config/
│ │ ├── gemini.js # Gemini API configuration
│ ├── App.jsx
│ ├── index.jsx
│ └── main.css
└── package.json


---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/gemini-chat-app.git
cd gemini-chat-app

2️⃣ Install dependencies
npm install

3️⃣ Set up your Gemini API key

Create a .env file in the root folder and add your key:

VITE_GEMINI_API_KEY=your_gemini_api_key_here

4️⃣ Run the development server
npm run dev

5️⃣ Open in browser

Visit 👉 http://localhost:5173

🧩 Key Components
🏠 Main.jsx

Displays greeting, prompt cards, and chat results.

Handles input submission and response display.

Uses onSent() from Context to trigger Gemini API calls.

📚 Sidebar.jsx

Shows recent chat history dynamically.

Clicking a chat loads previous result instantly (no “Thinking…” delay).

Includes new chat, help, activity, and settings placeholders.

🧠 ContextProvider.jsx

Manages:

Input & results state

Recent & previous prompts

Loading status

Chat history (for caching responses)

Provides the onSent() function to all components.

🧠 How It Works

The user enters a prompt or clicks a predefined card.

The app sends the query to the Gemini API using runChat().

The response is formatted and displayed dynamically (word by word).

Both prompt and result are cached in context and optionally in localStorage.

Reopening a recent chat instantly displays the saved response.

🚀 Future Enhancements

🗨️ Multi-message conversation threads

📎 File / image input support

🎙️ Voice recognition (mic input)

🌙 Dark / light mode

💾 Cloud-based chat sync with Google account
