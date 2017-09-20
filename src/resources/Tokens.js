const utils = require('../utils');
const BaseResource = require('../core/BaseResource');

const param = utils.core.param;

const Tokens = BaseResource.extend({
  resource: 'tokens',

  register: function (params) {
    const tokenType = param('tokenType', params);
    const name = param('name', params);
    const symbol = param('symbol', params);
    const address = param('address', params);

    return this.post({
      action:   'register',
      payload:  { token_type: tokenType, name, symbol, address }
    });
  },

  balance: function (params) {
    const tokenUid = param('tokenUid', params);
    const address = param('address', params);

    return this.get({
      action:   'balance',
      payload:  { token_uid: tokenUid, address }
    });
  },

  createAddress: function (params) {
    const tokenUid = param('tokenUid', params);
    const managed = param('managed', params);

    return this.post({
      action:   'create_address',
      payload:  { token_uid: tokenUid, managed }
    });
  },

  registerAddress: function (params) {
    const tokenUid = param('tokenUid', params);
    const address = param('address', params);

    return this.post({
      action:   'register_address',
      payload:  { token_uid: tokenUid, address }
    });
  }
});

module.exports = Tokens;
