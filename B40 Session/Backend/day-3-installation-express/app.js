// Common JS - require() (import & export).
// modules JS - import & export

// const express = require("express");
// const app = require("app.js");

// const sayHello = require("./test"); // multiple exports

// sayHello.sayHello();
// sayHello.goodMorning();

// Module JS
import SayHello, {
  goodEvening as greetings,
  goodMorning as welcome,
} from "./test.js";

SayHello();

greetings();
welcome();