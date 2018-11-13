const assert = require('assert');
const app = require('../../src/app');

describe('\'players_weekly_point\' service', () => {
  it('registered the service', () => {
    const service = app.service('players-weekly-points');

    assert.ok(service, 'Registered the service');
  });
});
