import { Controller, Get } from '@nestjs/common';
import { RiderServiceService } from './rider-service.service';

@Controller()
export class RiderServiceController {
  constructor(private readonly riderServiceService: RiderServiceService) {}

  @Get()
  getHello(): string {
    return this.riderServiceService.getHello();
  }
}
