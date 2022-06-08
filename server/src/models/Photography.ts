import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Photography{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    media: string
    
}