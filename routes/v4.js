const config = require('config');
const express = require('express');
const ooApi = require('../lib/api');

const router = express.Router();

function getPcode(apiKey) {
  const idx = apiKey.lastIndexOf('.');
  return apiKey.slice(0, idx);
}

/* GET users listing. */
router.get('/:account/:id', (req, res) => {
  const account = req.params.account;
  const embedCode = req.params.id;
  const cfg = config[account];
  if (!cfg) {
    return res.render('error', {
      message: 'Invalid Params',
      error: {}
    });
  }
  const api = ooApi[account];
  const playerId = cfg.playerId;
  const pcode = getPcode(cfg.apiKey);
  const embedToken = api.getTokenRequest(embedCode);
  if (!embedCode || !playerId || !pcode || !embedToken) {
    return res.render('error', {
      message: 'Invalid Params',
      error: {}
    });
  }
  res.render('v4', {playerId, embedCode, pcode, embedToken});
});

module.exports = router;
