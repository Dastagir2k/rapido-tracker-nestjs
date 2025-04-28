import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

// RiderCoordinatesDocument is a type that represents a hydrated document of the RiderCoordinates schema.
export type RiderCoordinatesDocument = HydratedDocument<RiderCoordinates>;

@Schema()
export class RiderCoordinates {

    // The @Prop decorator is used to define a property in the schema.
    @Prop({ required: true })
    lat:number;

    @Prop({ required: true })
    log:number;

    @Prop({ required: true })
    riderId:string;
}

export const RiderCoordinatesSchema = SchemaFactory.createForClass(RiderCoordinates);