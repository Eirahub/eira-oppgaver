// Pure helpers for the "Prøv selv" editor (html-live.js). No DOM here, so node --test can run them.

// Name of the loop guard that html-live-guard.js calls at the start of every loop body.
export const LOOP_GUARD = '__htmlLiveLoop';
export const LOOP_STOPPED = 'Løkka stoppet etter for lang tid. Har den en slutt?';

// Runs first inside the sandboxed result frame: forwards console output and errors to the page,
// and defines the loop guard. It stops loops when one task (one run of code without a break for the
// browser) has spent over a second in loops. A loop that waits (await, setTimeout) gets a new second
// each time, because the setTimeout below resets the clock as soon as the browser gets a break.
// One line on purpose, so line numbers in error messages match the reader's code.
export const CONSOLE_BRIDGE = '<script>(function(){'
  + 'function fmt(a){if(typeof a==="string")return a;if(a instanceof Error)return a.name+": "+a.message;'
  + 'try{var s=JSON.stringify(a);return s===undefined?String(a):s}catch(e){return String(a)}}'
  + 'function send(type,args){try{parent.postMessage({htmlLive:1,type:type,text:Array.prototype.map.call(args,fmt).join(" ")},"*")}catch(e){}}'
  + '["log","info","warn","error"].forEach(function(m){var o=console[m];console[m]=function(){send(m,arguments);o.apply(console,arguments)}});'
  + `var STOP=new Error(${JSON.stringify(LOOP_STOPPED)}),t0=0,told=0;`
  + `globalThis.${LOOP_GUARD}=function(line){var n=Date.now();`
  + 'if(!t0){t0=n;told=0;setTimeout(function(){t0=0},0)}'
  + 'else if(n-t0>1000){if(!told){told=1;send("error",[STOP.message+" (linje "+line+")"])}throw STOP}};'
  + 'addEventListener("error",function(e){if(e.error!==STOP)send("error",[e.message+(e.lineno?" (linje "+e.lineno+")":"")])});'
  + 'addEventListener("unhandledrejection",function(e){if(e.reason!==STOP)send("error",["Uhåndtert feil: "+fmt(e.reason)])});'
  + '})()</script>';

// The reader's document with the bridge put in early: after <head>, else after the doctype
// (never before it, which would switch the page to quirks mode), else first.
export function withConsole(code) {
  const at = /<head(\s[^>]*)?>/i.exec(code) || /^\s*<!doctype[^>]*>/i.exec(code);
  const i = at ? at.index + at[0].length : 0;
  return code.slice(0, i) + CONSOLE_BRIDGE + code.slice(i);
}

// True when the code can run JavaScript: a <script> tag or an inline handler such as onclick=.
// Such code is not run while typing, so a half-typed loop cannot hang the tab.
export const hasScript = (code) => /<script\b/i.test(code) || /<[^>]*\son[a-z]+\s*=/i.test(code);
