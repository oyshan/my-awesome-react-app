const React = require('react');
const SetIntervalMixin = require('../mixins/set-interval-mixin');

const ChatList = React.createClass({
  mixins: [SetIntervalMixin],

  propTypes: {
    populateMessages: React.PropTypes.func.isRequired,
    messages: React.PropTypes.array.isRequired
  },

  componentDidMount() {
    this._setInterval(this.getChats, 1000);
  },

  getChats() {
    this.props.populateMessages();
  },

  render() {
    let list = this.props.messages.map((item, index) => {
      return (
        <li className="list-group-item" key={item._id} >
          <span>{item.name}: </span>{item.text}
        </li>
      );
    });

    return (
      <ul className="list-group">
        {list}
      </ul>
    );
  }
});

module.exports = ChatList;