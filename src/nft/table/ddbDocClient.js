"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ddbDocClient = void 0;
var ddb_1 = require("./ddb");
var lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
var marshallOptions = {
    // Whether to automatically convert empty strings, blobs, and sets to `null`.
    convertEmptyValues: false,
    // Whether to remove undefined values while marshalling.
    removeUndefinedValues: true,
    // Whether to convert typeof object to map attribute.
    convertClassInstanceToMap: false, // false, by default.
};
var unmarshallOptions = {
    // Whether to return numbers as a string instead of converting them to native JavaScript numbers.
    wrapNumbers: false, // false, by default.
};
// Create the DynamoDB document client.
var ddbDocClient = lib_dynamodb_1.DynamoDBDocumentClient.from(ddb_1.ddb, {
    marshallOptions: marshallOptions,
    unmarshallOptions: unmarshallOptions,
});
exports.ddbDocClient = ddbDocClient;
