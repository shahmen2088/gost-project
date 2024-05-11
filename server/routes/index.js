import { Router } from 'express';
import { userController } from '../controller/user.controller.js';

export const router = new Router();

// router.post('/user', userController.createUser);
// router.get('/user', userController.getUsers);
// router.get('/user/:id', userController.getOneUser);
// router.put('/user', userController.updateUser);
// router.delete('/user/:id', userController.deleteUser);

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', userController.getUsers);
