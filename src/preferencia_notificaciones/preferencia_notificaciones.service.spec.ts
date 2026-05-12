import { Test, TestingModule } from '@nestjs/testing';
import { PreferenciaNotificacionesService } from './preferencia_notificaciones.service';

describe('PreferenciaNotificacionesService', () => {
  let service: PreferenciaNotificacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PreferenciaNotificacionesService],
    }).compile();

    service = module.get<PreferenciaNotificacionesService>(PreferenciaNotificacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
