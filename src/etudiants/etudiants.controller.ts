import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Etudiant } from './etudiant.entity';
import { EtudiantsService } from './etudiants.service';

@Controller('etudiants')
export class EtudiantsController {
   
    constructor(private etudiantsService: EtudiantsService) {}

    @Get()
    findAll() {
      return this.etudiantsService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id) {
      return this.etudiantsService.findOne(id);
    }
  
    @Post() create(@Body() etudiant: Etudiant) {
      return this.etudiantsService.create(etudiant);
    }
  
    @Put(':id')
    async editNote(@Body() etudiant: Etudiant, @Param('id', ParseIntPipe) id): Promise<Etudiant> {
      const noteEdited = await this.etudiantsService.edit(id, etudiant);
      return noteEdited;
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id) {
      this.etudiantsService.remove(id);
    }
}
