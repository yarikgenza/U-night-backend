/* global describe it before */
const chakram = require('chakram');
const { baseUrl } = require('../config');
const templates = require('../data');

const { expect } = chakram;
const { Event } = templates;

describe('Event', () => {
  const event = Object.assign({}, Event);
  const anotherEvent = Object.assign({}, Event);

  describe('Create', () => {
    let response;

    before('send request', async () => {
      response = await chakram.post(`${baseUrl}/api/events`, event);
      event._id = response.body._id;
    });

    it('should return status 200', () => { expect(response).to.have.status(200); });
    it('should contain name', () => expect(response.body.name).to.exist);
  });

  describe('Get one', () => {
    let response;

    before('send request', async () => {
      response = await chakram.get(`${baseUrl}/api/events/${event._id}`)
    });

    it('should return status 200', () => expect(response).to.have.status(200));
    it('should contain name', () => expect(response.body.name).to.exist);
    it('should contain description', () => expect(response.body.description).to.exist);
    it('should contain prices', () => expect(response.body.price).to.exist);
    it('should contain startAt date', () => expect(response.body.startAt).to.exist);
    it('should contain endAt', () => expect(response.body.endAt).to.exist);
    it('should contain photoUrl', () => expect(response.body.photoUrl).to.exist);
  })

  describe('Get list', () => {
    let response;

    before('create one more event', async () => {
      let response;
      response = await chakram.post(`${baseUrl}/api/events`, anotherEvent);
      anotherEvent._id = response.body._id;
    })

    before('send request', async () => {
      response = await chakram.get(`${baseUrl}/api/events`);
    });

    it('should return status 200', () => expect(response).to.have.status(200));
    it('should return an array', () => expect(response.body).to.be.instanceOf(Array));
    it('should contain 2 events', () => expect(response.body.length).to.equal(2));
  })

  describe('Update', () => {
    let response;
    const NEW_DATA = { name: 'newName', };

    before('send request', async () => {
      response = await chakram.patch(`${baseUrl}/api/events/${event._id}`, NEW_DATA);
    });

    it('should return status 200', () => expect(response).to.have.status(200));
    it('should change name', () => expect(response.body.name).to.equal(NEW_DATA.name));
  })

  describe('Remove', () => {
    let response;

    before('send request', async () => {
      response = await chakram.delete(`${baseUrl}/api/events/${event._id}`)
    });

    it('should return status 204', () => expect(response).to.have.status(204));
  })

  after('remove anotherEvent', async () => await chakram
    .delete(`${baseUrl}/api/events/${anotherEvent._id}`)
  );
});
