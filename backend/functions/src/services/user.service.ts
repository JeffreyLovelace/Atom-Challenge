import UserRepository from '../repositories/user.repository';

export class UserService {
    private userRepository = new UserRepository();

    async findOrCreateByEmail(email: string) {
        let user = await this.userRepository.findByEmail(email);
        if (!user) {
            user = await this.userRepository.create(email);
        }
        return user;
    }

    async findByEmail(email: string) {
        return this.userRepository.findByEmail(email);
    }
} 