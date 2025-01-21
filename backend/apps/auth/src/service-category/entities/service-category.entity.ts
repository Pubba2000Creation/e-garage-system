import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ versionKey: false, timestamps: true})
export class ServiceCategoryDocument extends AbstractDocument { 

    @Prop({ required: true, type: String, unique: true })
    name: string; // Example: 'Oil Change', 'Tire Replacement', etc.

    @Prop({ type: String })
    description?: string; // Optional: Brief description of the category.

    @Prop({ type: Boolean, default: true })
    isActive: boolean; // Only active categories are visible to users.

    @Prop({ type: String, default: 'admin' })
    createdBy: string; // Tracks who added the category.
}

export const ServiceCategorySchema = SchemaFactory.createForClass(ServiceCategoryDocument)