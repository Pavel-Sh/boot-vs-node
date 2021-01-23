const connection = require('../db/connection');

async function getTest(id) {
  const result = await connection.query('SELECT * FROM test WHERE id = ?', [id]);
  return result[0];
}

async function createTest(test) {
  const result = await connection.query('INSERT INTO test SET name = ?, value = ?', [test.name, test.value]);
  return await getTest(result[0].insertId);
}

exports.getTest = getTest;
exports.createTest = createTest;
