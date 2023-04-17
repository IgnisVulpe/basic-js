const { NotImplementedError } = require('../extensions/index.js');

function countNumberOfMoves (d) {

  if (d === 0) {
    return 0;
  } else {
    return 2 * countNumberOfMoves(d - 1) + 1;
  }
}

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disksNumber number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */

function calculateHanoi(disksNumber, turnsSpeed) {

  const object = {
    turns: countNumberOfMoves(disksNumber),
    seconds: null,
  };

  object.seconds = Math.floor(object.turns / turnsSpeed * 3600);

  return object;

}

module.exports = {
  calculateHanoi
};
