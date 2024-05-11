import { userService } from '../services/user-service.js';

class UserController {
  async registration(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await userService.registration(email, password);
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (e) {
      console.log(e);
    }
  }
  async login(req, res, next) {
    try {
    } catch (e) {}
  }
  async logout(req, res, next) {
    try {
    } catch (e) {}
  }
  async activate(req, res, next) {
    try {
    } catch (e) {}
  }
  async refresh(req, res, next) {
    try {
    } catch (e) {}
  }
  async getUsers(req, res, next) {
    try {
      res.json(['asdsad', 'asdasdasd']);
    } catch (e) {}
  }
  // async createUser(req, res) {
  //   const { id, name, email, password } = req.body;
  //   console.log(id, name, email, password);
  //   const newPerson = await pool.query(
  //     `INSERT INTO person (id, name, email, password) values ($1, $2, $3, $4) RETURNING *`,
  //     [id, name, email, password],
  //   );
  //   res.json(newPerson.rows[0]);
  // }
  // async getUsers(req, res) {
  //   const users = await pool.query('SELECT * FROM person');
  //   res.json(users.rows);
  // }
  // async getOneUser(req, res) {
  //   const id = req.params.id;
  //   const user = await pool.query('SELECT * FROM person where id = $1', [id]);
  //   res.json(user.rows[0]);
  // }
  // async updateUser(req, res) {
  //   const { id, name, email, password } = req.body;
  //   const user = await pool.query(
  //     'UPDATE person set name = $1, email = $2, password = $3 where id = $4 RETURNING * ',
  //     [name, email, password, id],
  //   );
  //   res.json(user.rows[0]);
  // }
  // async deleteUser(req, res) {
  //   const id = req.params.id;
  //   console.log(id);
  //   const user = await pool.query('DELETE FROM person where id = $1', [id]);
  //   res.json(user.rows[0]);
  // }
}

export const userController = new UserController();
