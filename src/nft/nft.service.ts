import { Injectable } from '@nestjs/common';
import { DynamoDB } from 'aws-sdk';
import Moralis from 'moralis';
import { EvmChain } from "@moralisweb3/common-evm-utils";
import { exec } from 'child_process';
import Nft from './nft.model'
import { stringify } from 'querystring';

import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "./table/ddbDocClient";
import { NftModule } from "./nft.module";

let nft: Nft;

// const command = 'tsc nft.servi';

// exec(command, (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error executing command: ${error}`);
//     return;
//   }
  
// });


@Injectable()
export class NftsService {
  private readonly dynamoDB: DynamoDB;
  private readonly moralis: typeof Moralis;
  

  constructor() {
    this.dynamoDB = new DynamoDB({ region: 'eu-north-1' }); // Replace with your desired region
    this.moralis = Moralis; 
    Moralis.start({
        apiKey: "JRYnwiErZhxoxdGD1fKslNfx0CJNFNgEPg3WLtpU239mvT6FdXumtzX0MScXQYgu"
    });// Replace with your Moralis app ID and key
  }

  async runCommand(command: string): Promise<string> {
    return new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          reject(error);
        } else {
          resolve(stdout);
        }
      });
    });
  }

  async getNftsByAddress() {
    

  }

  
  

  async seconf(){

    
    const chain = EvmChain.ETHEREUM;
    const address = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB";

    const nfts = await Moralis.EvmApi.nft.getContractNFTs({
        address,
        chain,

    });
    const hhh = [];
    // const resul = await this.runCommand('ls');
    // console.log(resul);
    
         
        const hh = nfts.result;
        // // nft.tokenAddress = hh.tokenAddress;
        // nft.walletAddress = address;
        // nft.tokenAddress =  String(hh.tokenAddress)
        // nft.nftsName= hh.name;
        // nft.nftDesc =  null;
        // nft.thumbnailUrl=hh.tokenUri;
        
        // nft.Metadata=String(hh.metadata);
        // nft.refreshTime= Math.floor(Date.now()/1000);
        // nft.mediaType = String(hh.media);

        hhh.push(hh);
        
    
    // const hh = nfts.result[0];

    return hhh[0];

  }

}

