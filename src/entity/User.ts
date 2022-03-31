import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Question } from "./Question";
import { Reply } from "./Reply";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public firstName: string;
    
    @Column()
    public lastName: string;

    @Column()
    public email: string;

    @Column()
    public password: string;

    @Column()
    public admin: boolean;

    @OneToMany(() => Question, (question) => question.user)
    questions: Question[];

    @OneToMany(() => Reply, (response) => response.user)
    responses: Reply[];
}