this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["products-by-attribute"]=function(t){function e(e){for(var n,i,u=e[0],a=e[1],s=e[2],b=0,d=[];b<u.length;b++)i=u[b],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);for(l&&l(e);d.length;)d.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,u=1;u<r.length;u++){var a=r[u];0!==o[a]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={34:0},c=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var u=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=a;return c.push([812,0]),r()}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},107:function(t,e){},108:function(t,e){},109:function(t,e){},110:function(t,e){},111:function(t,e){},112:function(t,e){},113:function(t,e){},114:function(t,e){},115:function(t,e){},116:function(t,e){},117:function(t,e){},118:function(t,e){},119:function(t,e){},120:function(t,e){},13:function(t,e){!function(){t.exports=this.wp.apiFetch}()},132:function(t,e,r){"use strict";var n=r(0),o=r(1),c=r(4);r(2);e.a=function(t){var e=t.value,r=t.setAttributes;return Object(n.createElement)(c.SelectControl,{label:Object(o.__)("Order products by",'woocommerce'),value:e,options:[{label:Object(o.__)("Newness - newest first",'woocommerce'),value:"date"},{label:Object(o.__)("Price - low to high",'woocommerce'),value:"price_asc"},{label:Object(o.__)("Price - high to low",'woocommerce'),value:"price_desc"},{label:Object(o.__)("Rating - highest first",'woocommerce'),value:"rating"},{label:Object(o.__)("Sales - most first",'woocommerce'),value:"popularity"},{label:Object(o.__)("Title - alphabetical",'woocommerce'),value:"title"},{label:Object(o.__)("Menu Order",'woocommerce'),value:"menu_order"}],onChange:function(t){return r({orderby:t})}})}},14:function(t,e){!function(){t.exports=this.wp.blockEditor}()},15:function(t,e){!function(){t.exports=this.regeneratorRuntime}()},17:function(t,e){!function(){t.exports=this.wp.blocks}()},175:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(0),o=r(5),c=Object(n.createElement)("img",{src:o.T+"img/grid.svg",alt:"Grid Preview",width:"230",height:"250",style:{width:"100%"}})},18:function(t,e){!function(){t.exports=this.wp.url}()},25:function(t,e){!function(){t.exports=this.wp.compose}()},3:function(t,e){!function(){t.exports=this.wc.wcSettings}()},33:function(t,e){!function(){t.exports=this.wp.htmlEntities}()},35:function(t,e){!function(){t.exports=this.moment}()},4:function(t,e){!function(){t.exports=this.wp.components}()},40:function(t,e,r){"use strict";r.d(e,"h",(function(){return d})),r.d(e,"e",(function(){return p})),r.d(e,"b",(function(){return g})),r.d(e,"i",(function(){return f})),r.d(e,"f",(function(){return O})),r.d(e,"c",(function(){return h})),r.d(e,"d",(function(){return m})),r.d(e,"g",(function(){return j})),r.d(e,"a",(function(){return w}));var n=r(8),o=r.n(n),c=r(18),i=r(13),u=r.n(i),a=r(6),s=r(5);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=void 0===n?"":n,i=t.queryArgs,l=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=void 0===n?"":n,i=t.queryArgs,u=void 0===i?[]:i,a={per_page:s.u?100:0,catalog_visibility:"any",search:o,orderby:"title",order:"asc"},l=[Object(c.addQueryArgs)("/wc/store/products",b(b({},a),u))];return s.u&&r.length&&l.push(Object(c.addQueryArgs)("/wc/store/products",{catalog_visibility:"any",include:r})),l}({selected:r,search:o,queryArgs:void 0===i?[]:i});return Promise.all(l.map((function(t){return u()({path:t})}))).then((function(t){return Object(a.uniqBy)(Object(a.flatten)(t),"id").map((function(t){return b(b({},t),{},{parent:0})}))})).catch((function(t){throw t}))},p=function(t){return u()({path:"/wc/store/products/".concat(t)})},g=function(){return u()({path:"wc/store/products/attributes"})},f=function(t){return u()({path:"wc/store/products/attributes/".concat(t,"/terms")})},O=function(t){var e=t.selected,r=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=[Object(c.addQueryArgs)("wc/store/products/tags",{per_page:s.x?100:0,orderby:s.x?"count":"name",order:s.x?"desc":"asc",search:n})];return s.x&&r.length&&o.push(Object(c.addQueryArgs)("wc/store/products/tags",{include:r})),o}({selected:void 0===e?[]:e,search:t.search});return Promise.all(r.map((function(t){return u()({path:t})}))).then((function(t){return Object(a.uniqBy)(Object(a.flatten)(t),"id")}))},h=function(t){return u()({path:Object(c.addQueryArgs)("wc/store/products/categories",b({per_page:0},t))})},m=function(t){return u()({path:"wc/store/products/categories/".concat(t)})},j=function(t){return u()({path:Object(c.addQueryArgs)("wc/store/products",{per_page:0,type:"variation",parent:t})})},w=function(t,e){if(!t.title.raw)return t.slug;var r=1===e.filter((function(e){return e.title.raw===t.title.raw})).length;return t.title.raw+(r?"":" - ".concat(t.slug))}},42:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r(15),o=r.n(n),c=r(37),i=r.n(c),u=function(){var t=i()(o.a.mark((function t(e){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e.json){t.next=11;break}return t.prev=1,t.next=4,e.json();case 4:return r=t.sent,t.abrupt("return",{message:r.message,type:r.type||"api"});case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",{message:t.t0.message,type:"general"});case 11:return t.abrupt("return",{message:e.message,type:e.type||"general"});case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},47:function(t,e){!function(){t.exports=this.wp.escapeHtml}()},49:function(t,e,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(47));e.a=function(t){var e,r,i,u=t.error;return Object(n.createElement)("div",{className:"wc-block-error-message"},(r=(e=u).message,i=e.type,r?"general"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned",'woocommerce'),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):"api"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned from the API",'woocommerce'),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):r:Object(o.__)("An unknown error occurred which prevented the block from being updated.",'woocommerce')))}},5:function(t,e,r){"use strict";r.d(e,"k",(function(){return o})),r.d(e,"J",(function(){return c})),r.d(e,"P",(function(){return i})),r.d(e,"z",(function(){return u})),r.d(e,"B",(function(){return a})),r.d(e,"l",(function(){return s})),r.d(e,"A",(function(){return l})),r.d(e,"D",(function(){return b})),r.d(e,"n",(function(){return d})),r.d(e,"C",(function(){return p})),r.d(e,"m",(function(){return g})),r.d(e,"F",(function(){return f})),r.d(e,"u",(function(){return O})),r.d(e,"x",(function(){return h})),r.d(e,"r",(function(){return m})),r.d(e,"s",(function(){return j})),r.d(e,"t",(function(){return w})),r.d(e,"j",(function(){return y})),r.d(e,"L",(function(){return v})),r.d(e,"Q",(function(){return _})),r.d(e,"p",(function(){return k})),r.d(e,"q",(function(){return S})),r.d(e,"o",(function(){return E})),r.d(e,"I",(function(){return P})),r.d(e,"c",(function(){return x})),r.d(e,"v",(function(){return C})),r.d(e,"w",(function(){return A})),r.d(e,"T",(function(){return B})),r.d(e,"U",(function(){return T})),r.d(e,"K",(function(){return M})),r.d(e,"a",(function(){return L})),r.d(e,"N",(function(){return N})),r.d(e,"b",(function(){return R})),r.d(e,"M",(function(){return I})),r.d(e,"E",(function(){return z})),r.d(e,"h",(function(){return V})),r.d(e,"O",(function(){return Q})),r.d(e,"g",(function(){return U})),r.d(e,"i",(function(){return q})),r.d(e,"H",(function(){return G})),r.d(e,"G",(function(){return W})),r.d(e,"S",(function(){return J})),r.d(e,"R",(function(){return Y})),r.d(e,"d",(function(){return K})),r.d(e,"e",(function(){return X})),r.d(e,"f",(function(){return $})),r.d(e,"y",(function(){return Z})),r.d(e,"X",(function(){return et})),r.d(e,"Y",(function(){return rt})),r.d(e,"V",(function(){return nt})),r.d(e,"W",(function(){return ot}));var n=r(3),o=Object(n.getSetting)("currentUserIsAdmin",!1),c=Object(n.getSetting)("reviewRatingsEnabled",!0),i=Object(n.getSetting)("showAvatars",!0),u=Object(n.getSetting)("max_columns",6),a=Object(n.getSetting)("min_columns",1),s=Object(n.getSetting)("default_columns",3),l=Object(n.getSetting)("max_rows",6),b=Object(n.getSetting)("min_rows",1),d=Object(n.getSetting)("default_rows",3),p=Object(n.getSetting)("min_height",500),g=Object(n.getSetting)("default_height",500),f=Object(n.getSetting)("placeholderImgSrc",""),O=(Object(n.getSetting)("thumbnail_size",300),Object(n.getSetting)("isLargeCatalog")),h=Object(n.getSetting)("limitTags"),m=Object(n.getSetting)("hasProducts",!0),j=Object(n.getSetting)("hasTags",!0),w=Object(n.getSetting)("homeUrl",""),y=Object(n.getSetting)("couponsEnabled",!0),v=Object(n.getSetting)("shippingEnabled",!0),_=Object(n.getSetting)("taxesEnabled",!0),k=Object(n.getSetting)("displayItemizedTaxes",!1),S=Object(n.getSetting)("hasDarkEditorStyleSupport",!1),E=(Object(n.getSetting)("displayShopPricesIncludingTax",!1),Object(n.getSetting)("displayCartPricesIncludingTax",!1)),P=Object(n.getSetting)("productCount",0),x=Object(n.getSetting)("attributes",[]),C=Object(n.getSetting)("isShippingCalculatorEnabled",!0),A=Object(n.getSetting)("isShippingCostHidden",!1),D=Object(n.getSetting)("woocommerceBlocksPhase",1),B=Object(n.getSetting)("wcBlocksAssetUrl",""),T=Object(n.getSetting)("wcBlocksBuildUrl",""),M=Object(n.getSetting)("shippingCountries",{}),L=Object(n.getSetting)("allowedCountries",{}),N=Object(n.getSetting)("shippingStates",{}),R=Object(n.getSetting)("allowedStates",{}),I=Object(n.getSetting)("shippingMethodsExist",!1),z=Object(n.getSetting)("paymentGatewaySortOrder",[]),V=Object(n.getSetting)("checkoutShowLoginReminder",!0),H={id:0,title:"",permalink:""},F=Object(n.getSetting)("storePages",{shop:H,cart:H,checkout:H,privacy:H,terms:H}),Q=F.shop.permalink,U=F.checkout.id,q=F.checkout.permalink,G=F.privacy.permalink,W=F.privacy.title,J=F.terms.permalink,Y=F.terms.title,K=F.cart.id,X=F.cart.permalink,$=Object(n.getSetting)("checkoutAllowsGuest",!1),Z=(Object(n.getSetting)("checkoutAllowsSignup",!1),Object(n.getSetting)("loginUrl","/wp-login.php")),tt=r(17),et=function(t,e){if(D>2)return Object(tt.registerBlockType)(t,e)},rt=function(t,e){if(D>1)return Object(tt.registerBlockType)(t,e)},nt=function(){return D>2},ot=function(){return D>1}},54:function(t,e){!function(){t.exports=this.wp.keycodes}()},6:function(t,e){!function(){t.exports=this.lodash}()},61:function(t,e,r){"use strict";var n=r(8),o=r.n(n),c=r(27),i=r.n(c),u=r(9);r(2);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}e.a=function(t){var e=t.srcElement,r=t.size,n=void 0===r?24:r,c=i()(t,["srcElement","size"]);return Object(u.isValidElement)(e)&&Object(u.cloneElement)(e,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({width:n,height:n},c))}},68:function(t,e){!function(){t.exports=this.wp.editor}()},74:function(t,e){!function(){t.exports=this.wp.hooks}()},77:function(t,e){!function(){t.exports=this.ReactDOM}()},78:function(t,e){!function(){t.exports=this.wp.dom}()},79:function(t,e,r){"use strict";var n=r(8),o=r.n(n),c=r(0),i=r(1),u=(r(2),r(4));function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a=function(t){var e=t.onChange,r=t.settings,n=r.button,o=r.price,a=r.rating,l=r.title;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product title",'woocommerce'),help:l?Object(i.__)("Product title is visible.",'woocommerce'):Object(i.__)("Product title is hidden.",'woocommerce'),checked:l,onChange:function(){return e(s(s({},r),{},{title:!l}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product price",'woocommerce'),help:o?Object(i.__)("Product price is visible.",'woocommerce'):Object(i.__)("Product price is hidden.",'woocommerce'),checked:o,onChange:function(){return e(s(s({},r),{},{price:!o}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product rating",'woocommerce'),help:a?Object(i.__)("Product rating is visible.",'woocommerce'):Object(i.__)("Product rating is hidden.",'woocommerce'),checked:a,onChange:function(){return e(s(s({},r),{},{rating:!a}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Add to Cart button",'woocommerce'),help:n?Object(i.__)("Add to Cart button is visible.",'woocommerce'):Object(i.__)("Add to Cart button is hidden.",'woocommerce'),checked:n,onChange:function(){return e(s(s({},r),{},{button:!n}))}}))}},80:function(t,e,r){"use strict";var n=r(0),o=r(1),c=r(6),i=(r(2),r(4)),u=r(5);e.a=function(t){var e=t.columns,r=t.rows,a=t.setAttributes,s=t.alignButtons;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(i.RangeControl,{label:Object(o.__)("Columns",'woocommerce'),value:e,onChange:function(t){var e=Object(c.clamp)(t,u.B,u.z);a({columns:Object(c.isNaN)(e)?"":e})},min:u.B,max:u.z}),Object(n.createElement)(i.RangeControl,{label:Object(o.__)("Rows",'woocommerce'),value:r,onChange:function(t){var e=Object(c.clamp)(t,u.D,u.A);a({rows:Object(c.isNaN)(e)?"":e})},min:u.D,max:u.A}),Object(n.createElement)(i.ToggleControl,{label:Object(o.__)("Align Last Block",'woocommerce'),help:s?Object(o.__)("The last inner block will be aligned vertically.",'woocommerce'):Object(o.__)("The last inner block will follow other content.",'woocommerce'),checked:s,onChange:function(){return a({alignButtons:!s})}}))}},812:function(t,e,r){t.exports=r(902)},813:function(t,e){},814:function(t,e){},82:function(t,e){!function(){t.exports=this.wp.viewport}()},87:function(t,e,r){"use strict";r.d(e,"a",(function(){return b}));var n=r(0),o=r(7),c=r.n(o),i=r(11),u=r.n(i),a=r(5);function s(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){u=!0,c=t},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw c}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var b=function(t){return function(e){var r=e.attributes,o=r.align,i=r.contentVisibility,l=c()(o?"align".concat(o):"",{"is-hidden-title":!i.title,"is-hidden-price":!i.price,"is-hidden-rating":!i.rating,"is-hidden-button":!i.button});return Object(n.createElement)(n.RawHTML,{className:l},function(t,e){var r=t.attributes,n=r.attributes,o=r.attrOperator,c=r.categories,i=r.catOperator,l=r.orderby,b=r.products,d=r.columns||a.l,p=r.rows||a.n,g=new Map;switch(g.set("limit",p*d),g.set("columns",d),c&&c.length&&(g.set("category",c.join(",")),i&&"all"===i&&g.set("cat_operator","AND")),n&&n.length&&(g.set("terms",n.map((function(t){return t.id})).join(",")),g.set("attribute",n[0].attr_slug),o&&"all"===o&&g.set("terms_operator","AND")),l&&("price_desc"===l?(g.set("orderby","price"),g.set("order","DESC")):"price_asc"===l?(g.set("orderby","price"),g.set("order","ASC")):"date"===l?(g.set("orderby","date"),g.set("order","DESC")):g.set("orderby",l)),e){case"woocommerce/product-best-sellers":g.set("best_selling","1");break;case"woocommerce/product-top-rated":g.set("orderby","rating");break;case"woocommerce/product-on-sale":g.set("on_sale","1");break;case"woocommerce/product-new":g.set("orderby","date"),g.set("order","DESC");break;case"woocommerce/handpicked-products":if(!b.length)return"";g.set("ids",b.join(",")),g.set("limit",b.length);break;case"woocommerce/product-category":if(!c||!c.length)return"";break;case"woocommerce/products-by-attribute":if(!n||!n.length)return""}var f,O="[products",h=s(g);try{for(h.s();!(f=h.n()).done;){var m=u()(f.value,2);O+=" "+m[0]+'="'+m[1]+'"'}}catch(t){h.e(t)}finally{h.f()}return O+="]"}(e,t))}}},9:function(t,e){!function(){t.exports=this.React}()},902:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(1),c=r(61),i=r(56),u=Object(n.createElement)(i.a,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(n.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(n.createElement)("path",{d:"M2.53 19.65l1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61zm19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6zm-9.2 3.8L7.87 7.79l7.35-3.04h.01l4.95 11.95-7.35 3.05z"}),Object(n.createElement)("circle",{cx:"11",cy:"9",r:"1"}),Object(n.createElement)("path",{d:"M5.88 19.75c0 1.1.9 2 2 2h1.45l-3.45-8.34v6.34z"})),a=r(17),s=r(5),l=(r(813),r(21)),b=r.n(l),d=r(24),p=r.n(d),g=r(22),f=r.n(g),O=r(23),h=r.n(O),m=r(12),j=r.n(m),w=r(14),y=r(68),v=r(4),_=(r(2),r(79)),k=r(80),S=r(58),E=r.n(S),P=r(10),x=r.n(P),C=r(6),A=r(50),D=r(15),B=r.n(D),T=r(37),M=r.n(T),L=r(8),N=r.n(L),R=r(11),I=r.n(R),z=r(40),V=r(42);function H(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function F(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?H(Object(r),!0).forEach((function(e){N()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Q=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id";return e?Object(C.find)(e,[r,t]):null},U=function(t){return function(e){var r=e.selected,o=Object(n.useState)([]),c=I()(o,2),i=c[0],u=c[1],a=Object(n.useState)(0),s=I()(a,2),l=s[0],b=s[1],d=Object(n.useState)({}),p=I()(d,2),g=p[0],f=p[1],O=Object(n.useState)(!0),h=I()(O,2),m=h[0],j=h[1],w=Object(n.useState)(!1),y=I()(w,2),v=y[0],_=y[1],k=Object(n.useState)(null),S=I()(k,2),E=S[0],P=S[1];return Object(n.useEffect)((function(){Object(z.b)().then((function(t){if(t=t.map((function(t){return F(F({},t),{},{parent:0})})),u(t),r.length>0){var e=i?Q(r[0].attr_slug,t,"slug"):null;e&&b(e.id)}})).catch(function(){var t=M()(B.a.mark((function t(e){return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=P,t.next=3,Object(V.a)(e);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).finally((function(){j(!1)}))}),[]),Object(n.useEffect)((function(){var t=i?Q(l,i):null;t&&(_(!0),Object(z.i)(l).then((function(e){e=e.map((function(e){return F(F({},e),{},{parent:l,attr_slug:t.taxonomy})})),f(F(F({},g),{},N()({},l,e)))})).catch(function(){var t=M()(B.a.mark((function t(e){return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=P,t.next=3,Object(V.a)(e);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).finally((function(){_(!1)})))}),[l,i]),Object(n.createElement)(t,x()({},e,{attributes:i,error:E,expandedAttribute:l,onExpandAttribute:b,isLoading:m,termsAreLoading:v,termsList:g}))}},q=r(49),G=(r(814),function(t){var e=t.attributes,r=t.error,c=t.expandedAttribute,i=t.onChange,u=t.onExpandAttribute,a=t.onOperatorChange,s=t.isLoading,l=t.operator,b=t.selected,d=t.termsAreLoading,p=t.termsList,g=function(t){return function(){i([]),u(t.id)}},f=p[c]||[],O=[].concat(E()(e),E()(f)),h={clear:Object(o.__)("Clear all product attributes",'woocommerce'),list:Object(o.__)("Product Attributes",'woocommerce'),noItems:Object(o.__)("Your store doesn't have any product attributes.",'woocommerce'),search:Object(o.__)("Search for product attributes",'woocommerce'),selected:function(t){return Object(o.sprintf)(Object(o._n)("%d attribute selected","%d attributes selected",t,'woocommerce'),t)},updated:Object(o.__)("Product attribute search results updated.",'woocommerce')};return r?Object(n.createElement)(q.a,{error:r}):Object(n.createElement)(n.Fragment,null,Object(n.createElement)(A.a,{className:"woocommerce-product-attributes",list:O,isLoading:s,selected:b.map((function(t){var e=t.id;return Object(C.find)(O,{id:e})})).filter(Boolean),onChange:i,renderItem:function(t){var e=t.item,r=t.search,i=t.depth,u=void 0===i?0:i,a=["woocommerce-product-attributes__item","woocommerce-search-list__item"];return r.length&&a.push("is-searching"),0===u&&e.parent&&a.push("is-skip-level"),e.breadcrumbs.length?Object(n.createElement)(A.b,x()({className:a.join(" ")},t,{showCount:!0,"aria-label":"".concat(e.breadcrumbs[0],": ").concat(e.name)})):[Object(n.createElement)(A.b,x()({key:"attr-".concat(e.id)},t,{className:a.join(" "),isSelected:c===e.id,onSelect:g,isSingle:!0,disabled:"0"===e.count,"aria-expanded":c===e.id,"aria-label":Object(o.sprintf)(Object(o._n)("%s, has %d term","%s, has %d terms",e.count,'woocommerce'),e.name,e.count)})),c===e.id&&d&&Object(n.createElement)("div",{key:"loading",className:"woocommerce-search-list__item woocommerce-product-attributes__itemdepth-1 is-loading is-not-active"},Object(n.createElement)(v.Spinner,null))]},messages:h,isHierarchical:!0}),!!a&&Object(n.createElement)("div",{className:b.length<2?"screen-reader-text":""},Object(n.createElement)(v.SelectControl,{className:"woocommerce-product-attributes__operator",label:Object(o.__)("Display products matching",'woocommerce'),help:Object(o.__)("Pick at least two attributes to use this setting.",'woocommerce'),value:l,onChange:a,options:[{label:Object(o.__)("Any selected attributes",'woocommerce'),value:"any"},{label:Object(o.__)("All selected attributes",'woocommerce'),value:"all"}]})))});G.defaultProps={operator:"any"};var W=U(G),J=r(132),Y=r(175);function K(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=j()(t);if(e){var o=j()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return h()(this,r)}}var X=function(t){f()(r,t);var e=K(r);function r(){return b()(this,r),e.apply(this,arguments)}return p()(r,[{key:"getInspectorControls",value:function(){var t=this.props.setAttributes,e=this.props.attributes,r=e.attributes,c=e.attrOperator,i=e.columns,u=e.contentVisibility,a=e.orderby,s=e.rows,l=e.alignButtons;return Object(n.createElement)(w.InspectorControls,{key:"inspector"},Object(n.createElement)(v.PanelBody,{title:Object(o.__)("Layout",'woocommerce'),initialOpen:!0},Object(n.createElement)(k.a,{columns:i,rows:s,alignButtons:l,setAttributes:t})),Object(n.createElement)(v.PanelBody,{title:Object(o.__)("Content",'woocommerce'),initialOpen:!0},Object(n.createElement)(_.a,{settings:u,onChange:function(e){return t({contentVisibility:e})}})),Object(n.createElement)(v.PanelBody,{title:Object(o.__)("Filter by Product Attribute",'woocommerce'),initialOpen:!1},Object(n.createElement)(W,{selected:r,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=e.map((function(t){return{id:t.id,attr_slug:t.attr_slug}}));t({attributes:r})},operator:c,onOperatorChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return t({attrOperator:e})}})),Object(n.createElement)(v.PanelBody,{title:Object(o.__)("Order By",'woocommerce'),initialOpen:!1},Object(n.createElement)(J.a,{setAttributes:t,value:a})))}},{key:"renderEditMode",value:function(){var t=this.props,e=t.debouncedSpeak,r=t.setAttributes,i=this.props.attributes;return Object(n.createElement)(v.Placeholder,{icon:Object(n.createElement)(c.a,{srcElement:u}),label:Object(o.__)("Products by Attribute",'woocommerce'),className:"wc-block-products-grid wc-block-products-by-attribute"},Object(o.__)("Display a grid of products from your selected attributes.",'woocommerce'),Object(n.createElement)("div",{className:"wc-block-products-by-attribute__selection"},Object(n.createElement)(W,{selected:i.attributes,onChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=t.map((function(t){return{id:t.id,attr_slug:t.attr_slug}}));r({attributes:e})},operator:i.attrOperator,onOperatorChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return r({attrOperator:t})}}),Object(n.createElement)(v.Button,{isPrimary:!0,onClick:function(){r({editMode:!1}),e(Object(o.__)("Showing Products by Attribute block preview.",'woocommerce'))}},Object(o.__)("Done",'woocommerce'))))}},{key:"render",value:function(){var t=this.props,e=t.attributes,r=t.name,c=t.setAttributes,i=e.editMode;return e.isPreview?Y.a:Object(n.createElement)(n.Fragment,null,Object(n.createElement)(w.BlockControls,null,Object(n.createElement)(v.Toolbar,{controls:[{icon:"edit",title:Object(o.__)("Edit"),onClick:function(){return c({editMode:!i})},isActive:i}]})),this.getInspectorControls(),i?this.renderEditMode():Object(n.createElement)(v.Disabled,null,Object(n.createElement)(y.ServerSideRender,{block:r,attributes:e})))}}]),r}(n.Component),$=Object(v.withSpokenMessages)(X),Z=r(87);Object(a.registerBlockType)("woocommerce/products-by-attribute",{title:Object(o.__)("Products by Attribute",'woocommerce'),icon:{src:Object(n.createElement)(c.a,{srcElement:u}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(o.__)("WooCommerce",'woocommerce')],description:Object(o.__)("Display a grid of products with selected attributes.",'woocommerce'),supports:{align:["wide","full"],html:!1},example:{attributes:{isPreview:!0}},attributes:{attributes:{type:"array",default:[]},attrOperator:{type:"string",default:"any"},columns:{type:"number",default:s.l},editMode:{type:"boolean",default:!0},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},orderby:{type:"string",default:"date"},rows:{type:"number",default:s.n},alignButtons:{type:"boolean",default:!1},isPreview:{type:"boolean",default:!1}},deprecated:[{attributes:{attributes:{type:"array",default:[]},attrOperator:{type:"string",default:"any"},columns:{type:"number",default:s.l},editMode:{type:"boolean",default:!0},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},orderby:{type:"string",default:"date"},rows:{type:"number",default:s.n}},save:Object(Z.a)("woocommerce/products-by-attribute")}],edit:function(t){return Object(n.createElement)($,t)},save:function(){return null}})},93:function(t,e){!function(){t.exports=this.wp.date}()}});