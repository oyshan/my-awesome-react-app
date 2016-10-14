const React = require('react');
const { connect } = require('react-redux');
const { bindActionCreators } = require('redux');

const AddChat = require('./AddChat.jsx');
const ChatList = require('./ChatList.jsx');

const {
  populateMessages,
  postMessage,
} = require('../actions');

const App = React.createClass({
  render() {
    const {
      postMessage,
      populateMessages,
      messages
    } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="text-center"> React Workshop Chat </h1>
            <div className="col-sm-8 col-sm-offset-2">

              <AddChat
                postMessage={postMessage}
              />

            </div>
            <div className="col-sm-10 col-sm-offset-1">
            <div className="panel panel-default">
              <div className="panel-heading">Chat Messages</div>

                <ChatList
                  messages={messages}
                  populateMessages={populateMessages}
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    populateMessages,
    postMessage
  }, dispatch);
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);