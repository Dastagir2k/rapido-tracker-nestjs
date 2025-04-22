import { Controller, Get } from '@nestjs/common';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
    @Get()
    getAllRiderCoordinates() {
        return 'Get all rider coordinates';
    }
}
