import express from 'express';
import { create, detail, index, save, search } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/', index);

userRouter.get('/search', search);

userRouter.get('/create', create);

userRouter.get('/:id', detail);

userRouter.post('/create', save);

export default userRouter;