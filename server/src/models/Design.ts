import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Design{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    media: string
    
}