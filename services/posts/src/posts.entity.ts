import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("posts")
export class PostEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({
    type: "varchar",
    length: 50,
    unique: true,
    nullable: false
  })
  public title: string;

  @Column({
    type: "text",
    nullable: false
  })
  public body: string;
}
