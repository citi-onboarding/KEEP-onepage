import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
<<<<<<<< HEAD:server/src/models/AboutUs.ts
export class AboutUs {
========
export class Banner {
>>>>>>>> main:server/src/models/Banner.ts

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
<<<<<<<< HEAD:server/src/models/AboutUs.ts
    mission_title: string

    @Column()
    mission_description: string

    @Column()
    grid_title: string

========
    media: string;

    @Column()
    title: string;
>>>>>>>> main:server/src/models/Banner.ts
}