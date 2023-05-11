import { IsString, IsUUID, Length } from "class-validator";

export class CreatePostRequest {
  @IsString()
  @Length(3, 50)
  public title: string;

  @IsString()
  public body: string;
}

export class DeletePostRequest {
  @IsString()
  @IsUUID()
  public id: string;
}
