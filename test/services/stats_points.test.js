const assert = require('assert');
const app = require('../../src/app');

describe('\'stats_points\' service', () => {
  it('registered the service', () => {
    const service = app.service('stats-points');

    assert.ok(service, 'Registered the service');
  });
});
