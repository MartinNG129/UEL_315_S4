"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    firstname: String,
    lastname: String,
    email: String,
});
//# sourceMappingURL=user.schema.js.map