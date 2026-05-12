import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PreferenciaNotificacionesService } from './preferencia_notificaciones.service';
import { CreatePreferenciaNotificacioneDto } from './dto/create-preferencia_notificacione.dto';
import { UpdatePreferenciaNotificacioneDto } from './dto/update-preferencia_notificacione.dto';

@Controller('preferencia-notificaciones')
export class PreferenciaNotificacionesController {
  constructor(private readonly preferenciaNotificacionesService: PreferenciaNotificacionesService) {}

  @Post()
  create(@Body() createPreferenciaNotificacioneDto: CreatePreferenciaNotificacioneDto) {
    return this.preferenciaNotificacionesService.create(createPreferenciaNotificacioneDto);
  }

  @Get()
  findAll() {
    return this.preferenciaNotificacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.preferenciaNotificacionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePreferenciaNotificacioneDto: UpdatePreferenciaNotificacioneDto) {
    return this.preferenciaNotificacionesService.update(+id, updatePreferenciaNotificacioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.preferenciaNotificacionesService.remove(+id);
  }
}
