import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class Audiovisual {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    url: string
}