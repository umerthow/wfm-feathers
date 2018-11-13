const assert = require('assert');
const app = require('../../src/app');

describe('\'wfm_gameweeks\' service', () => {
  it('registered the service', () => {
    const service = app.service('wfm-gameweeks');

    assert.ok(service, 'Registered the service');
  });
});
