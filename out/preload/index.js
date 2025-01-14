"use strict";const e=require("electron"),t="liteLoader-taptaptap",o={configUpdate(n){e.ipcRenderer.send(`${t}:update`,n)}};e.contextBridge.exposeInMainWorld(t,o);
