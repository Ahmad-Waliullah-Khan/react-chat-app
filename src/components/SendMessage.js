import React from 'react';

class SendMessage extends React.Component {

  state = {

  }

  setBody = (e) => {
    this.setState ({
      [e.target.name] : e.target.value
    });
  }

  handleFile = (e) => {
    this.setState ({
      [e.target.name] : e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.sendMessage(this.state.body, this.state.file);
    this.setState({
      body : '',
      file: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
      <div className="form-group">
       <input type='text' name='body' placeholder='Type Message ... ' value={this.state.body} onChange={this.setBody} />
      </div>
      <div className="input-group">
          <input
            type="file"
            id="inputGroupFile01"
            aria-describedby="inputGroupFileAddon01"
            accept="image/*"
            name="file"
            onChange={this.handleFile}
          />
          <label className="custom-file-label" htmlFor="inputGroupFile01">
            Attach File
          </label>
      </div>
      &nbsp;
       <div className="input-group">
        <input type='submit' className='btn btn-primary' value='Send' />
       </div>
      </form>
    )
  }

}

export default SendMessage;
