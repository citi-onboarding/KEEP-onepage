import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Banner {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    image: string;

    @Column()
    title: string;
}