"use strict";(self.webpackChunksevenpay=self.webpackChunksevenpay||[]).push([[514,912],{2912:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var i=n(4554),r=n(890),o=n(4925),s=n(1889),l=n(7391),a=n(6151),f=(n(2791),n(7689)),c=n(184),d=function(){var e=(0,f.s0)();return(0,c.jsxs)(i.Z,{ml:40,mr:40,mt:2,children:[(0,c.jsx)(r.Z,{align:"left",sx:{fontWeight:"700",color:"#000000",fontSize:"2.8rem",mb:"20px",fontFamily:"Inter"},children:"Applying to Software Engineer - Backend"}),(0,c.jsxs)("form",{children:[(0,c.jsx)(o.Z,{htmlFor:"my-textfield",sx:{textAlign:"start",fontWeight:"bold",background:"transparent"},children:"Upload Resume*"}),(0,c.jsxs)(s.ZP,{item:!0,sm:12,mb:3,children:[(0,c.jsx)("input",{type:"file",id:"file-input",name:"file-input"}),(0,c.jsx)(o.Z,{id:"file-input-label",htmlFor:"file-input",children:"Choose File"})]}),(0,c.jsxs)(s.ZP,{container:!0,spacing:1,children:[(0,c.jsxs)(s.ZP,{item:!0,xs:12,md:6,children:[(0,c.jsx)(o.Z,{htmlFor:"my-textfield",sx:{textAlign:"start",fontWeight:"bold"},children:"First Name*"}),(0,c.jsx)(l.Z,{fullWidth:!0,sx:{mb:"20px"},id:"standard-size-normal"})]}),(0,c.jsxs)(s.ZP,{item:!0,xs:12,md:6,children:[(0,c.jsx)(o.Z,{htmlFor:"my-textfield",sx:{textAlign:"start",fontWeight:"bold"},children:"Last Name*"}),(0,c.jsx)(l.Z,{fullWidth:!0,sx:{mb:"20px"},id:"standard-size-normal"})]})]}),(0,c.jsx)(o.Z,{htmlFor:"my-textfield",sx:{textAlign:"start",fontWeight:"bold"},children:"Email Address*"}),(0,c.jsx)(l.Z,{fullWidth:!0,sx:{mb:"20px"}}),(0,c.jsx)(o.Z,{htmlFor:"my-textfield",sx:{textAlign:"start",fontWeight:"bold"},children:"Mobile Number*"}),(0,c.jsx)(l.Z,{fullWidth:!0,sx:{mb:"20px"}}),(0,c.jsx)(o.Z,{htmlFor:"my-textfield",sx:{textAlign:"start",fontWeight:"bold"},children:"Current Location*"}),(0,c.jsx)(l.Z,{fullWidth:!0,sx:{mb:"20px"}}),(0,c.jsx)(o.Z,{htmlFor:"my-textfield",sx:{textAlign:"start",fontWeight:"bold"},children:"Notice Period*"}),(0,c.jsx)(l.Z,{fullWidth:!0,sx:{mb:"20px"}}),(0,c.jsxs)(i.Z,{borderRadius:1,gap:1,sx:{display:"flex",alignItems:"start"},children:[(0,c.jsx)(a.Z,{variant:"contained",sx:{backgroundColor:"#FF6600",mt:"1",width:"10rem",mb:"25px",fontSize:"1.2rem","&:hover":{backgroundColor:"#FF6600"}},children:"Submit"}),(0,c.jsx)(a.Z,{variant:"contained",sx:{color:"#FF6600",backgroundColor:"#EFEFEF",width:"10rem",fontSize:"1.2rem","&:hover":{backgroundColor:"#EFEFEF"}},onClick:function(){return e(-1)},children:"Back"})]})]})]})}},6514:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var i=n(4942),r=n(9439),o=n(1413),s=n(2791),l=n(4554),a=n(890),f=n(1889),c=n(6151),d=n(7689),x=n(5289),A=n(4395),g=n(4663),h=n(7462),m=n(3366),u=n(6752),p=n(3199),j=n(2071),y=n(3967),Z=n(4999),C=n(7602),v=n(184),S=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function E(e,t,n){var i,r=function(e,t,n){var i,r=t.getBoundingClientRect(),o=n&&n.getBoundingClientRect(),s=(0,C.Z)(t);if(t.fakeTransform)i=t.fakeTransform;else{var l=s.getComputedStyle(t);i=l.getPropertyValue("-webkit-transform")||l.getPropertyValue("transform")}var a=0,f=0;if(i&&"none"!==i&&"string"===typeof i){var c=i.split("(")[1].split(")")[0].split(",");a=parseInt(c[4],10),f=parseInt(c[5],10)}return"left"===e?"translateX(".concat(o?o.right+a-r.left:s.innerWidth+a-r.left,"px)"):"right"===e?"translateX(-".concat(o?r.right-o.left-a:r.left+r.width-a,"px)"):"up"===e?"translateY(".concat(o?o.bottom+f-r.top:s.innerHeight+f-r.top,"px)"):"translateY(-".concat(o?r.top-o.top+r.height-f:r.top+r.height-f,"px)")}(e,t,"function"===typeof(i=n)?i():i);r&&(t.style.webkitTransform=r,t.style.transform=r)}var b=s.forwardRef((function(e,t){var n=(0,y.Z)(),i={enter:n.transitions.easing.easeOut,exit:n.transitions.easing.sharp},r={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},o=e.addEndListener,l=e.appear,a=void 0===l||l,f=e.children,c=e.container,d=e.direction,x=void 0===d?"down":d,A=e.easing,g=void 0===A?i:A,b=e.in,w=e.onEnter,W=e.onEntered,F=e.onEntering,k=e.onExit,z=e.onExited,B=e.onExiting,R=e.style,P=e.timeout,I=void 0===P?r:P,Q=e.TransitionComponent,U=void 0===Q?u.ZP:Q,N=(0,m.Z)(e,S),M=s.useRef(null),D=(0,j.Z)(f.ref,M,t),T=function(e){return function(t){e&&(void 0===t?e(M.current):e(M.current,t))}},X=T((function(e,t){E(x,e,c),(0,Z.n)(e),w&&w(e,t)})),L=T((function(e,t){var i=(0,Z.C)({timeout:I,style:R,easing:g},{mode:"enter"});e.style.webkitTransition=n.transitions.create("-webkit-transform",(0,h.Z)({},i)),e.style.transition=n.transitions.create("transform",(0,h.Z)({},i)),e.style.webkitTransform="none",e.style.transform="none",F&&F(e,t)})),G=T(W),J=T(B),H=T((function(e){var t=(0,Z.C)({timeout:I,style:R,easing:g},{mode:"exit"});e.style.webkitTransition=n.transitions.create("-webkit-transform",t),e.style.transition=n.transitions.create("transform",t),E(x,e,c),k&&k(e)})),Y=T((function(e){e.style.webkitTransition="",e.style.transition="",z&&z(e)})),V=s.useCallback((function(){M.current&&E(x,M.current,c)}),[x,c]);return s.useEffect((function(){if(!b&&"down"!==x&&"right"!==x){var e=(0,p.Z)((function(){M.current&&E(x,M.current,c)})),t=(0,C.Z)(M.current);return t.addEventListener("resize",e),function(){e.clear(),t.removeEventListener("resize",e)}}}),[x,b,c]),s.useEffect((function(){b||V()}),[b,V]),(0,v.jsx)(U,(0,h.Z)({nodeRef:M,onEnter:X,onEntered:G,onEntering:L,onExit:H,onExited:Y,onExiting:J,addEndListener:function(e){o&&o(M.current,e)},appear:a,in:b,timeout:I},N,{children:function(e,t){return s.cloneElement(f,(0,h.Z)({ref:D,style:(0,h.Z)({visibility:"exited"!==e||b?void 0:"hidden"},R,f.props.style)},t))}}))})),w=n(7840),W=n(2912),F=s.forwardRef((function(e,t){return(0,v.jsx)(b,(0,o.Z)({direction:"up",ref:t},e))})),k=function(){var e,t=(0,s.useState)(!1),n=(0,r.Z)(t,2),o=n[0],h=n[1],m=(0,d.s0)();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l.Z,{sx:{width:"100%",display:"flex",justifyContent:"center",marginTop:"14vh"},children:(0,v.jsx)(l.Z,{sx:{width:"70vw"},children:(0,v.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"lest",mt:3},children:[(0,v.jsx)(a.Z,{variant:"h5",sx:(e={fontSize:"2rem",fontWeight:"600",color:"#000000",display:"flex",justifyContent:"left",textAlign:"left"},(0,i.Z)(e,"fontSize","2.4rem"),(0,i.Z)(e,"fontWeight","700"),e),children:"Software Engineer - Backend"}),(0,v.jsxs)(l.Z,{sx:{width:"100%",display:"flex",justifyContent:"space-between"},children:[(0,v.jsx)(a.Z,{sx:{fontSize:"1.4rem",fontWeight:"500",color:"#000000"},children:"Bhubaneswar, Odisha"}),(0,v.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"space-around",width:"15vw"},children:[(0,v.jsx)(a.Z,{sx:{fontSize:"1.3rem",fontWeight:"400",color:"#000000"},children:"Share this Job"}),(0,v.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGiSURBVHgBpVRNTvMwEH0zNtK37A2+oMKalp99cgJ6g8IJ2PMjhd9rUE4AnICyQyqIsAaEOQHdgzOMQ4NKCKjAW8T2G/n5xTNjQg1mFjdiIe4KEBMQBU4gGYEy5HJ6f7V3Ut1D44uolUZmyh/qNMb3cP7ZJC5L3Seh2Vbayq0/U6aByTBk+OR2cJC9CxVOrL/+UkSkL4QbHYdE/F+ZlVJMnbWDMxtWPKVOUC9ChO27wV46zjWXtkqhxugqEmoubHbAdIx6uPvB7nS5UOcN/NPN3j98OEzyhMHo4Gv0x13o6U9VkYCQYSbwHCZADom/Cces9dHC3xGRWpYqG/757nK/X7djdknLBJrhCtQRHH6APH+Jqlyoequfcy39D8GcqNOcX488k3MjZ0Xb5BJpPSxXhULrWCPSE6JuJbAGY2CAHkaZ80QrbLhb59ILnXBxF1q5+D3U9c4pF4rWruowxE8h2iLGJGFaCLmL1DEKYnIxFWHSF+Di7QXgkr8dpJmqtyfKol6Ft6Yd9pSUHY+P1Kff+g8dTcJjGdMEPOnQ0xo7qquxVwQxsADZs3kbAAAAAElFTkSuQmCC",alt:"manoj"}),(0,v.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGbSURBVHgBvZQxS8NAFMffu7uI4FLpJhSDpbMZrJNiP4LZdGq/gc5C5So6t/0Etd/Abm7WTsUKZtfCLQoutoJbmjsvoS1J2wQr4h8Cl5fj9/7/x10A/ki4zOZc/sySkpiexxzhcDEHyu6eF/sPF804gGlxkxpeQy8LofI1SNVSlGxLNWrRXJ5bCuTteubgc/Da6S4CpTN7Nd3zcKZsAeKRdiKIxHcytSahupUvV/3us2701yLEq+AZzCGuC0K/DMc5T3WEu2y+3PDn4dcYc80ECHjg2aLLReAIFVTCJvRTkkCfsjvlgUSsJoGArgQmiGGAqRBOFm5CSCGglcTx3QSg5x53FPxOCpQzWQfRKFBbwwQsKURSi4B8V0RBXQE6y4A8Qu4joGkHUBb8UIhQmczHF50sPt463fTGvj4BergIq0kQfzb93uVxuBZx9PJ4xRGkDeNzFQeRlNlzDoN7REeWImRTR/OvQQHivdS9NcZFm881YkF3gilQsqSDWwssDHXUG1SyqR2341pEfiNmgafYlzuFjZghwgP9F30Dt7aP9BgOWqIAAAAASUVORK5CYII=",alt:"manoj"}),(0,v.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAExSURBVHgBzZTPSgJRFMa/pIWbFG0RRDObfIUWjtC2N+jPA9Q2KtvWrk0GtXR6AK+tWhZBVKBRLkUQ1NWIS2Vmoe7Gc6/MVRH/XMeFPxg493LOx8c3h4u0+e36xTS/3DVeYAkEhg/p5x+wlwIWYd0ruMDN7auoHbuDs9N9qCAd8WGPcDgIZYZDY+zPvU+9uYsgw3acDoqlhhDXdyLQtChyv7W+w40gdD2KTLYg+gwjhkR8d8SQFGLUdH6REZdPjyc4PtzD1valOBs0ZNVbsKymHExeHeCavrGMppEnZ7bdRig0yC718C7cKQlpWgSfH0lUync4IqceuXxVVWhTZMYx4jF5bztdRSEKfxZzCc3D6gnJPeI74v2FBC0cD5dl/8VZp5ov4aS+ESG/BEx6OvzCNXp37/Um8sGClAAAAABJRU5ErkJggg==",alt:"manoj"}),(0,v.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD1SURBVHgB3ZK9jcJAEIXf+O44XeaE03ERlEAHUAGUYDrANGJ3AHRAB9ABJbAZFiRkCAN+zIKRDML8SASIF6xsz7zPb2cXeFuJXdy/drkgMtTHMh6Ticn6IgqNY98KgJdCzL0EkiPrSb1wssXZNKgkoE/BIhegNdGeeRTWs99PQMX/TndDDD4SVkH0L6WwtZX2FEv+MBckpKezGutfm7Mo8NTYwmG7JtFZ2BRbkcaXI2Mdbi0XlMolJPgt+ZM1MIq/WY2XmtAm1hQKCIVwz02fyJc9yQlXEuLHHi/bV3qvgva6BTjKwZP0oiBdenjgVmdkUu87awdYElisQfeoTAAAAABJRU5ErkJggg==",alt:"manoj"})]})]}),(0,v.jsx)(a.Z,{variant:"h5",sx:{mt:3,fontSize:"1.4rem",fontWeight:"700",color:"#000000",textAlign:"left"},children:"JOB DESCRIPTION"}),(0,v.jsxs)(l.Z,{children:[(0,v.jsx)(a.Z,{variant:"p",sx:{mt:2,fontSize:"1.4rem",fontWeight:"400",color:"#000000",display:"flex",justifyContent:"left",textAlign:"left"},children:"Responsibilities:"}),(0,v.jsx)(a.Z,{variant:"p",sx:{mt:1,fontSize:"1.4rem",fontWeight:"400",color:"#000000",display:"flex",justifyContent:"left",textAlign:"left"},children:"- Assume responsibility for Platform Architecture, Technical Design, and Engineering Practices for a tribe of 30-100+ people."}),(0,v.jsx)(a.Z,{variant:"p",sx:{mt:1,fontSize:"1.4rem",fontWeight:"400",color:"#000000",display:"flex",justifyContent:"left",textAlign:"left"},children:"- Mentor and guide senior engineers in making high-quality and practical engineering decisions."}),(0,v.jsx)(a.Z,{variant:"p",sx:{mt:1,fontSize:"1.4rem",fontWeight:"400",color:"#000000",display:"flex",justifyContent:"left",textAlign:"left"},children:"- Collaborate with stakeholders from Product Management, Strategic Planning, and executive management to define key strategies and requirements while ensuring timely delivery."}),(0,v.jsx)(a.Z,{variant:"p",sx:{mt:1,fontSize:"1.4rem",fontWeight:"400",color:"#000000",display:"flex",justifyContent:"left",textAlign:"left"},children:"- Establish software engineering processes and best practices to ensure the delivery of high-quality products."}),(0,v.jsx)(a.Z,{variant:"p",sx:{mt:1,fontSize:"1.4rem",fontWeight:"400",color:"#000000",display:"flex",justifyContent:"left",textAlign:"left"},children:"- Coordinate efforts with other Architects, Iteration Managers, Delivery Managers, Delivery Manager, and Program Managers to leverage best practices and ensure smooth operations."})]}),(0,v.jsxs)(l.Z,{children:[(0,v.jsx)(a.Z,{variant:"p",sx:{mt:1,fontSize:"1.4rem",fontWeight:"400",color:"#000000",display:"flex",justifyContent:"left",textAlign:"left"},children:"Relevant Experience:"}),(0,v.jsx)(a.Z,{variant:"p",sx:{mt:1,fontSize:"1.4rem",fontWeight:"400",color:"#000000",display:"flex",justifyContent:"left",textAlign:"left"},children:"- Possess 15+ years of experience with .Net/.Net Core or similar enterprise-level technologies."}),(0,v.jsx)(a.Z,{variant:"p",sx:{mt:1,fontSize:"1.4rem",fontWeight:"400",color:"#000000",display:"flex",justifyContent:"left",textAlign:"left"},children:"- Successfully lead enterprise-level software engineering and teams in the areas of software and/or cloud services for at least 3 years."}),(0,v.jsx)(a.Z,{variant:"p",sx:{mt:1,fontSize:"1.4rem",fontWeight:"400",color:"#000000",display:"flex",justifyContent:"left",textAlign:"left"},children:"- Develop and enhance engineering practices and processes."}),(0,v.jsx)(a.Z,{variant:"p",sx:{mt:1,fontSize:"1.4rem",fontWeight:"400",color:"#000000",display:"flex",justifyContent:"left",textAlign:"left"},children:"- Architect and design marketing technology solutions with a background in Customer Relationship Management, Engagement and Personalization platforms."}),(0,v.jsx)(a.Z,{variant:"p",sx:{mt:1,fontSize:"1.4rem",fontWeight:"400",color:"#000000",display:"flex",justifyContent:"left",textAlign:"left"},children:"- Collaborate with platform and data architects to design complex cross-channel solutions involving the integration of various Marketing Technology platforms (Campaign Management, CMS, Web Analytics, Decisioning, Personalization, Identity Management, CDP, eCommerce, Business Intelligence platforms, Loyalty Platforms, Preference Centres, Customer Profile Applications)."}),(0,v.jsx)(a.Z,{variant:"p",sx:{mt:1,fontSize:"1.4rem",fontWeight:"400",color:"#000000",display:"flex",justifyContent:"left",textAlign:"left"},children:"- Familiarity with JS stacks like Angular, React, Node, TypeScript, etc."}),(0,v.jsx)(a.Z,{variant:"p",sx:{mt:1,fontSize:"1.4rem",fontWeight:"400",color:"#000000",display:"flex",justifyContent:"left",textAlign:"left"},children:"- Experience working with XML, JSON, NoSQL, and relational databases."}),(0,v.jsx)(a.Z,{variant:"p",sx:{mt:1,fontSize:"1.4rem",fontWeight:"400",color:"#000000",display:"flex",justifyContent:"left",textAlign:"left"},children:"- Develop highly scalable data-driven applications based on structured and unstructured datasets."})]}),(0,v.jsxs)(l.Z,{sx:{width:"35vw",display:"flex",justifyContent:"space-between"},children:[(0,v.jsxs)(l.Z,{children:[(0,v.jsx)(a.Z,{sx:{mt:3,fontSize:"1.5rem",fontWeight:"600",color:"#000000",textAlign:"left"},children:"Department"}),(0,v.jsx)(a.Z,{variant:"p",sx:{fontSize:"1.4rem",fontWeight:"400",color:"#000000",textAlign:"left"},children:"Technology - Enterprise"})]}),(0,v.jsxs)(l.Z,{children:[(0,v.jsx)(a.Z,{sx:{mt:3,fontSize:"1.5rem",fontWeight:"600",color:"#000000",textAlign:"left"},children:"Open Positions"}),(0,v.jsx)(a.Z,{variant:"p",sx:{fontSize:"1.4rem",fontWeight:"400",color:"#000000",ml:.2,textAlign:"left",display:"flex",justifyContent:"left"},children:"4"})]})]}),(0,v.jsxs)(l.Z,{sx:{width:"35vw",display:"flex",justifyContent:"space-between"},children:[(0,v.jsxs)(l.Z,{children:[(0,v.jsx)(a.Z,{sx:{mt:3,fontSize:"1.5rem",fontWeight:"600",color:"#000000",textAlign:"left"},children:"Posted On"}),(0,v.jsx)(a.Z,{variant:"p",sx:{fontSize:"1.4rem",fontWeight:"400",color:"#000000",textAlign:"left"},children:"24-May-2023"})]}),(0,v.jsxs)(l.Z,{children:[(0,v.jsx)(a.Z,{sx:{mt:3,fontSize:"1.5rem",fontWeight:"600",color:"#000000",textAlign:"left"},children:"Designation"}),(0,v.jsx)(a.Z,{variant:"p",sx:{fontSize:"1.4rem",fontWeight:"400",color:"#000000",ml:.1,textAlign:"left",display:"flex",justifyContent:"left"},children:"Software Engineer"})]})]}),(0,v.jsx)(l.Z,{sx:{width:"35vw",display:"flex",justifyContent:"space-between"}}),(0,v.jsxs)(l.Z,{sx:{mt:3,display:"flex",justifyContent:"flex-start",gap:"16px"},children:[(0,v.jsx)(c.Z,{variant:"contained",sx:{backgroundColor:"#ff6600",fontSize:"1.2rem","&:hover":{backgroundColor:"#FF6600"}},onClick:function(){h(!0)},children:"Apply Now"}),(0,v.jsx)(c.Z,{variant:"contained",sx:{color:"#FF6600",backgroundColor:"#EFEFEF",fontSize:"1.2rem","&:hover":{backgroundColor:"#EFEFEF"}},onClick:function(){return m(-1)},children:"Back"})]})]})})}),(0,v.jsx)(l.Z,{children:(0,v.jsxs)(x.Z,{fullScreen:!0,open:o,onClose:function(){h(!1)},TransitionComponent:F,children:[(0,v.jsx)(A.Z,{sx:{position:"relative",width:"100%",display:"flex",backgroundColor:"#FFFFFF"},children:(0,v.jsx)(g.Z,{children:(0,v.jsxs)(f.ZP,{container:!0,sx:{width:"100%"},children:[(0,v.jsx)(f.ZP,{item:!0,xs:6,children:(0,v.jsx)(l.Z,{sx:{display:"flex",justifyContent:"left"},children:(0,v.jsx)("img",{alt:"logo",src:w.Z,height:"30px",width:"40%",style:{marginLeft:"10vw"}})})}),(0,v.jsx)(f.ZP,{item:!0,xs:6,sx:{display:"flex",justifyContent:"center"},children:(0,v.jsx)(c.Z,{color:"inherit",sx:{color:"#FF6600",fontSize:"1.6rem",fontWeight:"500"},onClick:function(){m("/")},children:"Home"})})]})})}),(0,v.jsx)(W.default,{})]})})]})}}}]);
//# sourceMappingURL=514.87043719.chunk.js.map