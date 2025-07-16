import { useState, useEffect } from 'react';
import { createConnection } from './chat.js';

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  /* 
  * roomId是响应式的（因为它是 prop）所以它应该包含在数组中。
  * 这样可以确保当用户选择不同的聊天室时，也就是roomId改变时，聊天会重新连接。
  * 另一方面，serverUrl 是在组件外部定义的，这就是为什么它不需要在数组中的原因。
  */
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  });


  return (
    <>
      <h1>欢迎来到 {roomId} 聊天室！</h1>
      <input
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
    </>
  );
}

export default function App() {
  const [roomId, setRoomId] = useState('general');
  return (
    <>
      <label>
        选择聊天室：{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">所有</option>
          <option value="travel">旅游</option>
          <option value="music">音乐</option>
        </select>
      </label>
      <hr />
      <ChatRoom roomId={roomId} />
    </>
  );
}
