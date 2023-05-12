import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { catchError, map, of } from "rxjs";

@Injectable()
export class PostsService {
  public constructor(private readonly httpService: HttpService) { }

  public getPosts() {
    return this.httpService.get("http://posts-service").pipe(map(response => response.data));
  }

  public createPost(body: unknown) {
    return this.httpService.post("http://posts-service", body).pipe(map(response => response.data));
  }

  public deletePost(id: string, body: unknown) {
    return this.httpService.delete(`http://posts-service/${id}`, body).pipe(map(response => response.data));
  }
}
