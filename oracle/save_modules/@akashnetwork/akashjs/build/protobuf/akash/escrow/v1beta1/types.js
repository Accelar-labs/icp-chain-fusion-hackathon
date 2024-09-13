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
exports.Payment = exports.Account = exports.AccountID = exports.payment_StateToJSON = exports.payment_StateFromJSON = exports.Payment_State = exports.account_StateToJSON = exports.account_StateFromJSON = exports.Account_State = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "akash.escrow.v1beta1";
/** State stores state for an escrow account */
var Account_State;
(function (Account_State) {
    /** invalid - AccountStateInvalid is an invalid state */
    Account_State[Account_State["invalid"] = 0] = "invalid";
    /** open - AccountOpen is the state when an account is open */
    Account_State[Account_State["open"] = 1] = "open";
    /** closed - AccountClosed is the state when an account is closed */
    Account_State[Account_State["closed"] = 2] = "closed";
    /** overdrawn - AccountOverdrawn is the state when an account is overdrawn */
    Account_State[Account_State["overdrawn"] = 3] = "overdrawn";
    Account_State[Account_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Account_State = exports.Account_State || (exports.Account_State = {}));
function account_StateFromJSON(object) {
    switch (object) {
        case 0:
        case "invalid":
            return Account_State.invalid;
        case 1:
        case "open":
            return Account_State.open;
        case 2:
        case "closed":
            return Account_State.closed;
        case 3:
        case "overdrawn":
            return Account_State.overdrawn;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Account_State.UNRECOGNIZED;
    }
}
exports.account_StateFromJSON = account_StateFromJSON;
function account_StateToJSON(object) {
    switch (object) {
        case Account_State.invalid:
            return "invalid";
        case Account_State.open:
            return "open";
        case Account_State.closed:
            return "closed";
        case Account_State.overdrawn:
            return "overdrawn";
        case Account_State.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.account_StateToJSON = account_StateToJSON;
/** Payment State */
var Payment_State;
(function (Payment_State) {
    /** invalid - PaymentStateInvalid is the state when the payment is invalid */
    Payment_State[Payment_State["invalid"] = 0] = "invalid";
    /** open - PaymentStateOpen is the state when the payment is open */
    Payment_State[Payment_State["open"] = 1] = "open";
    /** closed - PaymentStateClosed is the state when the payment is closed */
    Payment_State[Payment_State["closed"] = 2] = "closed";
    /** overdrawn - PaymentStateOverdrawn is the state when the payment is overdrawn */
    Payment_State[Payment_State["overdrawn"] = 3] = "overdrawn";
    Payment_State[Payment_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Payment_State = exports.Payment_State || (exports.Payment_State = {}));
function payment_StateFromJSON(object) {
    switch (object) {
        case 0:
        case "invalid":
            return Payment_State.invalid;
        case 1:
        case "open":
            return Payment_State.open;
        case 2:
        case "closed":
            return Payment_State.closed;
        case 3:
        case "overdrawn":
            return Payment_State.overdrawn;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Payment_State.UNRECOGNIZED;
    }
}
exports.payment_StateFromJSON = payment_StateFromJSON;
function payment_StateToJSON(object) {
    switch (object) {
        case Payment_State.invalid:
            return "invalid";
        case Payment_State.open:
            return "open";
        case Payment_State.closed:
            return "closed";
        case Payment_State.overdrawn:
            return "overdrawn";
        case Payment_State.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.payment_StateToJSON = payment_StateToJSON;
function createBaseAccountID() {
    return { $type: "akash.escrow.v1beta1.AccountID", scope: "", xid: "" };
}
exports.AccountID = {
    $type: "akash.escrow.v1beta1.AccountID",
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== "") {
            writer.uint32(10).string(message.scope);
        }
        if (message.xid !== "") {
            writer.uint32(18).string(message.xid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = reader.string();
                    break;
                case 2:
                    message.xid = reader.string();
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
            $type: exports.AccountID.$type,
            scope: isSet(object.scope) ? String(object.scope) : "",
            xid: isSet(object.xid) ? String(object.xid) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined && (obj.scope = message.scope);
        message.xid !== undefined && (obj.xid = message.xid);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountID();
        message.scope = object.scope ?? "";
        message.xid = object.xid ?? "";
        return message;
    }
};
typeRegistry_1.messageTypeRegistry.set(exports.AccountID.$type, exports.AccountID);
function createBaseAccount() {
    return {
        $type: "akash.escrow.v1beta1.Account",
        id: undefined,
        owner: "",
        state: 0,
        balance: undefined,
        transferred: undefined,
        settledAt: long_1.default.ZERO
    };
}
exports.Account = {
    $type: "akash.escrow.v1beta1.Account",
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== undefined) {
            exports.AccountID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        if (message.balance !== undefined) {
            coin_1.Coin.encode(message.balance, writer.uint32(34).fork()).ldelim();
        }
        if (message.transferred !== undefined) {
            coin_1.Coin.encode(message.transferred, writer.uint32(42).fork()).ldelim();
        }
        if (!message.settledAt.isZero()) {
            writer.uint32(48).int64(message.settledAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = exports.AccountID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.state = reader.int32();
                    break;
                case 4:
                    message.balance = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.transferred = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.settledAt = reader.int64();
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
            $type: exports.Account.$type,
            id: isSet(object.id) ? exports.AccountID.fromJSON(object.id) : undefined,
            owner: isSet(object.owner) ? String(object.owner) : "",
            state: isSet(object.state) ? account_StateFromJSON(object.state) : 0,
            balance: isSet(object.balance) ? coin_1.Coin.fromJSON(object.balance) : undefined,
            transferred: isSet(object.transferred) ? coin_1.Coin.fromJSON(object.transferred) : undefined,
            settledAt: isSet(object.settledAt) ? long_1.default.fromValue(object.settledAt) : long_1.default.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id ? exports.AccountID.toJSON(message.id) : undefined);
        message.owner !== undefined && (obj.owner = message.owner);
        message.state !== undefined && (obj.state = account_StateToJSON(message.state));
        message.balance !== undefined && (obj.balance = message.balance ? coin_1.Coin.toJSON(message.balance) : undefined);
        message.transferred !== undefined && (obj.transferred = message.transferred ? coin_1.Coin.toJSON(message.transferred) : undefined);
        message.settledAt !== undefined && (obj.settledAt = (message.settledAt || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccount();
        message.id = object.id !== undefined && object.id !== null ? exports.AccountID.fromPartial(object.id) : undefined;
        message.owner = object.owner ?? "";
        message.state = object.state ?? 0;
        message.balance = object.balance !== undefined && object.balance !== null ? coin_1.Coin.fromPartial(object.balance) : undefined;
        message.transferred = object.transferred !== undefined && object.transferred !== null ? coin_1.Coin.fromPartial(object.transferred) : undefined;
        message.settledAt = object.settledAt !== undefined && object.settledAt !== null ? long_1.default.fromValue(object.settledAt) : long_1.default.ZERO;
        return message;
    }
};
typeRegistry_1.messageTypeRegistry.set(exports.Account.$type, exports.Account);
function createBasePayment() {
    return {
        $type: "akash.escrow.v1beta1.Payment",
        accountId: undefined,
        paymentId: "",
        owner: "",
        state: 0,
        rate: undefined,
        balance: undefined,
        withdrawn: undefined
    };
}
exports.Payment = {
    $type: "akash.escrow.v1beta1.Payment",
    encode(message, writer = _m0.Writer.create()) {
        if (message.accountId !== undefined) {
            exports.AccountID.encode(message.accountId, writer.uint32(10).fork()).ldelim();
        }
        if (message.paymentId !== "") {
            writer.uint32(18).string(message.paymentId);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        if (message.state !== 0) {
            writer.uint32(32).int32(message.state);
        }
        if (message.rate !== undefined) {
            coin_1.Coin.encode(message.rate, writer.uint32(42).fork()).ldelim();
        }
        if (message.balance !== undefined) {
            coin_1.Coin.encode(message.balance, writer.uint32(50).fork()).ldelim();
        }
        if (message.withdrawn !== undefined) {
            coin_1.Coin.encode(message.withdrawn, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePayment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountId = exports.AccountID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.paymentId = reader.string();
                    break;
                case 3:
                    message.owner = reader.string();
                    break;
                case 4:
                    message.state = reader.int32();
                    break;
                case 5:
                    message.rate = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.balance = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.withdrawn = coin_1.Coin.decode(reader, reader.uint32());
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
            $type: exports.Payment.$type,
            accountId: isSet(object.accountId) ? exports.AccountID.fromJSON(object.accountId) : undefined,
            paymentId: isSet(object.paymentId) ? String(object.paymentId) : "",
            owner: isSet(object.owner) ? String(object.owner) : "",
            state: isSet(object.state) ? payment_StateFromJSON(object.state) : 0,
            rate: isSet(object.rate) ? coin_1.Coin.fromJSON(object.rate) : undefined,
            balance: isSet(object.balance) ? coin_1.Coin.fromJSON(object.balance) : undefined,
            withdrawn: isSet(object.withdrawn) ? coin_1.Coin.fromJSON(object.withdrawn) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountId !== undefined && (obj.accountId = message.accountId ? exports.AccountID.toJSON(message.accountId) : undefined);
        message.paymentId !== undefined && (obj.paymentId = message.paymentId);
        message.owner !== undefined && (obj.owner = message.owner);
        message.state !== undefined && (obj.state = payment_StateToJSON(message.state));
        message.rate !== undefined && (obj.rate = message.rate ? coin_1.Coin.toJSON(message.rate) : undefined);
        message.balance !== undefined && (obj.balance = message.balance ? coin_1.Coin.toJSON(message.balance) : undefined);
        message.withdrawn !== undefined && (obj.withdrawn = message.withdrawn ? coin_1.Coin.toJSON(message.withdrawn) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePayment();
        message.accountId = object.accountId !== undefined && object.accountId !== null ? exports.AccountID.fromPartial(object.accountId) : undefined;
        message.paymentId = object.paymentId ?? "";
        message.owner = object.owner ?? "";
        message.state = object.state ?? 0;
        message.rate = object.rate !== undefined && object.rate !== null ? coin_1.Coin.fromPartial(object.rate) : undefined;
        message.balance = object.balance !== undefined && object.balance !== null ? coin_1.Coin.fromPartial(object.balance) : undefined;
        message.withdrawn = object.withdrawn !== undefined && object.withdrawn !== null ? coin_1.Coin.fromPartial(object.withdrawn) : undefined;
        return message;
    }
};
typeRegistry_1.messageTypeRegistry.set(exports.Payment.$type, exports.Payment);
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
