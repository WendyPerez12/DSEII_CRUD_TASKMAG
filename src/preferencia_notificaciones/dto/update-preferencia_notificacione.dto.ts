import { PartialType } from '@nestjs/mapped-types';
import { CreatePreferenciaNotificacioneDto } from './create-preferencia_notificacione.dto';

export class UpdatePreferenciaNotificacioneDto extends PartialType(CreatePreferenciaNotificacioneDto) {}
