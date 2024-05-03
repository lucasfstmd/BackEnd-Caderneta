import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication, ValidationPipe } from '@nestjs/common';
const cors = require('cors')

/*const httpsOptions = {
  key: fs.readFileSync('.certs/privkey.pem'),
  cert: fs.readFileSync('.certs/cert.pem'),
};*/

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule, {
    cors: true,
  });

  /*  if (process.env.NODE_ENV === "deploy") {
    app = await NestFactory.create(AppModule, { httpsOptions, cors: true });
  } else {
    app = await NestFactory.create(AppModule, { cors: true });
  }*/

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
  app.use(cors())

  await app.listen(port);
  console.log(`\nApplication on ${port}`);
}
bootstrap();
