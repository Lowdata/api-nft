import { Test, TestingModule } from '@nestjs/testing';
import { NftsController } from './nft.controller';

describe('NftController', () => {
  let controller: NftsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NftsController],
    }).compile();

    controller = module.get<NftsController>(NftsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
