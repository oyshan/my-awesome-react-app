const request = require('superagent');
const React = require('react');
const SetIntervalMixin = require('../mixins/set-interval-mixin');

const ChatList = React.createClass({
  /*

    1. Use proptypes to make sure that
    we require a prop 'url' that should
    be a string

    2. Make sure you add any appropriate
    mixins that you need to use in your
    application

   */
  propTypes: {
     url: React.PropTypes.string.isRequired
  },

  mixins: [SetIntervalMixin],

  getInitialState() {
    return {
      chats: []
    };
  },

  getChats() {
    /*

      3. Create a method that uses superagent (from npm - see npm/github for DOCS)
      to fetch chat messages from the API URL

      The API returns a response in the form:

      [
        { text: 'A chat message' },
        { text: 'Another chat message' },
        ...
      ]

      Use this data to update the state
      of your application

     */
     //console.log('Refresh chatlist');
     request
      .get(this.props.url)
      .end(function(err,res){
        this.setState({
          chats: res.body
        })
      }.bind(this));


  },

  componentDidMount() {
    /*

      4. Use the SetIntervalMixin to
      regularly call the getChats method
      to update the chat messages of
      you application

     */
     this._setInterval(this.getChats, 1000);
  },

  render() {
    let list = this.state.chats.map((item, index) => {
      return (
        /*

          5. The chat message items also supply a name (item.name).
          Print that out to the UI as well

         */

        <li className="list-group-item" key={item._id} >
          {item.name}: {item.text}
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
