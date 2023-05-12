import { Body, Controller, Get, Param, Delete, Post, UseFilters } from '@nestjs/common';
import { PostsExceptionFilter } from './posts.filter';
import { PostsService } from './posts.service';

@Controller('posts')
@UseFilters(PostsExceptionFilter)
export class PostsController {
  public constructor(public readonly postsService: PostsService) { }

  @Get()
  public getPosts() {
    return this.postsService.getPosts();
  }

  @Post()
  public createPost(@Body() body: unknown) {
    return this.postsService.createPost(body);
  }

  @Delete(":id")
  public deletePost(@Param("id") id: string, body: unknown) {
    return this.postsService.deletePost(id, body);
  }
}
