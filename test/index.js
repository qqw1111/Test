"use strict";
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
        while (_) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var hardhat_1 = require("hardhat");
describe("Donator", function () {
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function () {
            var Donator, donator, _a, accountOne, accountTwo, accountThree;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, hardhat_1.ethers.getContractFactory("Donator")];
                    case 1:
                        Donator = _b.sent();
                        return [4 /*yield*/, Donator.deploy()];
                    case 2:
                        donator = _b.sent();
                        return [4 /*yield*/, donator.deployed()];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, hardhat_1.ethers.getSigners()];
                    case 4:
                        _a = _b.sent(), accountOne = _a[0], accountTwo = _a[1], accountThree = _a[2];
                        this.accountOne = accountOne;
                        this.accountTwo = accountTwo;
                        this.accountThree = accountThree;
                        this.donator = donator;
                        return [2 /*return*/];
                }
            });
        });
    });
    it("Donation", function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
            return __generator(this, function (_p) {
                switch (_p.label) {
                    case 0:
                        _a = chai_1.expect;
                        return [4 /*yield*/, this.donator.getBalance()];
                    case 1:
                        _a.apply(void 0, [_p.sent()]).to.equal(0);
                        return [4 /*yield*/, (0, chai_1.expect)(this.accountOne.sendTransaction({
                                to: this.donator.address,
                                value: hardhat_1.ethers.utils.parseEther("0"),
                            })).to.be.revertedWith("ERROR: Incorrect donation value.")];
                    case 2:
                        _p.sent();
                        return [4 /*yield*/, this.accountOne.sendTransaction({
                                to: this.donator.address,
                                value: hardhat_1.ethers.utils.parseEther("1"),
                            })];
                    case 3:
                        _p.sent();
                        return [4 /*yield*/, this.accountTwo.sendTransaction({
                                to: this.donator.address,
                                value: hardhat_1.ethers.utils.parseEther("4"),
                            })];
                    case 4:
                        _p.sent();
                        _b = chai_1.expect;
                        _c = parseFloat;
                        _e = (_d = hardhat_1.ethers.utils).formatEther;
                        return [4 /*yield*/, this.donator.getBalance()];
                    case 5:
                        _b.apply(void 0, [_c.apply(void 0, [_e.apply(_d, [_p.sent()])])]).to.equal(5);
                        _f = chai_1.expect;
                        _g = parseFloat;
                        _j = (_h = hardhat_1.ethers.utils).formatEther;
                        return [4 /*yield*/, this.donator.connect(this.accountOne).getMyBalance()];
                    case 6:
                        _f.apply(void 0, [_g.apply(void 0, [_j.apply(_h, [_p.sent()])])]).to.equal(1);
                        _k = chai_1.expect;
                        _l = parseFloat;
                        _o = (_m = hardhat_1.ethers.utils).formatEther;
                        return [4 /*yield*/, this.donator.connect(this.accountTwo).getMyBalance()];
                    case 7:
                        _k.apply(void 0, [_l.apply(void 0, [_o.apply(_m, [_p.sent()])])]).to.equal(4);
                        return [2 /*return*/];
                }
            });
        });
    });
    it("Withdrawal of ETH", function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
            return __generator(this, function (_p) {
                switch (_p.label) {
                    case 0: return [4 /*yield*/, this.accountOne.sendTransaction({
                            to: this.donator.address,
                            value: hardhat_1.ethers.utils.parseEther("1"),
                        })];
                    case 1:
                        _p.sent();
                        return [4 /*yield*/, this.accountTwo.sendTransaction({
                                to: this.donator.address,
                                value: hardhat_1.ethers.utils.parseEther("4"),
                            })];
                    case 2:
                        _p.sent();
                        _a = chai_1.expect;
                        _c = (_b = this.donator
                            .connect(this.accountTwo))
                            .withdraw;
                        return [4 /*yield*/, this.accountThree.getAddress()];
                    case 3: return [4 /*yield*/, _a.apply(void 0, [_c.apply(_b, [_p.sent()])]).to.be.revertedWith("ERROR: You are not the owner.")];
                    case 4:
                        _p.sent();
                        _e = (_d = this.donator).withdraw;
                        return [4 /*yield*/, this.accountThree.getAddress()];
                    case 5: return [4 /*yield*/, _e.apply(_d, [_p.sent()])];
                    case 6:
                        _p.sent();
                        _f = chai_1.expect;
                        _g = parseFloat;
                        _j = (_h = hardhat_1.ethers.utils).formatEther;
                        return [4 /*yield*/, this.donator.getBalance()];
                    case 7:
                        _f.apply(void 0, [_g.apply(void 0, [_j.apply(_h, [_p.sent()])])]).to.equal(0);
                        _k = chai_1.expect;
                        _l = parseFloat;
                        _o = (_m = hardhat_1.ethers.utils).formatEther;
                        return [4 /*yield*/, this.accountThree.getBalance()];
                    case 8:
                        _k.apply(void 0, [_l.apply(void 0, [_o.apply(_m, [_p.sent()])])]).to.equal(10005);
                        return [2 /*return*/];
                }
            });
        });
    });
    it("Get list of users", function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.accountOne.sendTransaction({
                            to: this.donator.address,
                            value: hardhat_1.ethers.utils.parseEther("1"),
                        })];
                    case 1:
                        _e.sent();
                        return [4 /*yield*/, this.accountTwo.sendTransaction({
                                to: this.donator.address,
                                value: hardhat_1.ethers.utils.parseEther("4"),
                            })];
                    case 2:
                        _e.sent();
                        return [4 /*yield*/, this.accountTwo.sendTransaction({
                                to: this.donator.address,
                                value: hardhat_1.ethers.utils.parseEther("4"),
                            })];
                    case 3:
                        _e.sent();
                        return [4 /*yield*/, this.accountThree.sendTransaction({
                                to: this.donator.address,
                                value: hardhat_1.ethers.utils.parseEther("12"),
                            })];
                    case 4:
                        _e.sent();
                        _b = chai_1.expect;
                        return [4 /*yield*/, this.donator.getUsers()];
                    case 5:
                        _c = (_a = _b.apply(void 0, [_e.sent()]).to.deep).equal;
                        return [4 /*yield*/, this.accountOne.getAddress()];
                    case 6:
                        _d = [
                            _e.sent()
                        ];
                        return [4 /*yield*/, this.accountTwo.getAddress()];
                    case 7:
                        _d = _d.concat([
                            _e.sent()
                        ]);
                        return [4 /*yield*/, this.accountThree.getAddress()];
                    case 8:
                        _c.apply(_a, [_d.concat([
                                _e.sent()
                            ])]);
                        return [2 /*return*/];
                }
            });
        });
    });
});