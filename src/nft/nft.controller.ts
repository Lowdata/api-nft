import { Controller, Get, Param } from '@nestjs/common';
import { NftsService } from './nft.service';

@Controller('nfts')
export class NftsController {
  constructor(private readonly nftsService: NftsService) {
    
    
  }

  @Get('/:address')
  async getNfts() {
    return this.nftsService.seconf();
  }
}
