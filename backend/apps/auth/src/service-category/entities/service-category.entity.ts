import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ versionKey: false, timestamps: true})
export class ServiceCategoryDocument extends AbstractDocument { 

    @Prop({ type: String, required: true })
    CategoryName: string;

    @Prop({ type: String, required: true })
    description: string;
}

export const ServiceCategorySchema = SchemaFactory.createForClass(ServiceCategoryDocument)