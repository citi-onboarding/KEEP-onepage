import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
<<<<<<<< HEAD:server/src/models/Projects.ts
export class Projects {
========
export class Banner {
>>>>>>>> f8180f7f37c109001642e2091f329af28d1c94b9:server/src/models/Banner.ts

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
<<<<<<<< HEAD:server/src/models/Projects.ts
    title: string

    @Column()
    description: string

    @Column()
    image: string

========
    media: string;

    @Column()
    title: string;
>>>>>>>> f8180f7f37c109001642e2091f329af28d1c94b9:server/src/models/Banner.ts
}