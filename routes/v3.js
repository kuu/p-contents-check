const config = require('config');
const express = require('express');
const ooApi = require('../lib/api');

const router = express.Router();

/* GET home page. */
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
  const embedToken = api.getTokenRequest(embedCode);
  if (!embedCode || !playerId || !embedToken) {
    return res.render('error', {
      message: 'Invalid Params',
      error: {}
    });
  }
  res.render('v3', {playerId, embedCode, embedToken});
});

module.exports = router;
