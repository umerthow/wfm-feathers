const assert = require('assert');
const app = require('../../src/app');

describe('\'user_teams_weekly_finances\' service', () => {
  it('registered the service', () => {
    const service = app.service('user-teams-weekly-finances');

    assert.ok(service, 'Registered the service');
  });
});
