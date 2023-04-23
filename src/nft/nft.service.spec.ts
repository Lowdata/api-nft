import { Test, TestingModule } from '@nestjs/testing';
import { NftsService } from './nft.service';

describe('NftService', () => {
  let service: NftsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NftsService],
    }).compile();

    service = module.get<NftsService>(NftsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
