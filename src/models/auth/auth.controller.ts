import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequest } from './models/LoginRequest';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Login')
@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() req: LoginRequest) {
    return this.authService.login(req.usuario, req.senha);
  }
}
