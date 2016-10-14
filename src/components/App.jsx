const React = require('react');

const App = React.createClass({
  render() {
    const superStyles = {
      backgroundColor: 'yellow'
    };

    return (
      <div style={superStyles}>
        <h1>My Amazing React App!</h1>
      </div>
    );
  }
});

module.exports = App;