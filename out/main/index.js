"use strict";const P=require("node:events"),j=require("node:process"),b=require("node:util");class k{constructor(t,n,o={}){this.Wrapper=t,this.Session=n,this.config=o,this.wrapperEmitter=new P.EventEmitter,this.#e=new Map}#e;logFn({argArray:t,applyRet:n,key:o}){if(!this.config.log||typeof this.config.log!="boolean"&&!this.config.log.test(o))return;const i=this.config.logDepth,a={inspect(e){return b.inspect(e,{depth:i,colors:!0})},json(e){return JSON.stringify(e,null,2)}}[this.config.logType??"inspect"];if(console.log("-----------------------------------------------"),console.log(`${o} 被调用`),t.length&&console.log("参数: ",a(t)),n instanceof Promise)console.log("返回值为 Promise，请观察后续打印内容"),n.then(e=>{console.log(`${o} 返回值: `),console.log(a(e))},e=>{console.log(`${o} 返回值: `),console.log(a(e))});else if(console.log("返回值: ",a(n)),typeof n=="object"&&n){const e=Object.getOwnPropertyNames(n);e.length&&console.log("返回值 keys: ",a(e)),console.log("原型 keys: ",a(Object.getOwnPropertyNames(Object.getPrototypeOf(n))))}}hookInstance({instance:t,rootKey:n}){return new Proxy(t,{get:(o,i,r)=>{const a=Reflect.get(t,i,r);if(typeof a!="function")return a;const e=`${n}/${i}`;return(...s)=>{if(this.config.eventBlacklist?.some(c=>typeof c=="string"?e===c:c.test(e)))return;if(e.endsWith("Listener"))if(i.startsWith("add")){const c=this.#e.get(e);s[0]=this.hookInstance({instance:s[0],rootKey:e}),c?c.add(s[0]):this.#e.set(e,new Set([s[0]]))}else{const c=this.#e.get(e.replace("/remove","/add"));c&&c.delete(s[0])}s=this.config.eventInterceptors?.[e]?.(s)??s;let g=t[i](...s);if(g=this.config.eventInterceptors?.[`${e}:response`]?.({applyRet:g,params:s})??g,e.endsWith("Service")&&(g=this.hookInstance({instance:g,rootKey:e})),g instanceof Promise)g.then(c=>{const d={applyRet:c,params:s};this.wrapperEmitter.emit(e,d)},c=>{const d={applyRet:c,params:s};this.wrapperEmitter.emit(e,d)});else{const c={applyRet:g,params:s};this.wrapperEmitter.emit(e,c)}return this.logFn({argArray:s,applyRet:g,key:e}),g}}})}dispatchListener(t,n){const o=t.lastIndexOf("/"),i=t.slice(0,o),r=t.slice(o+1),a=this.#e.get(i);if(!a)throw new Error("监听器尚未绑定，请确认参数是否正确");return[...a].map(e=>{if(!e[r])throw new Error("未找到目标监听器");return e[r](...n)})}}const f=new k,x=(l={})=>{const{promise:t,resolve:n}=Promise.withResolvers();return f.config=l,j.dlopen=new Proxy(j.dlopen,{apply(o,i,r){const[,a]=r,e=Reflect.apply(o,i,r);if(a.includes("wrapper.node")){const s=r[0].exports,h=new Proxy(s,{get(g,c,d){const m=Reflect.get(s,c,d);return typeof m!="function"?m:new Proxy(function(){},{get(Q,u,w){const p=Reflect.get(m,u,w);return typeof p!="function"?p:new Proxy(p,{apply(O,R,L){const S=`${c}/${u}`,y=Reflect.apply(O,R,L);if(f?.logFn({argArray:L,applyRet:y,key:S}),typeof y!="object")return y;const M=f.hookInstance({instance:y,rootKey:S});return S==="NodeIQQNTWrapperSession/create"&&(f.Session=M),M}})},construct(Q,u,w){const p=Reflect.construct(m,u,w);return f?.logFn({key:c,applyRet:p,argArray:u}),f.hookInstance({instance:p,rootKey:c})}})}});f.Wrapper=r[0].exports=h}return e}}),f.wrapperEmitter.once("NodeIQQNTWrapperSession/create/getMsgService",()=>{n(f)}),t};var N=(l=>(l.sendLog="NodeIQQNTWrapperSession/create/getNodeMiscService/sendLog",l.onQRCodeLoginSucceed="NodeIKernelLoginService/get/addKernelLoginListener/onQRCodeLoginSucceed",l.onRecvMsg="NodeIQQNTWrapperSession/create/getMsgService/addKernelMsgListener/onRecvMsg",l.sendMsg="NodeIQQNTWrapperSession/create/getMsgService/sendMsg",l.fetchUnitedCommendConfig="NodeIQQNTWrapperSession/create/getUnitedConfigService/fetchUnitedCommendConfig",l))(N||{});const C={counter:0},W="https://raw.githubusercontent.com/adproqwq/LiteLoaderQQNT-Manifest-JsonSchema/main/manifest.schema.json",$=4,T="extension",U="敲死那个粉色头像",E="liteLoader-taptaptap",_="敲一敲，身体好",K="0.0.1",q=[{name:"Nyaruhodo",link:"https://github.com/nyaruhodoo"}],D=[],F=["win32","linux","darwin"],J={renderer:"./out/renderer/index.js",main:"./out/main/index.js",preload:"./out/preload/index.js"},v={$schema:W,manifest_version:$,type:T,name:U,slug:E,description:_,version:K,authors:q,dependencies:D,platform:F,injects:J};class I{static async getConfig(){const t=await LiteLoader.api.config.get(v.slug,C);return this.mergeConfig(t,C)}static async updateConfig(t){await LiteLoader.api.config.set(v.slug,t),this.log("Config已更新",JSON.stringify(t,null,2))}static mergeConfig(t,n){const o=structuredClone(n);for(const[i,r]of Object.entries(t))if(Object.hasOwn(o,i)&&Object.prototype.toString.call(r)===Object.prototype.toString.call(o[i])){if(Array.isArray(r)){o[i]=[...new Set([...r,...o[i]])];continue}if(typeof r=="object"&&r){o[i]=this.mergeConfig(r,o[i]);continue}o[i]=r}return o}static log(...t){console.log(`${v.slug}:`,...t)}static randomInteger(t,n){const o=t+Math.random()*(n+1-t);return Math.floor(o)}static wait(t){if(!(t<=0))return new Promise(n=>setTimeout(n,t))}}(async()=>{const l=await x({log:!1,logDepth:null,eventBlacklist:[N.sendLog,/tianshu/i],eventInterceptors:{[N.onRecvMsg]([t]){for(const n of t){const o=atob("MzEyNzEyNDU1OQ==");if(n.senderUin!==o||n.elements.length>1||Math.random()>.02)return;const{chatType:i,peerUid:r,msgSeq:a}=n,e=["38","120","128074"];let s=Math.floor(Math.random()*e.length);for(;s>=0;)l.Session?.getMsgService().setMsgEmojiLikes({chatType:i,peerUid:r,guildId:""},a,e[s],"1",!0),s--;I.getConfig().then(({counter:h})=>{I.updateConfig({counter:h+1})})}}}})})();
