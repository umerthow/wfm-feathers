const assert = require('assert');
const app = require('../../src/app');

describe('\'user_teams_players_stats_weekly_points\' service', () => {
  it('registered the service', () => {
    const service = app.service('user-teams-players-stats-wee');

    assert.ok(service, 'Registered the service');
  });
});
