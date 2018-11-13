const assert = require('assert');
const app = require('../../src/app');

describe('\'staff_categories\' service', () => {
  it('registered the service', () => {
    const service = app.service('staff-categories');

    assert.ok(service, 'Registered the service');
  });
});
