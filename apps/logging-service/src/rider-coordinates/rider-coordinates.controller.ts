import { Body, Controller, Get, Post } from '@nestjs/common';
import { createCoordinatesDTO } from './dto/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
    // The controller is responsible for handling incoming requests and returning responses to the client.
    constructor( private coordinatesService: RiderCoordinatesService) {}
    @Get()
    getAllRiderCoordinates() {
        return 'Get all rider coordinates';
    }

    @Post()
   async saveRiderCoordinates(
        @Body() createCoordinateDTO:createCoordinatesDTO
    ) {
        
        return  this.coordinatesService.saveRiderCoordinates(createCoordinateDTO);
    }
}
