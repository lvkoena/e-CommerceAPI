import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('products')
export class Product {
    constructor(initialData: Partial<Product> = null) {
        if (initialData !== null) {
            Object.assign(this, initialData);
        }
    }

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar' })
    name: string;

    @Column ({ name: 'unit_price', type: 'numeric' })
    unitPrice: number;

    @Column ({ type: 'text' })
    description: string;

    @Column ({ type: 'varchar' })
    image: string;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamptz',
        default: 'now()',
        readonly: true,
    })
    createdAt: string;

    @UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamptz',
        default: 'now()',
    })

    updatedAt: string;

    @DeleteDateColumn ({
        name: 'deleted_at',
        type: 'timestamptz',
    })
    deletedAt: string;
}