import { useState, useEffect } from "react";
import runChat from "../config/gemini";
import Context from "./Context.jsx";

const ContextProvider = (props) => {
  const [chatHistory, setChatHistory] = useState({});
  const [input, setInput] = useState("");
  const [recentPrompts, setRecentPrompts] = useState("");
  const [previousprompts, setPreviousprompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("chatHistory"));
    if (savedHistory) setChatHistory(savedHistory);
  }, []);

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
  }, [chatHistory]);

  // Reset for new chat
  const newChat = () => {
    setShowResult(false);
    setResultData("");
    setRecentPrompts("");
    setInput("");
  };

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, index * 50);
  };

  const onSent = async (prompt, isFromHistory = false) => {
    try {
      setResultData("");
      setLoading(true);
      setShowResult(true);

      const finalPrompt = prompt || input;

      // 🟢 If it's from history, just load it from chatHistory
      if (isFromHistory && chatHistory[finalPrompt]) {
        setRecentPrompts(finalPrompt);
        setResultData(chatHistory[finalPrompt]);
        setLoading(false);
        return; // ✅ Stop here — don't re-fetch
      }

      // 🟢 Avoid duplicates in recents
      if (!isFromHistory && finalPrompt.trim()) {
        setPreviousprompts((prev) => {
          if (!prev.includes(finalPrompt)) return [...prev, finalPrompt];
          return prev;
        });
        setRecentPrompts(finalPrompt);
      }

      // Run the Gemini API only for new prompts
      const response = await runChat(finalPrompt);

      // Formatting the response
      let responseArray = response.split("**");
      let newResponse = "";
      for (let i = 0; i < responseArray.length; i++) {
        newResponse +=
          i % 2 === 1 ? `<b>${responseArray[i]}</b>` : responseArray[i];
      }

      let newResponseFinal = newResponse.split("*").join("<br/>");
      let newResponseWords = newResponseFinal.split(" ");
      for (let i = 0; i < newResponseWords.length; i++) {
        delayPara(i, newResponseWords[i] + " ");
      }
      setResultData(newResponseFinal);

      // Save to chatHistory
      setChatHistory((prev) => ({
        ...prev,
        [finalPrompt]: newResponseFinal,
      }));

      setLoading(false);
      setInput("");
    } catch (err) {
      console.error("Gemini error:", err);
      setLoading(false);
    }
  };

  const contextValue = {
    previousprompts,
    setPreviousprompts,
    input,
    setInput,
    recentPrompts,
    setRecentPrompts,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    onSent,
    newChat, // ✅ export this for Sidebar
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
