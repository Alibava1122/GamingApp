import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import axios from 'axios';
import { useSelector , useDispatch } from 'react-redux';
import { useChatHistoryMutation, useSendMessageMutation} from '../services/ChatServices';
import { hideChatModal } from '../redux/uiSlice';


function ChatUi() {
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [MessageSend] = useSendMessageMutation();
  const [chatHistory] = useChatHistoryMutation();

  const userInfo = useSelector((state) => state.user.userInfo);
  const recieverId = useSelector((state) => state.user.recieverId);
  const ChatroomDeatils = useSelector((state)=>state.user.setChatRoomDetails);
  // console.log('ChatroomDeatils id--->' , ChatroomDeatils?.data?.chat?._id
  // )
  console.log('sender id' , userInfo?.user._id)
  console.log('receiver id' , recieverId)
  console.log('message---->' , userInfo)

  useEffect(() => {
    const pusher = new Pusher('bc1c127c3d3422d5799a', {
      cluster: 'ap2',
    });

    const channel = pusher.subscribe(ChatroomDeatils?.data?.chat?._id);
    channel.bind('newMessage', (data) => {
      if (data.senderId !== userInfo?.user._id) {
        setMessages((prevMessages) => [...prevMessages, data]);
      }
    });

    return () => {
      channel.unbind_all();
      pusher.unsubscribe(ChatroomDeatils?.data?.chat?._id);
    };
  }, []);

  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const response = await chatHistory({
          senderId: userInfo?.user._id,
          receiverId: recieverId,
        });

        if (response?.data?.chats) {
          setMessages(response.data.chats);
        }
      } catch (error) {
        console.error('Error retrieving chat history:', error);
      }
    };

    fetchChatHistory();
  }, [chatHistory, userInfo, recieverId]);

  const sendMessage = async () => {
    if (!newMessage.trim()) return;

    try {
      const response = await MessageSend({
        senderId: userInfo?.user._id,
        receiverId: recieverId, 
        message: newMessage,
      });
      setMessages((prevMessages) => [...prevMessages, response.data.message]);
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="bg-white p-4 w-96 max-w-lg h-110 rounded-lg shadow-lg mb-2 ">
      <div className="flex justify-between items-center mb-2 ">
        <h3 className="font-semibold text-gray-700 text-sm">Chat with us</h3>
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={()=>{dispatch(hideChatModal())}}
        >
          ✕
        </button>
      </div>
      <div className="flex flex-col space-y-2 h-72 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg ${
              msg.senderId === userInfo?.user._id ? 'bg-gray-500 text-white self-start' : 'bg-gray-100 self-end'
            }`}
          >
            <p className="text-sm">{msg.message}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-row">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder:text-[14px]"
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="bg-gray-600 hover:bg-slate-500 px-1 py-1 rounded-lg text-white h-[40px] mt-2 ml-2  text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatUi;
