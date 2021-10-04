const express = require('express');
const router = express.Router();
const controller = require('./user.controller');

router.get('/login_success', controller.login_success);
router.get('/login_check', controller.login_check)
router.post('/join_success', controller.join_success);

router.post('/income_change', controller.income_change)
router.post('/outcome_change', controller.outcome_change);

router.post('/order', controller.order);
router.get('/orderlist', controller.orderlist);
router.get('/transaction_find', controller.transaction_find);
router.get('/transaction_find_userid', controller.transaction_find_userid);
router.post('/transaction_seller', controller.transaction_seller);
router.post('/transaction_buyer', controller.transaction_buyer);
router.post('/transaction_active', controller.transaction_active);
router.post('/transaction_coin', controller.transaction_coin);

module.exports = router;