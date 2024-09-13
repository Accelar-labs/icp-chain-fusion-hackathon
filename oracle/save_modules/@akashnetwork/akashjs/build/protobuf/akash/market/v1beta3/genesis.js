"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const params_1 = require("./params");
const order_1 = require("./order");
const lease_1 = require("./lease");
const bid_1 = require("./bid");
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "akash.market.v1beta3";
function createBaseGenesisState() {
    return {
        $type: "akash.market.v1beta3.GenesisState",
        params: undefined,
        orders: [],
        leases: [],
        bids: []
    };
}
exports.GenesisState = {
    $type: "akash.market.v1beta3.GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.orders) {
            order_1.Order.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.leases) {
            lease_1.Lease.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.bids) {
            bid_1.Bid.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.orders.push(order_1.Order.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.leases.push(lease_1.Lease.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.bids.push(bid_1.Bid.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            $type: exports.GenesisState.$type,
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
            orders: Array.isArray(object?.orders) ? object.orders.map((e) => order_1.Order.fromJSON(e)) : [],
            leases: Array.isArray(object?.leases) ? object.leases.map((e) => lease_1.Lease.fromJSON(e)) : [],
            bids: Array.isArray(object?.bids) ? object.bids.map((e) => bid_1.Bid.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        if (message.orders) {
            obj.orders = message.orders.map(e => (e ? order_1.Order.toJSON(e) : undefined));
        }
        else {
            obj.orders = [];
        }
        if (message.leases) {
            obj.leases = message.leases.map(e => (e ? lease_1.Lease.toJSON(e) : undefined));
        }
        else {
            obj.leases = [];
        }
        if (message.bids) {
            obj.bids = message.bids.map(e => (e ? bid_1.Bid.toJSON(e) : undefined));
        }
        else {
            obj.bids = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        message.orders = object.orders?.map(e => order_1.Order.fromPartial(e)) || [];
        message.leases = object.leases?.map(e => lease_1.Lease.fromPartial(e)) || [];
        message.bids = object.bids?.map(e => bid_1.Bid.fromPartial(e)) || [];
        return message;
    }
};
typeRegistry_1.messageTypeRegistry.set(exports.GenesisState.$type, exports.GenesisState);
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
