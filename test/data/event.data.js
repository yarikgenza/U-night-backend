const moment = require('moment');

module.exports = {
  name: 'fakeName',
  description: 'fakeDescription',
  price: {
    male: 50,
    female: 30,
  },
  startAt: moment().add(1, 'd'),
  endAt: moment().add(2, 'd'),
  photoUrl: 'http://fakeimg.pl/300/',
};
