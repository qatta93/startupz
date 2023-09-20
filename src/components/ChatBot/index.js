import React from 'react';
import './style.css';
import ChatBotImage from './ChatBotImage';
import ChatCloseIcon from './ChatCloseIcon';
import ChatBotText from './ChatBotText';

const ChatBot = ({className, setShowChatBot}) => (
  <article className={className}>
    <div className='chatbot'>
      <ChatCloseIcon className="chatbot__close" onClick={() => setShowChatBot(false)}/>
      <ChatBotImage />
      <ChatBotText className="chatbot__text"/>
    </div>
  </article>
);

export default ChatBot;