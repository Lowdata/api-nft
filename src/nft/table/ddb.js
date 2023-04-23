"use strict";
//Create the client.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ddb = void 0;
var client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
var ddb = new client_dynamodb_1.DynamoDBClient({ region: 'eu-north-1' });
exports.ddb = ddb;
