const request = require('superagent');
const React = require('react');
const ReactDOM = require('react-dom');

const AddChat = React.createClass({
  propTypes: {
    /*

      1. Use proptypes to make sure that
      we require a prop 'url' that should
      be a string

     */
     url: React.PropTypes.string.isRequired
  },

  addChatMessage() {
    /*

      2. Use ReactDOM.findDOMNode to get
      the input field and the value

      3. Use superagent (from npm - see npm/github for DOCS)
      to do a POST-request to the url supplied.
      The API accepts data of the form:

      {
        text: 'My new chat message!'
        name: 'Anonymous'
      }

      4. Reset the input field

     */

    const postMessage = {
      text: this.refs.newChatInput.value,
      name: this.refs.name.value
     };

     request
      .post(this.props.url)
      .send(postMessage)
      .end(function(err, res){
        this.refs.newChatInput.value = '';
      }.bind(this));

  },

  handleSubmit(e) {
    /*

      5. Handle when the user presses
      the ENTER key in the input field

     */
    if (!(e.keyCode === 13)) {
      return;
    }

    this.addChatMessage();
  },

  render(){
    return (
      <div className="form-group">

        <input 
          type="text"
          placeholder="Your name"
          ref="name"
          className="form-control"
        />
        {/*

          6. Attach an onKeyDown listener
          to the input field that calls
          you handleSubmit function

        */}

        <input onKeyDown={this.handleSubmit}
          type="text"
          placeholder="Compose Message"
          ref="newChatInput"
          className="form-control"
        />

        {/*

          7. Add an additional input field
          so that you can supply a nickname/name as well

        */}
      </div>
    );
  }
});

module.exports = AddChat;
