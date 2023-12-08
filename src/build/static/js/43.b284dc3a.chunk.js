"use strict";(self.webpackChunkdeveloper_management_system=self.webpackChunkdeveloper_management_system||[]).push([[43],{46043:function(e,r,n){n.r(r);var i=n(1413),s=n(47313),a=n(58467),l=n(9506),t=n(9019),d=n(42832),o=n(15103),u=n(24631),c=n(15480),h=n(88797),p=n(51405),m=n(54641),x=n(19536),Z=n(69099),j=n(48623),g=n(66212),v=n(23208),y=n(35438),b=n(51146),f=n(21933),w=n(35604),P=n(79581),S=n(20423),C=n(11829),I=n(55911),k=n(1229),D=n(46417),F={PaperProps:{style:{maxHeight:224}}},M=["Adobe XD","After Effect","Angular","Animation","ASP.Net","Bootstrap","C#","CC","Corel Draw","CSS","DIV","Dreamweaver","Figma","Graphics","HTML","Illustrator","J2Ee","Java","Javascript","JQuery","Logo Design","Material UI","Motion","MVC","MySQL","NodeJS","npm","Photoshop","PHP","React","Redux","Reduxjs & tooltit","SASS","SCSS","SQL Server","SVG","UI/UX","User Interface Designing","Wordpress"];r.default=function(){var e=(0,P.I0)(),r=(0,k.Z)(),n=(0,P.v9)((function(e){return e.auth.user})),q=new Date;q.setFullYear(q.getFullYear()-20);var A,N=(0,a.bx)(),R=void 0===(null===n||void 0===n?void 0:n.birthday)?"1999-09-09":null===n||void 0===n?void 0:n.birthday.toString(),W=new Date(R);return A=void 0===(null===n||void 0===n?void 0:n.skills)?[""]:null===n||void 0===n?void 0:n.skills,(0,D.jsx)(S.Z,{content:!1,title:"Personal Information",sx:{"& .MuiInputLabel-root":{fontSize:"0.875rem"}},children:(0,D.jsx)(w.J9,{initialValues:(0,i.Z)((0,i.Z)({},n),{},{birthday:W,skills:A,submit:null}),validationSchema:f.Ry().shape({username:f.Z_().max(255).required("User Name is required."),realname:f.Z_().max(255).required("Real Name is required."),netkeyid:f.Z_().max(255).required("NetKeyID is required."),pcpassword:f.Z_().max(255).required("PC-Password is required."),ip:f.Z_().matches(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,"Invalid IP address").required("IP address is required"),birthday:f.hT().max(q,"Age should be 20+ years.").required("Date of birth is requird."),groupid:f.Rx().min(1,"Group ID must be greater than 0").max(10,"Group ID must be lower than 11").required("Phone number is required"),emails:f.IX().of(f.Ry().shape({email:f.Z_().email("Not a valid Email").required("Required"),password:f.Z_().required("Required")}))}),onSubmit:function(n,i){var s=i.setErrors,a=i.setStatus,l=i.setSubmitting;try{n.id=n._id,e((0,I.Nq)(n)),r.updateProfile(),a({success:!1}),l(!1)}catch(t){a({success:!1}),s({submit:t.message}),l(!1)}},children:function(e){var r=e.errors,n=e.handleBlur,a=e.handleChange,f=e.handleSubmit,P=e.isSubmitting,S=e.setFieldValue,I=e.touched,k=e.values,q=e.getFieldProps;return(0,D.jsxs)("form",{noValidate:!0,onSubmit:f,children:[(0,D.jsx)(l.Z,{sx:{p:2.5},children:(0,D.jsxs)(t.ZP,{container:!0,spacing:3,children:[(0,D.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,D.jsxs)(d.Z,{spacing:1.25,children:[(0,D.jsx)(o.Z,{htmlFor:"personal-user-name",children:"User Name"}),(0,D.jsx)(u.Z,{fullWidth:!0,id:"personal-user-name",value:k.username,name:"username",onBlur:n,onChange:a,placeholder:"User Name",autoFocus:!0,inputRef:N}),I.username&&r.username&&(0,D.jsx)(c.Z,{error:!0,id:"personal-first-name-helper",children:r.username})]})}),(0,D.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,D.jsxs)(d.Z,{spacing:1.25,children:[(0,D.jsx)(o.Z,{htmlFor:"personal-real-name",children:"Real Name"}),(0,D.jsx)(u.Z,{fullWidth:!0,id:"personal-real-name",value:k.realname,name:"realname",onBlur:n,onChange:a,placeholder:"Real Name"}),I.realname&&r.realname&&(0,D.jsx)(c.Z,{error:!0,id:"personal-real-name-helper",children:r.realname})]})}),(0,D.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,D.jsxs)(d.Z,{spacing:1.25,children:[(0,D.jsx)(o.Z,{htmlFor:"personal-netkeyid",children:"NetKeyID"}),(0,D.jsx)(u.Z,{fullWidth:!0,value:k.netkeyid,name:"netkeyid",onBlur:n,onChange:a,id:"personal-netkeyid",placeholder:"NetKeyID"}),I.netkeyid&&r.netkeyid&&(0,D.jsx)(c.Z,{error:!0,id:"personal-netkeyid-helper",children:r.netkeyid})]})}),(0,D.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,D.jsxs)(d.Z,{spacing:1.25,children:[(0,D.jsx)(o.Z,{htmlFor:"personal-password",children:"PC-Password"}),(0,D.jsx)(u.Z,{fullWidth:!0,value:k.pcpassword,name:"pcpassword",onBlur:n,onChange:a,id:"personal-pcpassword",placeholder:"PC-Password"}),I.pcpassword&&r.pcpassword&&(0,D.jsx)(c.Z,{error:!0,id:"personal-pcpassword-helper",children:r.pcpassword})]})}),(0,D.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,D.jsxs)(d.Z,{spacing:1.25,children:[(0,D.jsx)(o.Z,{htmlFor:"personal-ip",children:"IP Address"}),(0,D.jsx)(u.Z,{fullWidth:!0,value:k.ip,name:"ip",onBlur:n,onChange:a,id:"personal-ip",placeholder:"IP-Address"}),I.ip&&r.ip&&(0,D.jsx)(c.Z,{error:!0,id:"personal-ip-helper",children:r.ip})]})}),(0,D.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,D.jsxs)(d.Z,{spacing:1.25,children:[(0,D.jsx)(o.Z,{htmlFor:"personal-date",children:"Date of Birth (+20)"}),(0,D.jsxs)(d.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,D.jsxs)(h.Z,{fullWidth:!0,value:null===k||void 0===k?void 0:k.birthday.getMonth().toString(),name:"birthday-month",onChange:function(e){return function(e,r,n){n("dob",new Date(r.setMonth(parseInt(e.target.value,10))))}(e,k.birthday,S)},children:[(0,D.jsx)(p.Z,{value:"0",children:"January"}),(0,D.jsx)(p.Z,{value:"1",children:"February"}),(0,D.jsx)(p.Z,{value:"2",children:"March"}),(0,D.jsx)(p.Z,{value:"3",children:"April"}),(0,D.jsx)(p.Z,{value:"4",children:"May"}),(0,D.jsx)(p.Z,{value:"5",children:"June"}),(0,D.jsx)(p.Z,{value:"6",children:"July"}),(0,D.jsx)(p.Z,{value:"7",children:"August"}),(0,D.jsx)(p.Z,{value:"8",children:"September"}),(0,D.jsx)(p.Z,{value:"9",children:"October"}),(0,D.jsx)(p.Z,{value:"10",children:"November"}),(0,D.jsx)(p.Z,{value:"11",children:"December"})]}),(0,D.jsx)(h.Z,{fullWidth:!0,value:k.birthday.getDate().toString(),name:"birthday-date",onBlur:n,onChange:function(e){return function(e,r,n){n("dob",new Date(r.setDate(parseInt(e.target.value,10))))}(e,k.birthday,S)},MenuProps:F,children:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31].map((function(e){return(0,D.jsx)(p.Z,{value:e,disabled:1===k.birthday.getMonth()&&e>(k.birthday.getFullYear()%4===0?29:28)||k.birthday.getMonth()%2!==0&&k.birthday.getMonth()<7&&e>30||k.birthday.getMonth()%2===0&&k.birthday.getMonth()>7&&e>30,children:e},e)}))}),(0,D.jsx)(v._,{dateAdapter:b.H,children:(0,D.jsx)(y.M,{sx:{width:1},views:["year"],value:k.birthday,onChange:function(e){S("birthday",e)}})})]}),I.birthday&&r.birthday&&(0,D.jsx)(c.Z,{error:!0,id:"personal-birthday-helper",children:r.birthday})]})}),(0,D.jsx)(t.ZP,{item:!0,xs:12,sm:6,children:(0,D.jsxs)(d.Z,{spacing:1.25,children:[(0,D.jsx)(o.Z,{htmlFor:"personal-groupid",children:"Group ID"}),(0,D.jsx)(d.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:(0,D.jsx)(u.Z,{type:"number",fullWidth:!0,inputProps:{min:1,max:10},id:"personal-groupid",value:k.groupid,name:"groupid",onBlur:n,onChange:a,placeholder:"groupid Number"})}),I.groupid&&r.groupid&&(0,D.jsx)(c.Z,{error:!0,id:"personal-groupid-helper",children:r.groupid})]})})]})}),(0,D.jsx)(m.Z,{title:"Emails"}),(0,D.jsx)(x.Z,{}),(0,D.jsx)(l.Z,{sx:{p:2.5},children:(0,D.jsx)(t.ZP,{container:!0,spacing:3,children:(0,D.jsx)(w.F2,{name:"emails",children:function(e){e.insert;var r,n=e.remove,a=e.push;return(0,D.jsxs)(D.Fragment,{children:[null===k||void 0===k||null===(r=k.emails)||void 0===r?void 0:r.map((function(e,r){return(0,D.jsxs)(s.Fragment,{children:[(0,D.jsx)(t.ZP,{item:!0,xs:5,children:(0,D.jsxs)(d.Z,{spacing:1.25,children:[(0,D.jsx)(o.Z,{htmlFor:"customer-email".concat(r),children:"Email"}),(0,D.jsx)(u.Z,(0,i.Z)({fullWidth:!0,type:"email",id:"customer-email".concat(r),placeholder:"Enter Email"},q("emails.".concat(r,".email"))))]})}),(0,D.jsx)(t.ZP,{item:!0,xs:5,children:(0,D.jsxs)(d.Z,{spacing:1.25,children:[(0,D.jsx)(o.Z,{htmlFor:"customer-password".concat(r),children:"Password"}),(0,D.jsx)(u.Z,(0,i.Z)({fullWidth:!0,type:"password",id:"customer-password".concat(r),placeholder:"Enter Email Password"},q("emails.".concat(r,".password"))))]})}),(0,D.jsx)(t.ZP,{item:!0,xs:2,children:(0,D.jsxs)(d.Z,{spacing:1.25,children:[(0,D.jsx)(o.Z,{htmlFor:"customer-delete".concat(r),children:"Action"}),(0,D.jsx)(Z.Z,{id:"customer-delete".concat(r),type:"button",variant:"contained",disabled:P,onClick:function(){return n(r)},children:"Remove"})]})})]},r)})),(0,D.jsx)(t.ZP,{item:!0,xs:6,children:(0,D.jsx)(d.Z,{spacing:1.25,justifyContent:"space-between",alignItems:"flex-start",children:(0,D.jsx)(Z.Z,{type:"button",variant:"contained",disabled:P,onClick:function(){return a({email:"",password:""})},children:"Add Email"})})})]})}})})}),(0,D.jsx)(l.Z,{sx:{p:2.5},children:(0,D.jsx)(t.ZP,{container:!0,spacing:3})}),(0,D.jsx)(m.Z,{title:"Skills"}),(0,D.jsx)(x.Z,{}),(0,D.jsx)(l.Z,{sx:{display:"flex",flexWrap:"wrap",listStyle:"none",p:2.5,m:0},component:"ul",children:(0,D.jsx)(j.Z,{multiple:!0,fullWidth:!0,id:"tags-outlined",options:M,value:k.skills,onBlur:n,getOptionLabel:function(e){return e},onChange:function(e,r){S("skills",r)},renderInput:function(e){return(0,D.jsx)(u.Z,(0,i.Z)((0,i.Z)({},e),{},{name:"skills",placeholder:"Add Skills"}))},renderTags:function(e,r){return e.map((function(e,n){return(0,D.jsx)(g.Z,(0,i.Z)((0,i.Z)({},r({index:n})),{},{variant:"combined",label:e,deleteIcon:(0,D.jsx)(C.Z,{style:{fontSize:"0.75rem"}}),sx:{color:"text.primary"}}))}))},sx:{"& .MuiOutlinedInput-root":{p:0,"& .MuiAutocomplete-tag":{m:1},"& fieldset":{display:"none"},"& .MuiAutocomplete-endAdornment":{display:"none"},"& .MuiAutocomplete-popupIndicator":{display:"none"}}}})}),(0,D.jsx)(x.Z,{}),(0,D.jsx)(l.Z,{sx:{p:2.5},children:(0,D.jsxs)(d.Z,{direction:"row",justifyContent:"flex-end",alignItems:"center",spacing:2,sx:{mt:2.5},children:[(0,D.jsx)(Z.Z,{variant:"outlined",color:"secondary",children:"Cancel"}),(0,D.jsx)(Z.Z,{disabled:P||0!==Object.keys(r).length,type:"submit",variant:"contained",children:"Save"})]})})]})}})})}}}]);