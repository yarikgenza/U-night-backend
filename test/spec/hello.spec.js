'use strict';

const chakram = require('chakram');
const { baseUrl } = require('../config');
const { expect } = chakram;

describe('Hello-world test', () => {
  
  describe('Send test-request', () => {
    let response;

    before('send request', async () => {
      response = await chakram.get(`${baseUrl}/hello`);
    });

    it('should return status 200', () => {
      expect(response).to.have.status(200);
    });
  });

});
