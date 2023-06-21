
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity()
export class Employee extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column()
    phone!: string

    @Column()
    email!: string

    @Column()
    company!: string

    @Column()
    department!: string

    @Column({ default: true })
    status!: boolean
}