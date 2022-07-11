import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Etudiant } from './etudiant.entity';
import { EtudiantsController } from './etudiants.controller';
import { EtudiantsService } from './etudiants.service';

@Module({
  imports: [TypeOrmModule.forFeature([Etudiant])],
  controllers: [EtudiantsController],
  providers: [EtudiantsService]
})
export class EtudiantsModule {}
