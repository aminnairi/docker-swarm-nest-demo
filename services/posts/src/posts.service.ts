import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from './posts.entity';
import { CreatePostRequest, DeletePostRequest } from './posts.request';

@Injectable()
export class PostsService {
  public constructor(@InjectRepository(PostEntity) private readonly postRepository: Repository<PostEntity>) { }

  public getPosts() {
    return this.postRepository.find();
  }

  public createPost(createPostRequest: CreatePostRequest) {
    const post = this.postRepository.create(createPostRequest);

    return this.postRepository.save(post);
  }

  public deletePost(deletePostRequest: DeletePostRequest) {
    return this.postRepository.delete(deletePostRequest.id);
  }
}
