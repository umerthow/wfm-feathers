const assert = require('assert');
const app = require('../../src/app');

describe('\'players_stats_weekly_points\' service', () => {
  it('registered the service', () => {
    const service = app.service('players-stats-weekly-points');

    assert.ok(service, 'Registered the service');
  });
});
