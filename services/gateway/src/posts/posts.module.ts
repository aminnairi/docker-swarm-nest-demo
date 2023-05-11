import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "POSTS_SERVICE",
        transport: Transport.TCP,
        options: {
          host: "posts-service",
          port: 3001
        }
      }
    ])
  ],
  controllers: [PostsController]
})
export class PostsModule { }
