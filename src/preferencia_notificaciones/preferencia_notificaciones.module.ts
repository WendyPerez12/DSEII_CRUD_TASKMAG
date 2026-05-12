import { Module } from '@nestjs/common';
import { PreferenciaNotificacionesService } from './preferencia_notificaciones.service';
import { PreferenciaNotificacionesController } from './preferencia_notificaciones.controller';

@Module({
  controllers: [PreferenciaNotificacionesController],
  providers: [PreferenciaNotificacionesService],
})
export class PreferenciaNotificacionesModule {}
