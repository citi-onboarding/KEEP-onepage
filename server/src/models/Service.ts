import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Service {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    serviceImage: string

    @Column()
    serviceName: string

    @Column()
    serviceDescription: string

}