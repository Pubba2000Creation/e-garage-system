import { AbstractRepository } from "@app/common";
import { ServiceCategoryDocument } from "./entities/service-category.entity";
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ServiceCategoryRepository extends AbstractRepository<ServiceCategoryDocument> {

}