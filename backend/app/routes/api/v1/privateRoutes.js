module.exports = {
	'GET /users/name': 'UsersController.getFullName',
	'GET /fav': 'FavController.get',

	// ShareDetails:
	'POST /shareDetails/:id': 'ShareDetailsController.create',

	// FAVOURATES
	'POST /fav': 'FavController.create',
	'POST /fav/delete': 'FavController.destroy',

};
