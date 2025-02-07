var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  CrisNotification: () => CrisNotification
});
module.exports = __toCommonJS(index_exports);

// src/Notification.ts
var CrisNotification = class {
  constructor(type) {
    this.type = type;
  }
  send(message) {
    console.log(
      `%c[${this.type.toUpperCase()}]:%c ${message}`,
      "color: white; background-color: red; padding:5px;",
      "color: white; background-color: blue; padding:5px;"
    );
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CrisNotification
});
