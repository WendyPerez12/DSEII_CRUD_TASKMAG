import { Test, TestingModule } from '@nestjs/testing';
import { PreferenciaNotificacionesController } from './preferencia_notificaciones.controller';
import { PreferenciaNotificacionesService } from './preferencia_notificaciones.service';

describe('PreferenciaNotificacionesController', () => {
  let controller: PreferenciaNotificacionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PreferenciaNotificacionesController],
      providers: [PreferenciaNotificacionesService],
    }).compile();

    controller = module.get<PreferenciaNotificacionesController>(PreferenciaNotificacionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
