var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
	var users = [
    {
        "name": "test1",
        "email": "test1@xyz.com",
        "status": "REGISTERED",
    },
    {
        "name": "test2",
        "email": "test2@xyz.com",
        "status": "UNREGISTERED",
    },
    {
        "name": "abc1",
        "email": "abc1@xyz.com",
        "status": "REGISTERED",
    },
    {
        "name": "abc2",
        "email": "abc2@xyz.com",
        "status": "REGISTERED",
    },
    {
        "name": "abc3",
        "email": "abc3@xyz.com",
        "status": "REGISTERED",
    },
    {
        "name": "abc4",
        "email": "abc4@xyz.com",
        "status": "REGISTERED",
    },
    {
        "name": "abc5",
        "email": "abc5@xyz.com",
        "status": "REGISTERED",
    }
	];

	res.json({ok: true, data: users});
});

/* GET new users listing. */
router.get('/newusers', function(req, res, next) {
	var users = [
    {
        "name": "test13",
        "email": "test13@xyz.com",
        "status": "UNREGISTERED",
    },
    {
        "name": "abc13",
        "email": "abc3@xyz.com",
        "status": "UNREGISTERED",
    }
	];

	res.json({ok: true, data: users});
});

/* GET deleted users listing. */
router.get('/deleteusers', function(req, res, next) {
	var users = [
    {
        "name": "test1",
        "email": "test1@xyz.com",
        "status": "REGISTERED",
    },
    {
        "name": "abc2",
        "email": "abc2@xyz.com",
        "status": "REGISTERED",
    }
	];

	res.json({ok: true, data: users});
});

module.exports = router;
