import { Test, TestingModule } from '@nestjs/testing';
import { RiderCoordinatesService } from './rider-coordinates.service';

describe('RiderCoordinatesService', () => {
  let service: RiderCoordinatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RiderCoordinatesService],
    }).compile();

    service = module.get<RiderCoordinatesService>(RiderCoordinatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
