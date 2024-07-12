import { Controller, Post, Body, NotFoundException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        const data = await this.authService.login(loginDto);

        if (!data) {
            throw new NotFoundException('Could not find user with email and password');
        }

        return this.authService.login(loginDto);
    }
}