import React,  { useState } from "react";
import './style.css'

const HomeAssistant = () => {
  const [closeChat, setCloseChat] = useState(false);

  return (
    <section className="home__asistant global-padding">
      <article className={closeChat ? 'home__asistant--text' : 'home__asistant--text home__asistant--text-chat'}>
        <img src="/images/thumb-left.png" alt="thumb" />
        <p>We love solving problems!</p>
        <img src="/images/thumb-right.png" alt="thumb" />
      </article>
      {!closeChat &&
        <article className="home__asistant--chat">
          <div>
            <img className="home__asisstant--chat-image" src="/images/chat.png" alt="chat" />
            <img className="home__asisstant--close-image" src="/images/close.png" alt="close" onClick={() => setCloseChat(true)}/>
          </div>
          <img className="home__asisstant---image" src="/images/assistant.png" alt="virtual assistant" />
        </article>
      }
    </section>
  )
}

export default HomeAssistant;