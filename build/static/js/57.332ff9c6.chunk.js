(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{259:function(e,t,a){"use strict";var n=a(272),l=a.n(n).a.create({baseURL:"http://localhost:3008/api/",timeout:1e4,withCredentials:!0});t.a=l},541:function(e,t,a){"use strict";a.r(t);var n,l=a(85),r=a(86),o=a(88),i=a(87),s=a(89),c=a(90),m=a(0),g=a.n(m),d=a(249),u=a(303),h=a(248),p=a(251),y=a(253),E=a(252),_=a(271),v=a(250),f=a(325),b=a(308),k=a(309),w=a(310),N=a(259),P=(a(265),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).changeParentId=function(e){n.setState({parent_id:e})},a.toggle=a.toggle.bind(Object(c.a)(Object(c.a)(a))),a.toggleFade=a.toggleFade.bind(Object(c.a)(Object(c.a)(a))),a.toggle=a.toggle.bind(Object(c.a)(Object(c.a)(a))),a.togglePrimary=a.togglePrimary.bind(Object(c.a)(Object(c.a)(a))),a.state={collapse:!0,fadeIn:!0,timeout:300,primary:!1,modal:!1,name:"",description:"",tags:[],alltags:[],author:"",imagePath:"",selectedFile:null,_id:null,gallerys:[],parent_id:0,title_seo:"",description_seo:"",keyword_seo:""},n=Object(c.a)(Object(c.a)(a)),a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"toggle",value:function(){n.setState({collapse:!n.state.collapse})}},{key:"toggleFade",value:function(){n.setState(function(e){return{fadeIn:!e}})}},{key:"togglePrimary",value:function(){this.showAllImage(),this.setState({primary:!this.state.primary})}},{key:"changeName",value:function(e){n.setState({name:e.target.value})}},{key:"changeDescription",value:function(e){n.setState({description:e.target.value})}},{key:"changeTitle_seo",value:function(e){n.setState({title_seo:e.target.value})}},{key:"changeDescription_seo",value:function(e){n.setState({description_seo:e.target.value})}},{key:"changeKeyword_seo",value:function(e){n.setState({keyword_seo:e.target.value})}},{key:"componentDidMount",value:function(){N.a.get("/catproduct/show/"+n.props.match.params.id).then(function(e){n.setState({_id:e.data._id,name:e.data.name,description:e.data.description,parent_id:e.data.parent_id,imagePath:e.data.imagePath,imageNumber:e.data.imageNumber,title_seo:e.data.title_seo,description_seo:e.data.description_seo,keyword_seo:e.data.keyword_seo})}),this.showAllImage(),this.getAllImage()}},{key:"savePost",value:function(){var e={name:n.state.name,description:n.state.description,parent_id:n.state.parent_id,imageNumber:n.state.imageNumber,imagePath:n.state.imagePath,title_seo:n.state.title_seo,description_seo:n.state.description_seo,keyword_seo:n.state.keyword_seo};N.a.post("/catproduct/update/"+n.state._id,e).then(function(e){n.props.history.push("/catproduct/index")})}},{key:"getAllImage",value:function(){N.a.get("/gallery/getAll").then(function(e){console.log(e.data),n.setState({gallerys:e.data})})}},{key:"getIdImage",value:function(e){N.a.get("/gallery/show/"+e).then(function(e){console.log(e.data),n.setState({imageNumber:e.data._id,imagePath:e.data.path})})}},{key:"imageNumbers",value:function(){return""!=n.state.imageNumber?g.a.createElement("input",{name:"imageNumber",className:"hidden",value:n.state.imageNumber}):""}},{key:"imagePath",value:function(){return""!=n.state.imagePath?g.a.createElement("img",{src:"https://ai-shop2.herokuapp.com"+n.state.imagePath}):""}},{key:"showAllImage",value:function(){return n.state.gallerys.map(function(e,t){return g.a.createElement(d.a,{xs:"6",sm:"3",className:"text-center flol"},g.a.createElement("div",{color:"divItemImage warning"},g.a.createElement("img",{className:"img100",src:"https://ai-shop2.herokuapp.com"+e.path,"data-id":e._id,onDoubleClick:function(){return n.getIdImage(e._id)}})),g.a.createElement("div",{className:"clearfix"}),g.a.createElement(u.a,null,"giay"))})}},{key:"render",value:function(){return g.a.createElement("div",{className:"animated fadeIn"},g.a.createElement(h.a,null,g.a.createElement(d.a,{xs:"12",sm:"12"},g.a.createElement(p.a,null,g.a.createElement(y.a,null,g.a.createElement("strong",null,"Th\xeam danh m\u1ee5c"),g.a.createElement("button",{onClick:this.savePost,className:"btn btn-sm btn-primary flor"},"C\u1eadp nh\u1eadt")),g.a.createElement(E.a,null,g.a.createElement("div",{className:"form-group"},g.a.createElement(u.a,{htmlFor:"name"},g.a.createElement("strong",null,"T\xean danh m\u1ee5c")),g.a.createElement(_.a,{type:"text",value:n.state.name,onChange:this.changeName,id:"name",placeholder:"T\xean danh m\u1ee5c",required:!0})),g.a.createElement("div",{className:"form-group"},g.a.createElement(u.a,{htmlFor:"image"},g.a.createElement("strong",null,"\u1ea2nh \u0111\u1ea1i di\u1ec7n")),g.a.createElement("div",null,g.a.createElement(v.a,{color:"primary",onClick:this.togglePrimary,className:"mr-1"},"Ch\u1ecdn \u1ea3nh"),g.a.createElement("div",{className:"showImage"},this.imagePath(),this.imageNumbers()))),g.a.createElement("div",{className:"form-group"},g.a.createElement(u.a,{htmlFor:"description"},g.a.createElement("strong",null,"M\xf4 t\u1ea3")),g.a.createElement(_.a,{type:"textarea",value:n.state.description,onChange:this.changeDescription,name:"description",id:"description",placeholder:"M\xf4 t\u1ea3",rows:"3"})),g.a.createElement("hr",null),g.a.createElement("div",{className:"form-group"},g.a.createElement(u.a,{htmlFor:"title_seo"},g.a.createElement("strong",null,"Ti\xeau \u0111\u1ec1 seo")),g.a.createElement(_.a,{type:"text",value:n.state.title_seo,onChange:this.changeTitle_seo,id:"title_seo",placeholder:"Ti\xeau \u0111\u1ec1 seo"})),g.a.createElement("div",{className:"form-group"},g.a.createElement(u.a,{htmlFor:"description_seo"},g.a.createElement("strong",null,"M\xf4 t\u1ea3 seo")),g.a.createElement(_.a,{type:"textarea",value:n.state.description_seo,onChange:this.changeDescription_seo,name:"description_seo",id:"description_seo",placeholder:"M\xf4 t\u1ea3 seo",rows:"3"})),g.a.createElement("div",{className:"form-group"},g.a.createElement(u.a,{htmlFor:"keyword_seo"},g.a.createElement("strong",null,"T\u1eeb kh\xf3a seo")),g.a.createElement(_.a,{type:"textarea",value:n.state.keyword_seo,onChange:this.changeKeyword_seo,name:"keyword_seo",id:"keyword_seo",placeholder:"T\u1eeb kh\xf3a seo",rows:"3"})))))),g.a.createElement(f.a,{isOpen:this.state.primary,toggle:this.togglePrimary,className:"modal-primary modal-lg "+this.props.className},g.a.createElement(b.a,{toggle:this.togglePrimary},g.a.createElement("button",{className:"buttonUploadImage"},"T\u1ea3i \u1ea3nh",g.a.createElement("input",{type:"file",name:"file",onChange:this.onChangeHandler}))),g.a.createElement(k.a,null,this.showAllImage()),g.a.createElement(w.a,null,g.a.createElement(v.a,{color:"primary",onClick:this.togglePrimary},"C\u1eadp nh\u1eadt"),g.a.createElement(v.a,{color:"secondary",onClick:this.togglePrimary},"B\u1ecf qua"))))}}]),t}(m.Component));t.default=P}}]);
//# sourceMappingURL=57.332ff9c6.chunk.js.map