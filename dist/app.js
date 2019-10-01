"use strict";require("core-js/stable"),require("regenerator-runtime/runtime");var _dotenv=_interopRequireDefault(require("dotenv")),_express=_interopRequireDefault(require("express")),_mongoose=_interopRequireDefault(require("mongoose")),_cors=_interopRequireDefault(require("cors")),_routes=_interopRequireDefault(require("./routes"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}_dotenv["default"].config();var server=(0,_express["default"])();_mongoose["default"].connect("mongodb://localhost/".concat(process.env.MOBGO_DB),{useNewUrlParser:!0,useUnifiedTopology:!0}),server.use(_express["default"].json()),server.use((0,_cors["default"])()),server.use(_routes["default"]),server.listen(process.env.PORT,function(){console.log("API running on port: ".concat(process.env.PORT))});