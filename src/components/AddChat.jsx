const React = require('react');
const ReactDOM = require('react-dom');

const AddChat = React.createClass({
  propTypes: {
    postMessage: React.PropTypes.func.isRequired
  },

  addChatMessage(name, text) {
    if (this.refs.newChatInput.value) {
      this.props.postMessage({ name, text })
    }
  },

  handleSubmit(e){
    if (!this.refs.newChatInput.value) {
      return;
    }

    if (e.keyCode === 13) {
      this.addChatMessage(
        this.refs.nicknameInput.value,
        this.refs.newChatInput.value
      );

      this.refs.newChatInput.value = '';
    }
  },

  render(){
    return (
      <div className="form-group">
        <input
          type="text"
          placeholder="Nickname"
          ref="nicknameInput"
          className="form-control"
        />
        <input
          type="text"
          placeholder="Compose Message"
          ref="newChatInput"
          className="form-control"
          onKeyDown={this.handleSubmit}
        />
      </div>
    );
  }
});

module.exports = AddChat;