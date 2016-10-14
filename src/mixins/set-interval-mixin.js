const SetIntervalMixin = {
  componentWillMount() {
    this.intervals = [];
  },
  _setInterval() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount() {
    this.intervals.map(clearInterval);
  }
};

module.exports = SetIntervalMixin;
