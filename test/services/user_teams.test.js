const assert = require('assert');
const app = require('../../src/app');

describe('\'user_teams\' service', () => {
  it('registered the service', () => {
    const service = app.service('user-teams');

    assert.ok(service, 'Registered the service');
  });
});
