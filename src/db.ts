import debug from "debug";
import { DB_USER, DB_PASSWORD, DB_SERVER, DB_NAME } from "./settings";
import { ConnectionPool } from "mssql";

export const pool = new ConnectionPool({
  user: DB_USER,
  password: DB_PASSWORD,
  server: DB_SERVER,
  database: DB_NAME,
  options: {
    enableArithAbort: false,
  },
});

export const initDb = async () => {
  debug("Initing db...");
  await pool.connect();
  await pool.query(`
  IF NOT EXISTS (select * from sysobjects where name='update_date' and xtype='U')

  CREATE TABLE 
      update_date (
        id int IDENTITY(1,1) PRIMARY KEY,
        description text,
        date_created datetime default CURRENT_TIMESTAMP
    );
    
  `);

  debug("...ready");
};

export const insertRecord = async (text: string) => {
  if (!pool.connected) {
    await pool.connect();
  }
  return pool.query(
    `
    INSERT INTO update_date DEFAULT VALUES; 
  `
  );
};

export const getMostRecent = async () => {
  if (!pool.connected) {
    await pool.connect();
  }
  return pool.query(`
  SELECT TOP 1 * FROM update_date ORDER BY id DESC;
  `);
};

export const cleanDatabase = async () => {
  if (!pool.connected) {
    await pool.connect();
  }
  return pool.query(
    `
    DELETE FROM update_date; 
    `
  );
};
