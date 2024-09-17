const pool = require("./pool");

async function getAllUsernames() {

  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function getFiltredUsernames(filter) {
  const { rows } = await pool.query(`SELECT * FROM usernames 
    where username='${filter}'`);
  return rows;
}

async function deleteAllUsers() {

   const { rows } = await pool.query('DELETE FROM usernames');
   return rows;
  
}

module.exports = {
  getAllUsernames,
  insertUsername,
  getFiltredUsernames,
  deleteAllUsers,
};
