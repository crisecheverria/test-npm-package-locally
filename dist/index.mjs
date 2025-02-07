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
export {
  CrisNotification
};
