// Pure helpers for the "Prøv selv" editor (html-live.js). No DOM here, so node --test can run them.

// Runs first inside the sandboxed result frame: forwards console output and errors to the page.
// One line on purpose, so line numbers in error messages match the reader's code.
export const CONSOLE_BRIDGE = '<script>(function(){'
  + 'function fmt(a){if(typeof a==="string")return a;if(a instanceof Error)return a.name+": "+a.message;'
  + 'try{var s=JSON.stringify(a);return s===undefined?String(a):s}catch(e){return String(a)}}'
  + 'function send(type,args){try{parent.postMessage({htmlLive:1,type:type,text:Array.prototype.map.call(args,fmt).join(" ")},"*")}catch(e){}}'
  + '["log","info","warn","error"].forEach(function(m){var o=console[m];console[m]=function(){send(m,arguments);o.apply(console,arguments)}});'
  + 'addEventListener("error",function(e){send("error",[e.message+(e.lineno?" (linje "+e.lineno+")":"")])});'
  + 'addEventListener("unhandledrejection",function(e){send("error",["Uhåndtert feil: "+fmt(e.reason)])});'
  + '})()</script>';

// The reader's document with the bridge put in early: after <head>, else after the doctype
// (never before it, which would switch the page to quirks mode), else first.
export function withConsole(code) {
  const at = /<head(\s[^>]*)?>/i.exec(code) || /^\s*<!doctype[^>]*>/i.exec(code);
  const i = at ? at.index + at[0].length : 0;
  return code.slice(0, i) + CONSOLE_BRIDGE + code.slice(i);
}
