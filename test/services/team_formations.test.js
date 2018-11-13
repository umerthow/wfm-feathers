const assert = require('assert');
const app = require('../../src/app');

describe('\'team_formations\' service', () => {
  it('registered the service', () => {
    const service = app.service('team-formations');

    assert.ok(service, 'Registered the service');
  });
});
