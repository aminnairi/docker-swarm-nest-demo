import { Controller, ValidationPipe } from '@nestjs/common';
import { EventPattern, Payload } from "@nestjs/microservices";
import { CreatePostRequest, DeletePostRequest } from './posts.request';
import { PostsService } from './posts.service';

@Controller()
export class PostsController {
  constructor(public readonly postsService: PostsService) { }

  @EventPattern("getPosts")
  public getPosts() {
    return this.postsService.getPosts();
  }

  @EventPattern("createPost")
  public createPost(@Payload(ValidationPipe) createPostRequest: CreatePostRequest) {
    return this.postsService.createPost(createPostRequest);
  }

  @EventPattern("deletePost")
  public deletePost(@Payload(ValidationPipe) deletePostRequest: DeletePostRequest) {
    return this.postsService.deletePost(deletePostRequest);
  }
}
