import { User } from '../models/user-model.js';
import bcrypt from 'bcrypt';
import { UUIDV4 } from 'sequelize';
import { mailService } from './mail-service.js';
import { tokenService } from './token-service.js';
import { UserDto } from '../dtos/user-dto.js';
class UserService {
  async registration(email, password) {
    const candidate = await User.findOne({ email });
    if (candidate) {
      throw new Error(
        `Пользователь с почтовым адресом ${email} уже существует!`,
      );
    }
    const hasPassword = await bcrypt.hash(password, 3);
    const activationLink = UUIDV4;
    const user = await User.create({
      email,
      password: hasPassword,
      activationLink,
    });
    await mailService.sendActivationMail(email, activationLink);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateToken({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }
}

export const userService = new UserService();
