import { AbstractDocument } from "@app/common";
import { SchemaFactory } from "@nestjs/mongoose";

export class VehicletypeDocument extends AbstractDocument {
    name:string
    description:string
}

export const VehicletypeSchema = SchemaFactory.createForClass(VehicletypeDocument);