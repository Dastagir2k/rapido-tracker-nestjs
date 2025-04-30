import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createCoordinatesDTO } from './dto/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
    // The controller is responsible for handling incoming requests and returning responses to the client.
    constructor( private coordinatesService: RiderCoordinatesService) {}
    @Get(":id")
    getRiderCoordinates(
        @Param()
        params: any
    ) {
        console.log("params", params.id);
        

        return this.coordinatesService.getRiderCoordinates(params.id);
    }
    @Get()
    getRiderCoordinatesCheck() {
        return "hi check ";
    }

    @Post()
   async saveRiderCoordinates(
        @Body() createCoordinateDTO:createCoordinatesDTO
    ) {
        
        return  this.coordinatesService.saveRiderCoordinates(createCoordinateDTO);
    }
}
