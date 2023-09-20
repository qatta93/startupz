import React from 'react';
import './style.css';
import ChatBotImage from '../Icons/ChatBotImage';
import ChatCloseIcon from '../Icons/ChatCloseIcon';
import ChatBotText from '../Icons/ChatBotText';

const ChatBot = ({className, setShowChatBotIcon, setShowChatBotWindow}) => (
  <article className={className}>
    <div className='chatbot'>
      <ChatCloseIcon className="chatbot__close" onClick={() => setShowChatBotIcon(false)}/>
      <ChatBotImage onClick={() => setShowChatBotWindow(true)}/>
      <ChatBotText className="chatbot__text" onClick={() => setShowChatBotWindow(true)}/>
    </div>
  </article>
);

export default ChatBot;