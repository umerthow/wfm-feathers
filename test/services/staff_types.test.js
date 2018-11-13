const assert = require('assert');
const app = require('../../src/app');

describe('\'staff_types\' service', () => {
  it('registered the service', () => {
    const service = app.service('staff-types');

    assert.ok(service, 'Registered the service');
  });
});
