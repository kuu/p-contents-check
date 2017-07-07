const config = require('config');
const OoyalaApi = require('ooyala-api');

module.exports.low = new OoyalaApi(config.low.apiKey, config.low.apiSecret);
module.exports.mid = new OoyalaApi(config.mid.apiKey, config.mid.apiSecret);
module.exports.high = new OoyalaApi(config.high.apiKey, config.high.apiSecret);
