import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import bcrypt from 'bcrypt'

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 120 })
    name: string

    @Column({ unique: true, length: 160 })
    email: string

    @Column()
    password: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    // Antes de salvar ou atualizar, criptografa a senha
    @BeforeInsert() 
    @BeforeUpdate()
    async hashPassword() {
        // Evita re-hash se a senha já estiver hasheada
        // this.password é a senha do usuário que será salva ou atualizada no banco
        // O bcrypt gera hashes que sempre começam com $2
        // se ela já começa com isso, significa que já foi criptografada e não precisamos criptografar de novo
        if (!this.password.startsWith('$2')) {
            // convertemos usando paseINT pois o tudo que vem do .env sempre é lido como string
            const rounds = parseInt(process.env.BCRYPT_SALT_ROUNDS || '10', 10)
            // bcrypt.hash é uma função assíncrona
            // usamos await pois o cálculo pode levar algum tempo dependendo do saltRounds
            this.password = await bcrypt.hash(this.password, rounds)
        }
    }

    // Método para comparar senha com hash
    // primeiro retorna a promise, que depois será resolvida como boolean true ou false
    async validatePassword(plain: string): Promise<boolean> {
        return bcrypt.compare(plain, this.password)
    }
}