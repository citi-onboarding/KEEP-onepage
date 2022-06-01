import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class All {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    url: string
}