"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _cors = _interopRequireDefault(require("cors"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var server = (0, _express["default"])();

_mongoose["default"].connect("mongodb://localhost/".concat(process.env.MOBGO_DB), {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

server.use(_express["default"].json());
server.use((0, _cors["default"])());
server.use(_routes["default"]);
server.listen(process.env.PORT);