(function(o,s,c,e,t,r,d){"use strict";const a=e.findByProps("openLazy","hideActionSheet");e.findByProps("push","pushLazy","pop"),e.findByProps("getRenderCloseButton");const p=e.findByName("Icon"),{FormRow:u}=r.Forms,l=s.before("openLazy",a,function(h){const[y,g,m]=h;g==="MessageLongPressActionSheet"&&y.then(function(B){const b=s.after("default",B,function(_,v){t.React.useEffect(function(){return function(){b()}},[]);let[A,i]=v.props?.children?.props?.children?.props?.children;const n=A?.props?.message??m?.message;!i||!n||(console.log(n),i.push(t.React.createElement(u,{label:"Copy User Id",leading:t.React.createElement(p,{source:c.getAssetIDByName("ic_chat_bubble_16px")}),onPress:function(){a.hideActionSheet(),vendetta.metro.common.clipboard.setString(n?.author?.id??""),d.showToast("Copied User ID to clipboard",c.getAssetIDByName("toast_copy_link"))}})))})})}),f=function(){return l()};return o.onUnload=f,o})({},vendetta.patcher,vendetta.ui.assets,vendetta.metro,vendetta.metro.common,vendetta.ui.components,vendetta.ui.toasts);
