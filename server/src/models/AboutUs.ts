import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class AboutUs {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    mission_title: string

    @Column()
    mission_description: string

    @Column()
    grid_title: string

}