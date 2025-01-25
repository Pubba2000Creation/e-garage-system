import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { string } from "joi";
import { serviceCategorycreatedBy, serviceCategoryStatus } from "../enum/serviceCategoryStatus,enum";

@Schema({ versionKey: false, timestamps: true})
export class ServiceCategoryDocument extends AbstractDocument { 

    @Prop({ required: true, type: String, unique: true })
    name: string; // Example: 'Oil Change', 'Tire Replacement', etc.

    @Prop({ type: String })
    description?: string; // Optional: Brief description of the category.

    
      @Prop({
        type: String,
        enum: serviceCategoryStatus,
        required: true,
        default: serviceCategoryStatus.PENDING,
      })
      status?: serviceCategoryStatus;


    @Prop({ type: String, 
        enum:serviceCategorycreatedBy,
        required: true,
        default: serviceCategorycreatedBy.sericeProvider
     })
    createdBy?: serviceCategorycreatedBy; // Tracks who added the category.
}

export const ServiceCategorySchema = SchemaFactory.createForClass(ServiceCategoryDocument)