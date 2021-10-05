import "./css/main.css";

import * as signalR from "@microsoft/signalr";
import { CustomLogger } from "./customLogger";

const divMessages: HTMLDivElement = document.querySelector("#divMessages");
const tbMessage: HTMLInputElement = document.querySelector("#tbMessage");
const btnSend: HTMLButtonElement = document.querySelector("#btnSend");
const username = new Date().getTime();

const btnSubscribe: HTMLButtonElement = document.querySelector("#btnSubscribe");
const txtGroup: HTMLInputElement = document.querySelector("#txtGroup");

const connection = new signalR
    .HubConnectionBuilder()
    // .configureLogging(signalR.LogLevel.Information)
    .configureLogging(new CustomLogger())
    .withUrl("/hub/numbers?groupName=evenGroup")
    .build();

connection.on("numberReceived", (username: string, message: string) => {
    let messages = document.createElement("div");

    messages.innerHTML =
        `<div class="message-author">${username} from ${connection.connectionId}</div><div>${message}</div>`;

    divMessages.appendChild(messages);
    divMessages.scrollTop = divMessages.scrollHeight;
});

connection
    .start()
    .catch(err => document.write(err));

tbMessage.addEventListener("keyup", (e: KeyboardEvent) => {
    if (e.key === "Enter") {
        send();
    }
});

btnSend.addEventListener("click", send);

function send() {
    connection
        .send("newNumberReceived", username, +tbMessage.value)
        .then(() => tbMessage.value = "");
}

btnSubscribe.addEventListener("click", subscribeToGroup);

function subscribeToGroup() {
    connection
        .send("subscribeToGroup", txtGroup.value);
}
