(function(o,s,c,e,t,r){"use strict";const i=e.findByProps("openLazy","hideActionSheet");e.findByProps("push","pushLazy","pop"),e.findByProps("getRenderCloseButton");const d=e.findByName("Icon"),{FormRow:p}=r.Forms,u=s.before("openLazy",i,function(f){const[h,y,g]=f;y==="MessageLongPressActionSheet"&&h.then(function(B){const b=s.after("default",B,function(m,I){t.React.useEffect(function(){return function(){b()}},[]);let[_,a]=I.props?.children?.props?.children?.props?.children;const n=_?.props?.message??g?.message;!a||!n||(console.log(n),a.push(t.React.createElement(p,{label:"Copy User Id",leading:t.React.createElement(d,{source:c.getAssetIDByName("ic_chat_bubble_16px")}),onPress:function(){i.hideActionSheet(),t.clipboard.setString(n.id),showToast("Copied User ID to clipboard",c.getAssetIDByName("toast_copy_link"))}})))})})}),l=function(){return u()};return o.onUnload=l,o})({},vendetta.patcher,vendetta.ui.assets,vendetta.metro,vendetta.metro.common,vendetta.ui.components);