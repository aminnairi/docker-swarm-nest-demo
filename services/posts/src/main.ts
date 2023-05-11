import { NestFactory } from '@nestjs/core';
import { PostsModule } from './posts.module';
import { Transport } from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.createMicroservice(PostsModule, {
    transport: Transport.TCP,
    options: {
      host: "0.0.0.0",
      port: 3001
    }
  });

  await app.listen();
}
bootstrap();
