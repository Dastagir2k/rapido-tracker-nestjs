import { Body, Controller, Get, Post } from '@nestjs/common';
import { createCoordinatesDTO } from './dto/create-coordinates.dto';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
    @Get()
    getAllRiderCoordinates() {
        return 'Get all rider coordinates';
    }

    @Post()
    saveRiderCoordinates(
        @Body() createCoordinateDTO:createCoordinatesDTO
    ) {
        
        return createCoordinateDTO;
    }
}
