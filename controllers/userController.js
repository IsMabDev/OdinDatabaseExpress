const {
  getAllUsernames,
  getFiltredUsernames,
  deleteAllUsers,
} = require("../db/queries");
const populateDB = require("../db/populateDB")

exports.usersListGet = async (req, res) => {
  if(!req.query.search) {const users = await getAllUsernames();
  res.render("index", { users });
  }
  else {
    const users = await getFiltredUsernames(req.query.search);
    console.log('req.query.search: ', req.query.search);

    if (users.length === 0) {
      res.send("No user names with your searching queries")
      console.log("length=0");
    } else { res.render("index", { users })};
    console.log('users: ', users);
  }
  
};

exports.deleteGet = async (req, res) => {
  await deleteAllUsers();
  res.redirect("/")
  
}

exports.populateGet = async (req, res) => {
  await populateDB();
  res.redirect("/")
}

exports.testGet =  (req, res) => {
  console.log("test get", req.query.search);
  res.send("Hi this is a test")
}