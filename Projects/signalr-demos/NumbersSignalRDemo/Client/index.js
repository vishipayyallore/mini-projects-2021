"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./css/main.css");
var signalR = require("@microsoft/signalr");
var customLogger_1 = require("./customLogger");
var divMessages = document.querySelector("#divMessages");
var tbMessage = document.querySelector("#tbMessage");
var btnSend = document.querySelector("#btnSend");
var username = new Date().getTime();
var btnSubscribe = document.querySelector("#btnSubscribe");
var txtGroup = document.querySelector("#txtGroup");
var connection = new signalR
    .HubConnectionBuilder()
    // .configureLogging(signalR.LogLevel.Information)
    .configureLogging(new customLogger_1.CustomLogger())
    .withUrl("/hub/numbers?groupName=evenGroup")
    .build();
connection.on("numberReceived", function (username, message) {
    var messages = document.createElement("div");
    messages.innerHTML =
        "<div class=\"message-author\">" + username + " from " + connection.connectionId + "</div><div>" + message + "</div>";
    divMessages.appendChild(messages);
    divMessages.scrollTop = divMessages.scrollHeight;
});
connection
    .start()
    .catch(function (err) { return document.write(err); });
tbMessage.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        send();
    }
});
btnSend.addEventListener("click", send);
function send() {
    connection
        .send("newNumberReceived", username, +tbMessage.value)
        .then(function () { return tbMessage.value = ""; });
}
btnSubscribe.addEventListener("click", subscribeToGroup);
function subscribeToGroup() {
    connection
        .send("subscribeToGroup", txtGroup.value);
}
