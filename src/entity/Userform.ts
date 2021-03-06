import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, CreateDateColumn, UpdateDateColumn, OneToOne, OneToMany, ManyToMany, JoinTable, Unique } from "typeorm";
import { User } from './User';
import { Form } from './Form';

@Entity()
@Unique(['userId', 'formId'])
export class Userform {  

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  formId: number;

  @Column({ length: 16000, nullable: true })
  contents: string;

  @Column('boolean', { default: false })
  isComplete: boolean;

  @CreateDateColumn({
    name: "created_at"
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: "updated_at"
  })
  updatedAt: Date;

  @ManyToOne(type => User, user => user.userforms, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(type => Form, form => form.userforms)
  form: Form;

}
