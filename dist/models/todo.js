"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _mongoose=require("mongoose"),taskSchema=new _mongoose.Schema({name:String,complete:Boolean}),todoSchema=new _mongoose.Schema({name:String,tasks:[taskSchema]}),todoModel=(0,_mongoose.model)("Todo",todoSchema),_default=todoModel;exports["default"]=_default;