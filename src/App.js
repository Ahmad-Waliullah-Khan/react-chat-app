import React from 'react';
import './App.css';
import Chats from './components/Chats.js';
import SendMessage from './components/SendMessage.js';

class App extends React.Component {

  state = {
    messages: [
      {
        id:1,
        user_id:1,
        username:'John',
        body:'Hey!',
        file:'/images/file1.png'
      },
      {
        id:2,
        user_id:2,
        username:'Ahmad',
        body:'Hello!',
        file:'/images/file2.jpeg'
      },
    ]
  }

  sendMessage = (body) => {

    const newMessage = {
      id:3,
      user_id:1,
      username:'John',
      body:body,
      file:'/images/file3.jpeg'
    }

   this.setState({messages: [...this.state.messages, newMessage]});
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Chat App</h1>
          <Chats messages={this.state.messages} />
          <SendMessage sendMessage={this.sendMessage} />
        </header>
      </div>
    );
  }

}

export default App;
