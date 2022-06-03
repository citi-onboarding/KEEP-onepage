import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
<<<<<<< HEAD:server/src/models/Projects.ts
export class Projects {
=======
export class Banner {
>>>>>>> main:server/src/models/Banner.ts

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
<<<<<<< HEAD:server/src/models/Projects.ts
    title: string

    @Column()
    description: string

    @Column()
    image: string

=======
    media: string;

    @Column()
    title: string;
>>>>>>> main:server/src/models/Banner.ts
}