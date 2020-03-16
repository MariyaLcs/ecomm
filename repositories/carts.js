const Repository = require("./repository");

class CartsRepository extends Repository {}

//Receive a post request to add an item to a cart

//Receive a get request to show all items in cart

//Receive a post request to delete an item from a cart

module.exports = new CartsRepository("carts.json");
