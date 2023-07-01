import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;
const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
} = process.env;

const connection = new Pool({
  host: DB_HOST || "localhost",
  port: parseInt(DB_PORT) || 5432,
  user: DB_USER || "bootcamp_role",
  password: DB_PASSWORD || "senha_super_hiper_ultra_secreta_do_role_do_bootcamp",
  database: DB_NAME || "bounties"
});

export default connection;