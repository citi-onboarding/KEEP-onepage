import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Banner {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    media: string;

    @Column()
    title: string;
}