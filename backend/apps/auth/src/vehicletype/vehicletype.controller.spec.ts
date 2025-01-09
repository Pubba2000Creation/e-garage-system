import { Test, TestingModule } from '@nestjs/testing';
import { VehicletypeController } from './vehicletype.controller';
import { VehicletypeService } from './vehicletype.service';

describe('VehicletypeController', () => {
  let controller: VehicletypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehicletypeController],
      providers: [VehicletypeService],
    }).compile();

    controller = module.get<VehicletypeController>(VehicletypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
