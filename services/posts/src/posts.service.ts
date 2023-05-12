import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from './posts.entity';
import { CreatePostRequest } from './posts.request';

@Injectable()
export class PostsService {
  public constructor(@InjectRepository(PostEntity) private readonly postRepository: Repository<PostEntity>) { }

  public async getPosts() {
    const posts = await this.postRepository.find();

    return posts;
  }

  public createPost(createPostRequest: CreatePostRequest) {
    const post = this.postRepository.create(createPostRequest);

    return this.postRepository.save(post);
  }

  public deletePost(id: string) {
    return this.postRepository.delete({ id });
  }
}
