import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import Context from "../../context/Context";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const { onSent, previousprompts, setRecentPrompts, newChat } =
    useContext(Context);

  const loadMessage = async (prompt) => {
    setRecentPrompts(prompt);
    await onSent(prompt, true);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img
          src={assets.menu_icon}
          onClick={() => setExpanded((prev) => !prev)}
          alt="menu Logo"
          className="menu"
        />
        <div
          onClick={() => {
            newChat();
          }}
          className="new-chat"
        >
          <img src={assets.plus_icon} alt="Plus Icon" className="plus" />
          {expanded ? <p>New Chat</p> : null}
        </div>
        {expanded ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {previousprompts.map((item) => {
              return (
                <div
                  onClick={() => {
                    loadMessage(item);
                  }}
                  className="recent-entry"
                >
                  <img src={assets.message_icon}></img>
                  <p>{item.slice(0, 18)}...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img
            src={assets.question_icon}
            alt="Settings Icon"
            className="settings"
          />
          {expanded ? <p>Help</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img
            src={assets.history_icon}
            alt="Settings Icon"
            className="settings"
          />
          {expanded ? <p>Activity</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img
            src={assets.setting_icon}
            alt="Settings Icon"
            className="settings"
          />
          {expanded ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
