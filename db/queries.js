const pool = require("./pool");

async function createUsernames() {

  const createTable=  `CREATE TABLE IF NOT EXISTS usernames(
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(255)
)`
   try {
    // Execute the query
    await pool.query(createTable);
    console.log("Table 'usernames' created (if not already exists).");
  } catch (err) {
    console.error('Error creating table:', err.stack);
   }
};

 

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
  createUsernames
};
