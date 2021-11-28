(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={contactList__item:"ContactList_contactList__item__2CRSk",deleteButton:"ContactList_deleteButton__1oUqa"}},13:function(t,e,n){t.exports={App:"App_App__AUSQV"}},19:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(11),o=n.n(s),r=(n(19),n(14)),i=n(5),u=n(6),l=n(8),b=n(7),h=n(10),d=n.n(h),m=n(0),p=function(t){var e=t.contactList,n=t.onDeleteContact;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("ul",{className:"contactList",children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(m.jsxs)("li",{className:d.a.contactList__item,children:[a," : ",c,Object(m.jsx)("button",{type:"button",className:d.a.deleteButton,onClick:function(){return n(e)},children:"Delete"})]},e)}))})})},j=n(12),f=n(2),v=n.n(f),C=n(3),O=n.n(C),g=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:"",btnEnable:!0},t.nameInputId=v.a.generate(),t.numberInputId=v.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;"name"===a&&t.checkName(c),t.setState(Object(j.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"checkName",value:function(t){if(this.props.contactList.find((function(e){return e.name.toLowerCase()===t.toLowerCase()})))return this.setState({btnEnable:!1}),void alert("".concat(t," is already in contacts"));this.setState({btnEnable:!0})}},{key:"render",value:function(){return Object(m.jsxs)("form",{className:O.a.form,onSubmit:this.handleSubmit,children:[Object(m.jsxs)("label",{htmlFor:this.nameInputId,className:O.a.input,children:["Name",Object(m.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:this.state.name,onChange:this.handleChange,id:this.nameInputId})]}),Object(m.jsxs)("label",{htmlFor:this.numberInputId,className:O.a.input,children:["Number",Object(m.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:this.state.number,onChange:this.handleChange,id:this.numberInputId})]}),Object(m.jsx)("button",{type:"submit",className:O.a.button,disabled:!this.state.btnEnable,children:"Add contact"})]})}}]),n}(a.Component),x=g,_=function(t){var e=t.value,n=t.onChange;return Object(m.jsxs)("label",{children:["Find contacts by name",Object(m.jsx)("input",{type:"text",value:e,onChange:n})]})},S=n(13),y=n.n(S),I=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c={id:v.a.generate(),name:n,number:a};t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(r.a)(e))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;n!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts(),n=this.state.contacts;return Object(m.jsxs)("div",{className:y.a.App,children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(x,{onSubmit:this.addContact,contactList:n}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(_,{value:t,onChange:this.changeFilter}),Object(m.jsx)(p,{contactList:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component),N=I;o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={form:"ContactForm_form__3jz_8",input:"ContactForm_input__36Sg0",button:"ContactForm_button__RzE7m"}}},[[29,1,2]]]);
//# sourceMappingURL=main.818ae18e.chunk.js.map