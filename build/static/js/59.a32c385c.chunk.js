(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{259:function(e,a,t){"use strict";var n=t(272),l=t.n(n).a.create({baseURL:"http://localhost:3008/api/",timeout:1e4,withCredentials:!0});a.a=l},526:function(e,a,t){"use strict";t.r(a);var n,l=t(85),r=t(86),s=t(88),c=t(87),m=t(89),o=t(90),i=t(0),u=t.n(i),d=t(327),h=t(288),p=t(248),E=t(249),b=t(388),g=t(251),w=t(252),f=t(282),y=t(283),v=t(264),k=t(271),N=t(250),C=t(265),j=t.n(C),x=t(259),O=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(c.a)(a).call(this,e))).state={email:"",password:""},n=Object(o.a)(Object(o.a)(t)),t}return Object(m.a)(a,e),Object(r.a)(a,[{key:"handleEmailChange",value:function(e){n.setState({email:e.target.value})}},{key:"handlePasswordChange",value:function(e){n.setState({password:e.target.value})}},{key:"saveRegister",value:function(e){e.preventDefault();var a={email:n.state.email,password:n.state.password};console.log(a),x.a.post("auth/login",j.a.stringify(a)).then(function(e){!0===e.data.auth&&(localStorage.setItem("token",e.data.token),x.a.defaults.headers.common["x-access-token"]=e.data.token,n.props.history.push({pathname:"/",redirectfrom:"dashboard"}))}).catch(function(e){alert("Username password mismatch"),console.log(e)})}},{key:"render",value:function(){return u.a.createElement("div",{className:"app flex-row align-items-center"},u.a.createElement(h.a,null,u.a.createElement(p.a,{className:"justify-content-center"},u.a.createElement(E.a,{md:"8"},u.a.createElement(b.a,null,u.a.createElement(g.a,{className:"p-4"},u.a.createElement(w.a,null,u.a.createElement("form",{onSubmit:this.saveRegister},u.a.createElement("h1",null,"\u0110\u0103ng nh\u1eadp"),u.a.createElement("p",{className:"text-muted"},"H\u1ec7 th\u1ed1ng qu\u1ea3n tr\u1ecb AI"),u.a.createElement(f.a,{className:"mb-3"},u.a.createElement(y.a,{addonType:"prepend"},u.a.createElement(v.a,null,u.a.createElement("i",{className:"icon-user"}))),u.a.createElement(k.a,{type:"email",onChange:this.handleEmailChange,name:"email",placeholder:"Email",autoComplete:"email",required:!0})),u.a.createElement(f.a,{className:"mb-4"},u.a.createElement(y.a,{addonType:"prepend"},u.a.createElement(v.a,null,u.a.createElement("i",{className:"icon-lock"}))),u.a.createElement(k.a,{type:"password",onChange:this.handlePasswordChange,name:"password",placeholder:"M\u1eadt kh\u1ea9u",autoComplete:"password",required:!0})),u.a.createElement(f.a,{className:"mb-4"},u.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))))),u.a.createElement(g.a,{className:"text-white bg-primary py-5 d-md-down-none",style:{width:"44%"}},u.a.createElement(w.a,{className:"text-center"},u.a.createElement("div",null,u.a.createElement("h2",null,"Gi\u1edbi thi\u1ec7u"),u.a.createElement("p",null,"Ch\xfang t\xf4i chuy\xean c\u1ea5p c\u1ea5p d\u1ecbch v\u1ee5 website, ph\u1ea7n m\u1ec1m. H\u1ed7 tr\u1ee3 k\u1ef9 thu\u1eadt kinh doanh xin g\u1ecdi s\u1ed1 0966665040"),u.a.createElement(d.a,{to:"/register"},u.a.createElement(N.a,{color:"primary",className:"mt-3",active:!0,tabIndex:-1},"Li\xean h\u1ec7!"))))))))))}}]),a}(i.Component);a.default=O}}]);
//# sourceMappingURL=59.a32c385c.chunk.js.map