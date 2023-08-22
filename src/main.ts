import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as fs from 'fs'

const httpsOptions = {
  key: fs.readFileSync('.certs/privkey.pem'),
  cert: fs.readFileSync('.certs/cert.pem'),
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { httpsOptions, cors: true });

  const config = new DocumentBuilder()
    .setTitle('API BackEnd Caderneta')
    .setDescription(
      'BackEnd para servico de caderneta de idosos, contendos todas as rotas bem como seus schemas e modelos de objetos para serem criados e/ou atualizados',
    )
    .setVersion('1.0')
    .addTag('CRUDS')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(process.env.port || 8080);
}
bootstrap();
