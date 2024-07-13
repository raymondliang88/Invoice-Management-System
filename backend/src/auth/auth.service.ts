import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './auth.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) { }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.usersService.findByEmail(email);
        if (user && await bcrypt.compare(password, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: LoginDto) {
        const dbUser = await this.validateUser(user.email, user.password);

        if (!dbUser) {
            return null;
        }

        const payload = { email: dbUser.email, id: dbUser.id };

        return {
            access_token: this.jwtService.sign(payload),
            name: dbUser.name,
            email: dbUser.email,
            id: dbUser.id
        };
    }
}