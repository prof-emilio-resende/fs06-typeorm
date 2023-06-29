import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number

    @Index({ unique: true })
    @Column()
    title: string

    @Column()
    content: string

    @ManyToOne(() => User, (user) => user.posts)
    user: User
}