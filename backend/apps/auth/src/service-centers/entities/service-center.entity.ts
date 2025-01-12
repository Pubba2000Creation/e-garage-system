import { AbstractDocument } from "@app/common";
import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Schema } from "@nestjs/mongoose";
import { ServiceCenterStatus } from "../enum/ServiceCenterStatus.enum";

@Schema({ versionKey: false, timestamps: true})
export class ServiceCenterDocument extends AbstractDocument {

    @Prop({ type: String, required: true })
    userId: string;

    @Prop({ type: String, required: true })
    serviceTitle: string;

    @Prop({ type: [String], required: true })
    serviceCategories: string[];

    @Prop({ type: String, required: true })
    description: string;

    @Prop({ type: [String], required: false, default: [] })
    specializedVehicles: string[];

    @Prop({ type: String, required: true })
    mobileNumber: string;

    @Prop({ type: String, required: false })
    telephoneNumber?: string;

    @Prop({ type: String, required: true })
    locationURL: string;

    @Prop({ type: [String], required: false, default: [] })
    imageGallery?: string[];

    @Prop({ type: String, required: true })
    ownerName: string;

    @Prop({ type: String, required: true })
    ownerNIC: string;

    @Prop({ type: String, required: true })
    businessRegistrationCertificate: string;

    @Prop({
        type: String,
        enum: ServiceCenterStatus,
        required: true,
        default: ServiceCenterStatus.PENDING,
    })
    status: ServiceCenterStatus;

}


export const ServiceCenterSchema = SchemaFactory.createForClass(ServiceCenterDocument)