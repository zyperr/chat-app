import "../../styles/components/Chats/ChatBubble.css";

export const ChatBubble = ({ text, user, img, time }) => {
  return (
    <div className="chat-bubble">
      <div className="chat-bubble-img">
        <img
          className="chat-user-img"
          src={img}
          alt={`profile picture of ${user}`}
          role="avatar"
        />
      </div>
      <div className="chat-bubble-status">
        <div className="chat-bubble-info">
          <p className="chat-bubble-username">{user}</p>
          <p className="chat-bubble-time">{time}</p>
        </div>
        <div className="chat-bubble-text">
          <p>{text}</p>
        </div>
      </div>
      <div className="container">

      </div>
    </div>
  );
};
