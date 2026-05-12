import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CursosModule } from './cursos/cursos.module';
import { TareasModule } from './tareas/tareas.module';
import { RecordatoriosModule } from './recordatorios/recordatorios.module';
import { PreferenciaNotificacionesModule } from './preferencia_notificaciones/preferencia_notificaciones.module';
import { ComentariosModule } from './comentarios/comentarios.module';
import { ArchivosModule } from './archivos/archivos.module';

@Module({
  imports: [UsuariosModule, CursosModule, TareasModule, RecordatoriosModule, PreferenciaNotificacionesModule, ComentariosModule, ArchivosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
