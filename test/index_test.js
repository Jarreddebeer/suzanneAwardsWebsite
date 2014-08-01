var app = require('../server')
  , should = require('should')
  , request = require('supertest')

describe('GET homepage', function() {
    it('should return 200 OK', function(done) {
        request(app).get('/').expect(200, done);
    });
})

