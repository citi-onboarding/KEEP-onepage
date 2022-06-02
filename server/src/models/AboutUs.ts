import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class AboutUs {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

}