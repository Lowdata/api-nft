import { EvmChain } from "@moralisweb3/common-evm-utils";
import Moralis from 'moralis';
import { ddbDocClient } from "./ddbDocClient";
import { PutCommand } from "@aws-sdk/lib-dynamodb";


const putItem = async () => {

    //moralis data 

    const chain = EvmChain.ETHEREUM;
    const address = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB";

    const nfts = await Moralis.EvmApi.nft.getContractNFTs({
        address,
        chain,

    });
    const hh = nfts.result;
    let aa;
    let bb;
    
    for(var i =0; i<hh.length; i++){
        aa = String(hh[i].tokenAddress);
        bb = String(hh[i].format().media);
        
    }

    

    
    
  // Set the parameters.
   const params = {
    TableName: "TEST_TABLE",
    Item: {
        TokenAddress:aa ,
        NFT_DESC: bb},
  };
  try {
    const data = await ddbDocClient.send(new PutCommand(params));
    console.log("Success - item added or updated", data);
  } catch (err) {
    console.log("Error", err.stack);
  }
};
