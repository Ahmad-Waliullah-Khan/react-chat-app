import React from 'react';
import Message from './Message.js'

class Chats extends React.Component {

  render() {
    return this.props.messages.map((message) => (
      <Message key={message.id} message={message}/>
      ));
  }

}

export default Chats;
