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

  async findOne(filterQuery: FilterQuery<TDocument>): Promise<{ document: TDocument; message: string }> {
    const document = await this.model.findOne(filterQuery).lean(true) as TDocument;
    let message = document ? 'Successfully found in the system' : 'Not found in the system';
    if (!document) {
      this.logger.warn(`Document not found with filter query: ${JSON.stringify(filterQuery)}`);
    }
    return { document, message };
  }

  async find(filterQuery: FilterQuery<TDocument>): Promise<{ documents: TDocument[]; message: string }> {
    const documents = await this.model.find(filterQuery).lean(true) as TDocument[];
    const message = documents.length ? 'Successfully found in the system' : 'Not found in the system';
    return { documents, message };
  }

  async updateOne(
    filterQuery: FilterQuery<TDocument>,
    update: UpdateQuery<TDocument>,
  ): Promise<{ document: TDocument; message: string }> {
    const document = await this.model.findOneAndUpdate(filterQuery, update, { new: true }).lean(true) as TDocument;
    const message = document ? 'Update successful' : 'Not found in the system';
    return { document, message };
  }

  async deleteOne(filterQuery: FilterQuery<TDocument>): Promise<{ document: TDocument; message: string }> {
    const document = await this.model.findOneAndDelete(filterQuery).lean(true) as TDocument;
    const message = document ? 'Delete successful' : 'Not found in the system';
    return { document, message };
  }
}
