import React from 'react';

class SendMessage extends React.Component {

  state = {

  }

  onChange = (e) => {
    this.setState ({
      [e.target.name] : e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.sendMessage(this.state.body);
    this.setState({body : ''})
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
       <input type='text' name='body' placeholder='Send Message ... ' value={this.state.body} onChange={this.onChange} />
       &nbsp;
       <input type='submit' className='btn btn-primary' value='Send' />
      </form>
    )
  }

}

export default SendMessage;
