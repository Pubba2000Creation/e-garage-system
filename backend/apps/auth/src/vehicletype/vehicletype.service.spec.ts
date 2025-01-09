import { Test, TestingModule } from '@nestjs/testing';
import { VehicletypeService } from './vehicletype.service';

describe('VehicletypeService', () => {
  let service: VehicletypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehicletypeService],
    }).compile();

    service = module.get<VehicletypeService>(VehicletypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
