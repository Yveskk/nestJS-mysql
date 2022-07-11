import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, MaxLength, MinLength } from 'class-validator';

@Entity()
export class Etudiant extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  @MinLength(1)
  @MaxLength(150)
  @IsString()
  nom: string;

  @Column()
  @MinLength(1)
  @IsString()
  prenoms: string;

  @Column()
  @MinLength(1)
  @IsString()
  filiere: string;
    static nom: string;
    static prenoms: string;
    static filiere: string;
}
