const assert = require('assert');
const app = require('../../src/app');

describe('\'player_categories\' service', () => {
  it('registered the service', () => {
    const service = app.service('player-categories');

    assert.ok(service, 'Registered the service');
  });
});
