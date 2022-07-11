import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EtudiantsModule } from './etudiants/etudiants.module';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    NotesModule ,
    EtudiantsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
