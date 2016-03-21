var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
	var users = [
		{
			name: 'Tom',
			age: 12
		},
		{
			name: 'Jerry',
			age: 12
		}
	];

	res.json({ok: true, data: users});
});

module.exports = router;
