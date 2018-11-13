const assert = require('assert');
const app = require('../../src/app');

describe('\'staffs\' service', () => {
  it('registered the service', () => {
    const service = app.service('staffs');

    assert.ok(service, 'Registered the service');
  });
});
