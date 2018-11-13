const assert = require('assert');
const app = require('../../src/app');

describe('\'user_teams_weekly_trainings\' service', () => {
  it('registered the service', () => {
    const service = app.service('user-teams-weekly-trainings');

    assert.ok(service, 'Registered the service');
  });
});
