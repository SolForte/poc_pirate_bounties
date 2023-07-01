import connection from "../database/index";

async function createBounty(name: string, nickname: string, bounty: number) {
  const result = await connection.query(
    `INSERT INTO bounties ("name", "nickname", "bounty") VALUES ($1, $2, $3) RETURNING *;`,
    [name, nickname, bounty]
  );
  return result.rows[0];
}

async function getAllBounties() {
  const result = await connection.query(`SELECT * FROM bounties;`);
  return result.rows;
}

async function updateBounty(name: string, bounty: number) {
  const result = await connection.query(
    `UPDATE bounties SET bounty = $1 WHERE name = $2 RETURNING *;`,
    [bounty, name]
  );
  return result.rows[0];
}

async function deleteBounty(id: number) {
  await connection.query(`DELETE FROM bounties WHERE id = $1;`, [id]);
}

const bountyRepository = {
  createBounty,
  getAllBounties,
  updateBounty,
  deleteBounty,
};

export default bountyRepository;
