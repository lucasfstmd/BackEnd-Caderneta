import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as fs from 'fs';
import * as cors from 'cors';

const httpsOptions = {
  key: fs.readFileSync(`${process.env.SSL_KEY_PATH}`),
  cert: fs.readFileSync(`${process.env.SSL_CERT_PATH}`),
};

async function bootstrap() {
  let app: INestApplication;

  if (process.env.NODE_ENV === 'deploy') {
    app = await NestFactory.create(AppModule, { httpsOptions, cors: true });
  } else {
    app = await NestFactory.create(AppModule);
  }

    app.use(cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEADER', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
        exposedHeaders: ['Content-Type', 'x-ratelimit-limit', 'x-ratelimit-remaining', 'X-Total-Count'],
        credentials: true,
        preflightContinue: false,
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }))

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
  const port = process.env.PORT || 3333;

  await app.listen(port);
  console.log(`\nApplication on ${port}`);
}

bootstrap();
