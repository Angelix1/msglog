(function(e,T){"use strict";var i;(function(n){n[n.SUB_COMMAND=1]="SUB_COMMAND",n[n.SUB_COMMAND_GROUP=2]="SUB_COMMAND_GROUP",n[n.STRING=3]="STRING",n[n.INTEGER=4]="INTEGER",n[n.BOOLEAN=5]="BOOLEAN",n[n.USER=6]="USER",n[n.CHANNEL=7]="CHANNEL",n[n.ROLE=8]="ROLE",n[n.MENTIONABLE=9]="MENTIONABLE",n[n.NUMBER=10]="NUMBER",n[n.ATTACHMENT=11]="ATTACHMENT"})(i||(i={}));var t;(function(n){n[n.BUILT_IN=0]="BUILT_IN",n[n.BUILT_IN_TEXT=1]="BUILT_IN_TEXT",n[n.BUILT_IN_INTEGRATION=2]="BUILT_IN_INTEGRATION",n[n.BOT=3]="BOT",n[n.PLACEHOLDER=4]="PLACEHOLDER"})(t||(t={}));var N;(function(n){n[n.CHAT=1]="CHAT",n[n.USER=2]="USER",n[n.MESSAGE=3]="MESSAGE"})(N||(N={}));let o=[];const a=function(n,s){return n.split(s?/(?=[A-Z])/:"_").map(function(r){return r[0].toUpperCase()+r.slice(1)}).join(" ")},E=function(){o=T.registerCommand({name:"e621",displayName:"e621",description:"generates a e621.",displayDescription:"generates a e621",options:[{name:"random",displayName:"random",description:"generates random snippets",displayDescription:"generates random snippets",required:!0,type:i.BOOLEAN},{name:"query",displayName:"query",description:"query",displayDescription:"query",inputType:t.BUILT_IN_TEXT,type:i.STRING},{name:"rating",displayName:"rating",description:"rating",displayDescription:"rating",type:i.STRING,choices:[{name:a("Explicit"),displayName:a("explicit"),value:"e"},{name:a("Questionable"),displayName:a("questionable"),value:"q"},{name:a("Safe"),displayName:a("safe"),value:"s"}]}],type:N.CHAT,applicationId:"-1",inputType:t.BUILT_IN_TEXT,async execute(n,s){return n[0].value,n[1].value,n[2].value,console.log("[ ANGEL ]"),console.log(n),{content:"await e621(true, )"}}})},p=function(){o?.()};return e.onLoad=E,e.onUnload=p,e})({},vendetta.commands);