let plateRanges = require('./plateRanges.js');

export default (plateWanted, listRanges) => {
  listRanges = listRanges || plateRanges;
  for (let range of listRanges) {
    if (plateWanted >= range.plateIni && plateWanted <= range.plateEnd) {
      return range;
    }
  }
  return null;
};
