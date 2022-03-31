import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./Question";
import { User } from "./User";

@Entity()
export class Reply {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public description: string;

    @Column()
    public createdOn: Date;

    @ManyToOne(() => Question, (question) => question.replies)
    public question: Question;

    @ManyToOne(() => User, (user) => user.responses)
    public user: User;
}