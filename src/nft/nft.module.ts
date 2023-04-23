import { Module } from '@nestjs/common';
import { NftsService } from './nft.service';
import { NftsController } from './nft.controller';

@Module({
  providers: [NftsService],
  controllers: [NftsController]
})
export class NftModule {}
