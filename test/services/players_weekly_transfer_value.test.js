const assert = require('assert');
const app = require('../../src/app');

describe('\'players_weekly_transfer_value\' service', () => {
  it('registered the service', () => {
    const service = app.service('players-weekly-transfer-value');

    assert.ok(service, 'Registered the service');
  });
});
