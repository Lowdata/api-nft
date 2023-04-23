//Create the client.

import {DynamoDBClient} from "@aws-sdk/client-dynamodb"


const ddb =  new DynamoDBClient({region:'eu-north-1'});

export {ddb};