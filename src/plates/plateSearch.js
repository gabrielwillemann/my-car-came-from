const vehicleRanges = require('./plateRanges.js');

export default (plateWanted) => {
  for (let range of vehicleRanges) {
    if (plateWanted >= range.plateIni && plateWanted <= range.plateEnd) {
      return range;
    }
  }
  return null;
};

