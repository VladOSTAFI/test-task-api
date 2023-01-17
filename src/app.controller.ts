import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { GetDataRespDto } from './dto/get-data-resp.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:int')
  getData(@Param('int') int: number): GetDataRespDto {
    const code = this.appService.getCode(int)
    return { code };
  }
}
