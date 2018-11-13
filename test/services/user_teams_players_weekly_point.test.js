const assert = require('assert');
const app = require('../../src/app');

describe('\'user_teams_players_weekly_point\' service', () => {
  it('registered the service', () => {
    const service = app.service('user-teams-players-weekly-po');

    assert.ok(service, 'Registered the service');
  });
});
