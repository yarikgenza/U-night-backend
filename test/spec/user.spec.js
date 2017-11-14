const mongoose = require("mongoose");
// const User = mongoose.model('User');
const User = require('../../src/models/user.model');

const chakram = require('chakram');
const { baseUrl } = require('../config');
const templates = require('../data');

const { expect } = chakram;
const { UserData } = templates;

describe('User', () => {
  const user = Object.assign({}, UserData);
  const anotherUser = Object.assign({}, UserData);

  describe('Create', () => {
    let response;

    before('send request', async () => {
      const userObj = await User.create(user);
      user._id = userObj._id;
    });

    it('should contain id', () => expect(user._id).to.exist);
  });

  describe('Get one', () => {
    let response;

    before('send request', async () => {
      response = await chakram.get(`${baseUrl}/api/users/${user._id}`)
    });

    it('should return status 200', () => expect(response).to.have.status(200));
    it('should contain firstName', () => expect(response.body.firstName).to.exist);
    it('should contain lastName', () => expect(response.body.lastName).to.exist);
    it('should contain nickName', () => expect(response.body.nickName).to.exist);
    it('should contain age', () => expect(response.body.age).to.exist);
    it('should contain gender', () => expect(response.body.gender).to.exist);
    it('should contain photoUrl', () => expect(response.body.photoUrl).to.exist);
    it('should contain facebookId', () => expect(response.body.facebookId).to.exist);
    it('should contain email', () => expect(response.body.email).to.exist);
})

  describe('Get list', () => {
    let response;

    before('create one more user', async () => {
      
      const userObj = await User.create(anotherUser); // тут створюємо 2-го бзера
      anotherUser._id = userObj._id; // а тут зберігаємо його ід шоб далі найти якшо треба буде
    })

    before('send request', async () => {
      response = await chakram.get(`${baseUrl}/api/users`);
    });

    it('should return status 200', () => expect(response).to.have.status(200));
    it('should return an array', () => expect(response.body).to.be.instanceOf(Array));
    it('should contain 2 users', () => expect(response.body.length).to.equal(2));
  })

  describe('Update', () => {
    let response;
    const NEW_DATA = { firstName: 'newFirstName', };

    before('send request', async () => {
      response = await chakram.patch(`${baseUrl}/api/users/${user._id}`, NEW_DATA);
    });

    it('should return status 200', () => expect(response).to.have.status(200));
    it('should change firstName', () => expect(response.body.firstName).to.equal(NEW_DATA.firstName));
  })

  describe('Remove', () => {
    let response;

    before('send request', async () => {
      response = await chakram.delete(`${baseUrl}/api/users/${user._id}`)
    });

    it('should return status 204', () => expect(response).to.have.status(204));
  })

  after('remove anotherUser', async () => await chakram
    .delete(`${baseUrl}/api/users/${anotherUser._id}`)
  );
});
