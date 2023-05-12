import { Controller, Delete, Get, Param, ParseUUIDPipe, Post, ValidationPipe } from '@nestjs/common';
import { Payload } from "@nestjs/microservices";
import { CreatePostRequest } from './posts.request';
import { PostsService } from './posts.service';

@Controller()
export class PostsController {
  constructor(public readonly postsService: PostsService) { }

  @Get()
  public async getPosts() {
    const posts = await this.postsService.getPosts();

    return posts;
  }

  @Post()
  public createPost(@Payload(ValidationPipe) createPostRequest: CreatePostRequest) {
    return this.postsService.createPost(createPostRequest);
  }

  @Delete(":id")
  public deletePost(@Param("id", ParseUUIDPipe) id: string) {
    return this.postsService.deletePost(id);
  }
}
