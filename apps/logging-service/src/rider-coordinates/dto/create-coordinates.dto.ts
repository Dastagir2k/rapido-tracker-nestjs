import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class createCoordinatesDTO{

    @IsNumber()
    @IsNotEmpty()
    latitude: number;

    @IsNumber()
    @IsNotEmpty()
    longitude: number;

    @IsString() 
    @IsNotEmpty()
    riderId: string;
    
}