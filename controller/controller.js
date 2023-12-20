class UserController {
	constructor() {
		this.users = [];
	}

	addUser(user) {
		this.users.push(user);
	}

	getUsers() {
		return this.users;
	}

	getUserById(id) {
		return this.users.find(user => user.id === id);
	}

	updateUser(id, updatedUser) {
		const index = this.users.findIndex(user => user.id === id);
		if (index !== -1) {
			this.users[index] = { ...this.users[index], ...updatedUser };
		}
	}

	deleteUser(id) {
		this.users = this.users.filter(user => user.id !== id);
	}
}

module.exports = UserController;
