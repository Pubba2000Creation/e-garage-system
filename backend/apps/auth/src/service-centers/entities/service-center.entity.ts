import { AbstractDocument } from "@app/common";
import { SchemaFactory } from "@nestjs/mongoose";

export class ServiceCenterDocument extends AbstractDocument {
    
}


export const ServiceCenterSchema = SchemaFactory.createForClass(ServiceCenterDocument)