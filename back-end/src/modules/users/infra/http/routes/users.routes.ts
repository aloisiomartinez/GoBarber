import { Router } from 'express';
import { container } from 'tsyringe';

import multer from 'multer';
import uploadConfig from '@config/upload';

import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

import ensureAuthenticate from '../middlewares/ensureAuthenticated';

import UsersController from '../controllers/UsersController';

const usersController = new UsersController();

const userRouter = Router();
const upload = multer(uploadConfig);

userRouter.post('/', usersController.create);
userRouter.patch(
  '/avatar',
  ensureAuthenticate,
  upload.single('avatar'),
  async (request, response) => {
    const updateUserAvatar = container.resolve(UpdateUserAvatarService);

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    delete user.password;

    return response.json(user);
  },
); // Atualizar somente 1 informação

export default userRouter;
