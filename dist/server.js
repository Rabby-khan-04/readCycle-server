"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const config_1 = __importDefault(require("./app/config"));
_1.default.listen(config_1.default.port, () => {
    console.log(`ReadCycle app is running on port ${config_1.default.port}`);
});
