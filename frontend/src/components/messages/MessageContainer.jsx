import React, { useEffect } from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { PiChatsThin } from "react-icons/pi";
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';
const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  // to make sure when we log out and log back in no conversation is selected
  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className='md:min-w-[460px] flex flex-col'>
      {!selectedConversation ? <NoChatSelected /> : (
        <>
          <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-4 rounded-lg shadow-lg w-full">
            <h1 className="text-xl font-normal">
              <span className="text-yellow-300">To:</span> {selectedConversation.fullName}
            </h1>
          </div>
          <Messages />
          <div>
            <MessageInput />
          </div>
        </>
      )}
    </div>
  );
}

const NoChatSelected = () => {
  const{authUser} = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👀 {authUser.fullName}</p>
        <p>Select a chat to start messaging</p>
        <PiChatsThin className="text-3xl md:text-6xl text-center"/>
      </div>
    </div>
  );
}

export default MessageContainer;