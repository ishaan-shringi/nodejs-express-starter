"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var channel_1 = __importDefault(require("./channel"));
var router = express_1.Router();
router.use('/channel', channel_1.default);
exports.default = router;
