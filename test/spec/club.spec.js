/* global describe it before */
const chakram = require('chakram');
const { baseUrl } = require('../config');
const templates = require('../data');

const { expect } = chakram;
const { Club } = templates;

describe('Club', () => {
  const club = Object.assign({}, Club);
  const anotherClub = Object.assign({}, Club);

  describe('Create', () => {
    let response;

    before('send request', async () => {
      response = await chakram.post(`${baseUrl}/api/clubs`, club);
      club._id = response.body._id;
    });

    it('should return status 200', () => { expect(response).to.have.status(200); });
    it('should contain name', () => expect(response.body.name).to.exist);
  });

  describe('Get one', () => {
    let response;

    before('send request', async () => {
      response = await chakram.get(`${baseUrl}/api/clubs/${club._id}`)
    });

    it('should return status 200', () => expect(response).to.have.status(200));
    it('should contain name', () => expect(response.body.name).to.exist);
    it('should contain description', () => expect(response.body.description).to.exist);
    it('should contain address', () => expect(response.body.address).to.exist);
    it('should contain email', () => expect(response.body.email).to.exist);
    it('should contain siteUrl', () => expect(response.body.siteUrl).to.exist);
    it('should contain photosUrl', () => expect(response.body.photosUrl).to.exist);
    it('should contain phoneNumber', () => expect(response.body.phoneNumber).to.exist);
  });

  describe('Get list', () => {
    let response;

    before('create one more club', async () => {
      let response;
      response = await chakram.post(`${baseUrl}/api/clubs`, anotherClub);
      anotherClub._id = response.body._id;
    })

    before('send request', async () => {
      response = await chakram.get(`${baseUrl}/api/clubs`);
    });

    it('should return status 200', () => expect(response).to.have.status(200));
    it('should return an array', () => expect(response.body).to.be.instanceOf(Array));
    it('should contain 2 clubs', () => expect(response.body.length).to.equal(2));
  })

  describe('Update', () => {
    let response;
    const NEW_DATA = { name: 'newName', };

    before('send request', async () => {
      response = await chakram.patch(`${baseUrl}/api/clubs/${club._id}`, NEW_DATA);
    });

    it('should return status 200', () => expect(response).to.have.status(200));
    it('should change name', () => expect(response.body.name).to.equal(NEW_DATA.name));
  })

  describe('Remove', () => {
    let response;

    before('send request', async () => {
      response = await chakram.delete(`${baseUrl}/api/clubs/${club._id}`)
    });

    it('should return status 204', () => expect(response).to.have.status(204));
  })

  after('remove anotherClub', async () => await chakram
    .delete(`${baseUrl}/api/clubs/${anotherClub._id}`)
  );

  after('remove club', async () => await chakram
    .delete(`${baseUrl}/api/clubs/${club._id}`)
  );
});
