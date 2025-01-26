import { Logger, NotFoundException } from '@nestjs/common';
import { Model, Types, FilterQuery, UpdateQuery } from 'mongoose';
import { AbstractDocument } from './abstract.schema';

export abstract class AbstractRepository<TDocument extends AbstractDocument> {
  protected readonly logger: Logger;

  constructor(protected readonly model: Model<TDocument>) {
    this.logger = new Logger(model.modelName);
  }

  async create(
    document: Omit<TDocument, '_id'>,
  ): Promise<{ document: TDocument; message: string }> {
    try {
      const createdDocument = new this.model({
        ...document,
        _id: new Types.ObjectId(),
      });

      const savedDocument = await createdDocument.save();
      return { document: savedDocument.toJSON() as TDocument, message: 'Creation is successful' };
    } catch (error) {
      this.logger.error('Error occurred during creation:', error);
      throw new NotFoundException('Error occurred during creation');
    }
  }

  async findOne(
    filterQuery: FilterQuery<TDocument>,
  ): Promise<{ document: TDocument; message: string }> {
    let successMessage = '';
    const document = (await this.model
      .findOne(filterQuery)
      .lean(true)) as TDocument;
    if (!document) {
      this.logger.warn(
        `Document not found with filter query: ${JSON.stringify(filterQuery)}`,
      );
      // throw new NotFoundException('The document was not found in database');
      successMessage = 'Not found in the system';
    } else {
      successMessage = 'Successfully found in the system';
    }
    return { document, message: successMessage };
  }

  async findByUser(
    userId: string,
  ): Promise<{ document: TDocument; message: string }> {
    const document = (await this.model.find().lean(true)) as TDocument;
    let successMessage = '';
    if (!document) {
      this.logger.warn(
        `Document not found with filter query: ${JSON.stringify(userId)}`,
      );
      // throw new NotFoundException('The documents not found in database');
      successMessage = 'Not found in the system';
    } else {
      successMessage = 'Successfully found in the system';
    }
    return { document, message: successMessage };
  }


async findOneAndUpdate(
    filterQuery: FilterQuery<TDocument>,
    update: UpdateQuery<TDocument>,
  ): Promise<{ document: TDocument; message: string }> {
    const document = (await this.model
      .findOneAndUpdate(filterQuery, update, { new: true })
      .lean(true)) as TDocument;
    let successMessage = '';
    if (!document) {
      this.logger.warn(
        `Document not found with filter query: ${JSON.stringify(filterQuery)}`,
      );
      // throw new NotFoundException('The document was not found');
      successMessage = 'Not found in the system';
    } else {
      successMessage = 'Update is successfully completed';
    }
    return { document, message: successMessage };
  }

  async find(
    filterQuery: FilterQuery<TDocument>,
  ): Promise<{ documents: TDocument[]; message: string }> {
    const documents = (await this.model
      .find(filterQuery)
      .lean(true)) as TDocument[];
    let successMessage = '';
    if (documents.length === 0) {
      this.logger.warn(
        `Documents not found with filter query: ${JSON.stringify(filterQuery)}`,
      );
      // throw new NotFoundException('No documents found in the Database');
      successMessage = 'Not found in the system';
    } else {
      successMessage = 'Successfully found in the system';
    }
    return { documents, message: successMessage };
  }

  async findOneAndDelete(
    filterQuery: FilterQuery<TDocument>,
  ): Promise<{ document: TDocument; message: string }> {
    const document = (await this.model
      .findOneAndDelete(filterQuery)
      .lean(true)) as TDocument;
    if (!document) {
      this.logger.warn(
        `Document not found with filter query: ${JSON.stringify(filterQuery)}`,
      );
      throw new NotFoundException('The document was not in the Databse');
    }
    const successMessage = 'Delete is successfully completed';
    return { document, message: successMessage };
  }
}
