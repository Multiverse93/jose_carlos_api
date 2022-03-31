import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Reply } from "./Reply";
import { User } from "./User";

@Entity()
export class Question {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public description: string;

    @Column()
    public createdOn: Date;

    @ManyToOne(() => User, (user) => user.questions)
    user: User;

    @OneToMany(() => Reply, (response) => response.question)
    public replies: Reply[];
}