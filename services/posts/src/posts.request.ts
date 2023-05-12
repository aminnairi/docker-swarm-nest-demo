import { IsString, Length } from "class-validator";

export class CreatePostRequest {
  @IsString()
  @Length(3, 50)
  public title: string;

  @IsString()
  public body: string;
}
