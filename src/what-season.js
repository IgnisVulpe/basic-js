const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date) {
  console.log(date);

  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  // console.log(date.toJSON());

  try {

    date.toJSON();

    return (date.getMonth() >= 0 && date.getMonth() <= 1) ||  date.getMonth() === 11 ? 'winter'
        : (date.getMonth() >= 2 && date.getMonth() <= 4) ? 'spring'
        : (date.getMonth() >= 5 && date.getMonth() <= 7) ? 'summer'
        : 'fall';

  } catch (error) {

    throw new Error('Invalid date!');
  }

}

// getSeason(new Date(1900, 0, 22, 23, 45, 11, 500));

const deeperFakeDate = {
  toString() {
    return Date.prototype.toString.call(new Date());
  },
  getMonth() {
    return Date.prototype.getMonth.call(new Date());
  },
  getFullYear() {
    return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
  },
  getDate() {
    return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
  },
  getHours() {
    return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
  },
  getMinutes() {
    return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
  },
  getSeconds() {
    return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
  },
  getMilliseconds() {
    return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
  },
  getDay() {
    return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
  },
  [Symbol.toStringTag]: 'Date'
};

Object.setPrototypeOf(deeperFakeDate, Object.getPrototypeOf(new Date()));

// getSeason(deeperFakeDate);

module.exports = {
  getSeason
};
