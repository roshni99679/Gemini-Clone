import "./main.css";
import { assets } from "../../assets/assets.js";
import { useContext } from "react";
import Context from "../../context/Context.jsx";

const Main = () => {
  const cards = [
    {
      text: "Suggest some good places to visit in Vietnam",
      icon: assets.compass_icon,
    },
    {
      text: "Summarize: LLM",
      icon: assets.bulb_icon,
    },
    {
      text: "Brainstorm brand name for shoes",
      icon: assets.message_icon,
    },
    {
      text: "Improve this code",
      icon: assets.code_icon,
    },
  ];

  const {
    onSent,
    recentPrompts,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);
  return (
    <>
      <div className="main">
        <div className="nav">
          <p>Gemini</p>
          <img src={assets.user_icon}></img>
        </div>
        <div className="main-container">
          {!showResult ? (
            <>
              <div className="greet">
                <p>
                  <span>Hello, Rosh</span>
                </p>
                <p>How can I help You today?</p>
              </div>
              <div className="cards">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="card"
                    onClick={() => onSent(card.text)}
                  >
                    <p>{card.text}</p>
                    <img src={card.icon} alt="card icon" />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="result">
              <div className="result-title">
                <img src={assets.user_icon}></img>
                <p>{recentPrompts}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon}></img>
                {loading ? (
                  <p className="loader">Thinking...</p>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          )}

          <div className="main-bottom">
            <div className="search-box">
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                placeholder="Enter your query here"
              ></input>
              <div>
                <img src={assets.gallery_icon}></img>
                <img src={assets.mic_icon}></img>
                {input ? (
                  <img onClick={() => onSent()} src={assets.send_icon}></img>
                ) : null}
              </div>
            </div>
            <p className="bottom-info">
              Gemini will help you with all your queries
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
