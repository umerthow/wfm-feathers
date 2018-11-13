const assert = require('assert');
const app = require('../../src/app');

describe('\'user_teams_squad\' service', () => {
  it('registered the service', () => {
    const service = app.service('user-teams-squad');

    assert.ok(service, 'Registered the service');
  });
});
