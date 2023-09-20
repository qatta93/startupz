import ChatBot from 'react-simple-chatbot';
import ChatCloseIcon from '../Icons/ChatCloseIcon';

const steps = [
  {
      id: '0',
      message: 'Hey there! What is your name?',
      trigger: '1',
  },  {
      id: '1',
      user: true,
  }
];

const ChatBotWindow = ({className, setShowChatBotWindow}) => {
  return (
    <div className={className}>
      <ChatCloseIcon width={25} height={25} className="chatbot__close" onClick={() => setShowChatBotWindow(false)} />
      <ChatBot steps={steps} />
    </div>
  )
}

export default ChatBotWindow;