import React, { useRef, useState } from 'react';
import { nanoid } from 'nanoid';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState('');
  const socket = useRef();
  const [connected, setConnected] = useState(false);
  const [username, setUsername] = useState('');

  const sendMessage = () => {
    const message = {
      username,
      message: value,
      id: nanoid(),
      event: 'message',
    };
    socket.current.send(JSON.stringify(message));
    setValue('');
  };

  const connect = () => {
    socket.current = new WebSocket('ws://localhost:5000');

    socket.current.onopen = () => {
      setConnected(true);

      const message = {
        event: 'connection',
        username,
        id: nanoid(),
      };

      socket.current.send(JSON.stringify(message));
    };

    socket.current.onmessage = (e) => {
      const message = JSON.parse(e.data);
      setMessages((prev) => [message, ...prev]);
    };

    socket.current.onclose = () => {
      setConnected(false);
      console.log('Socket closed');
    };

    socket.current.onerror = () => {
      console.log('Error socket');
    };
  };

  if (!connected) {
    return (
      <div>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your name"
          type="text"
        />
        <button onClick={connect}>Enter</button>
      </div>
    );
  }

  return (
    <div>
      <div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div>
        {messages.map((mess) => (
          <div key={mess.id}>
            {mess.event === 'connection' ? (
              <div>User {mess.username} connected</div>
            ) : (
              <div>
                {mess.username}. {mess.message}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
