const React = require('react');
const AddChat = require('./AddChat.jsx');
const ChatList = require('./ChatList.jsx');

const App = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="text-center"> React Workshop Chat </h1>
            <div className="col-sm-8 col-sm-offset-2">

              <AddChat
                url="https://react-workshop-chat.herokuapp.com/chat"
              />

            </div>
            <div className="col-sm-10 col-sm-offset-1">
            <div className="panel panel-default">
              <div className="panel-heading">Chat Messages</div>

                <ChatList
                  url="https://react-workshop-chat.herokuapp.com/chat"
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = App;
