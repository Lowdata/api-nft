"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NftsService = void 0;
var common_1 = require("@nestjs/common");
var {
    DynamoDB
} = require("@aws-sdk/client-dynamodb");
var moralis_1 = require("moralis");
var common_evm_utils_1 = require("@moralisweb3/common-evm-utils");
var child_process_1 = require("child_process");
var lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
var ddbDocClient_1 = require("./table/ddbDocClient");
var nft;
// const command = 'tsc nft.servi';
// exec(command, (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error executing command: ${error}`);
//     return;
//   }
// });
var NftsService = exports.NftsService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var NftsService = _classThis = /** @class */ (function () {
        function NftsService_1() {
            var _this = this;
            this.putItem = function () { return __awaiter(_this, void 0, void 0, function () {
                var nft, params, data, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            params = {
                                TableName: "TEST_TABLE",
                                Item: {
                                    TokenAddress: nft.tokenAddress,
                                    NFT_DESC: nft.nftDesc
                                },
                            };
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, ddbDocClient_1.ddbDocClient.send(new lib_dynamodb_1.PutCommand(params))];
                        case 2:
                            data = _a.sent();
                            console.log("Success - item added or updated", data);
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _a.sent();
                            console.log("Error", err_1.stack);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); };
            this.dynamoDB = new DynamoDB({ region: 'eu-north-1' }); // Replace with your desired region
            this.moralis = moralis_1.default;
            moralis_1.default.start({
                apiKey: "JRYnwiErZhxoxdGD1fKslNfx0CJNFNgEPg3WLtpU239mvT6FdXumtzX0MScXQYgu"
            }); // Replace with your Moralis app ID and key
        }
        NftsService_1.prototype.runCommand = function (command) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            (0, child_process_1.exec)(command, function (error, stdout, stderr) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    resolve(stdout);
                                }
                            });
                        })];
                });
            });
        };
        NftsService_1.prototype.getNftsByAddress = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/];
                });
            });
        };
        NftsService_1.prototype.seconf = function () {
            return __awaiter(this, void 0, void 0, function () {
                var chain, address, nfts, hhh, i, hh;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            chain = common_evm_utils_1.EvmChain.ETHEREUM;
                            address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";
                            return [4 /*yield*/, moralis_1.default.EvmApi.nft.getWalletNFTs({
                                    address: address,
                                    chain: chain,
                                })];
                        case 1:
                            nfts = _a.sent();
                            hhh = [];
                            // const resul = await this.runCommand('ls');
                            // console.log(resul);
                            for (i = 0; i < nfts.result.length; i++) {
                                hh = nfts.result[i];
                                // nft.tokenAddress = hh.tokenAddress;
                                nft.walletAddress = address;
                                nft.tokenAddress = String(hh.tokenAddress);
                                nft.nftsName = hh.name;
                                nft.nftDesc = null;
                                nft.thumbnailUrl = hh.tokenUri;
                                nft.Metadata = String(hh.metadata);
                                nft.refreshTime = Math.floor(Date.now() / 1000);
                                nft.mediaType = String(hh.media);
                                // hhh.push(hh);
                            }
                            // const hh = nfts.result[0];
                            return [2 /*return*/, hhh];
                    }
                });
            });
        };
        return NftsService_1;
    }());
    __setFunctionName(_classThis, "NftsService");
    (function () {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        NftsService = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return NftsService = _classThis;
}();
