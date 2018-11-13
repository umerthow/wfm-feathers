const assert = require('assert');
const app = require('../../src/app');

describe('\'user_teams_weekly_formation\' service', () => {
  it('registered the service', () => {
    const service = app.service('user-teams-weekly-formation');

    assert.ok(service, 'Registered the service');
  });
});
