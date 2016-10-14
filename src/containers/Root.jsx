const React = require('react');
const { Provider } = require('react-redux');
const configureStore = require('../store/configure-store');
const App = require('../components/App.jsx');

const store = configureStore();

const Root = React.createClass({
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
});

module.exports = Root;