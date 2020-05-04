import React from 'react';

class Message extends React.Component {
  render() {
    const {username, body, file} = this.props.message;
    return (
      <div>
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">{ body }</h4>
          <p>{ file }</p>
          <hr />
          <p className="mb-0">{username}</p>
        </div>
      </div>
    )
  }
}

export default Message;
