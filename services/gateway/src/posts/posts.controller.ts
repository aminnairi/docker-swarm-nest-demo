import { Body, Controller, Delete, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('posts')
export class PostsController {
  public constructor(@Inject("POSTS_SERVICE") private readonly postsProxy: ClientProxy) { }

  @Get()
  public async getPosts() {
    return this.postsProxy.send("getPosts", {});
  }

  @Post()
  public createPost(@Body() body: unknown) {
    return this.postsProxy.send("createPost", body);
  }

  @Delete(":id")
  public deletePost(@Param("id") id: string) {
    return this.postsProxy.send("deletePost", { id });
  }
}
