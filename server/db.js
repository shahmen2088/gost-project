import { Pool } from 'pg';
export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'shoxrux2088',
  database: 'firstapi',
  port: 5432,
});
