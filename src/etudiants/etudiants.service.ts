import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Etudiant } from './etudiant.entity';

@Injectable()
export class EtudiantsService {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createEtudiant(_note: Etudiant) {
        throw new Error('Method not implemented.');
    }
   /* getEtudiant() {
        throw new Error('Method not implemented.');
    }*/

    constructor(
        @InjectRepository(Etudiant) private EtudiantsRepository: Repository<Etudiant>,
      ) {}
      async findAll(): Promise<Etudiant[]> {
        return await this.EtudiantsRepository.find();
      }
    
      async findOne(id: string): Promise<Etudiant> {
        return await this.EtudiantsRepository.findOne(id);
      }
    
      async create(etudiant: Etudiant) {
        this.EtudiantsRepository.save(etudiant);
      }
    
      async remove(id: string): Promise<void> {
        await this.EtudiantsRepository.delete(id);
      }
    
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async edit(id: number, etudiant: Etudiant): Promise<Etudiant> {
        const editeEtudiant = await this.EtudiantsRepository.findOne(id);
        if (!editeEtudiant) {
          throw new NotFoundException('etudiant  is not found');
        }
        editeEtudiant.nom = etudiant.nom;
        editeEtudiant.prenoms = etudiant.prenoms;
        editeEtudiant.filiere = etudiant.filiere;
        await editeEtudiant.save();
        return editeEtudiant;
      }
  
}
