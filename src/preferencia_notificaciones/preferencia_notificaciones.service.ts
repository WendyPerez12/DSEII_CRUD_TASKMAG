import { Injectable } from '@nestjs/common';
import { CreatePreferenciaNotificacioneDto } from './dto/create-preferencia_notificacione.dto';
import { UpdatePreferenciaNotificacioneDto } from './dto/update-preferencia_notificacione.dto';

@Injectable()
export class PreferenciaNotificacionesService {
  create(createPreferenciaNotificacioneDto: CreatePreferenciaNotificacioneDto) {
    return 'This action adds a new preferenciaNotificacione';
  }

  findAll() {
    return `This action returns all preferenciaNotificaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} preferenciaNotificacione`;
  }

  update(id: number, updatePreferenciaNotificacioneDto: UpdatePreferenciaNotificacioneDto) {
    return `This action updates a #${id} preferenciaNotificacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} preferenciaNotificacione`;
  }
}
