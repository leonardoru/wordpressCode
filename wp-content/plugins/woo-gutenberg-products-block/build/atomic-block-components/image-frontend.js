(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[5,8],{188:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(e,t){var r=[];return Object.keys(e).forEach((function(n){if(void 0!==t[n])switch(e[n].type){case"boolean":r[n]="false"!==t[n]&&!1!==t[n];break;case"number":r[n]=parseInt(t[n],10);break;case"array":case"object":r[n]=JSON.parse(t[n]);break;default:r[n]=t[n]}else r[n]=e[n].default})),r}},292:function(e,t,r){"use strict";var n=r(11),a=r.n(n),c=r(188);t.a=function(e){return function(t){return function(r){var n=Object(c.a)(e,r);return React.createElement(t,a()({},r,n))}}}},293:function(e,t){},294:function(e,t,r){"use strict";r.r(t);var n=r(7),a=r.n(n),c=(r(3),r(1)),o=r(5),l=r.n(o),u=r(36),s=r(73),i=r(198);r(293);t.default=Object(i.withProductDataContext)((function(e){var t=e.className,r=e.align,n=Object(s.useInnerBlockLayoutContext)().parentClassName,o=Object(s.useProductDataContext)().product;if(!o.id||!o.on_sale)return null;var i="string"==typeof r?"wc-block-components-product-sale-badge--align-".concat(r):"";return React.createElement("div",{className:l()("wc-block-components-product-sale-badge",t,i,a()({},"".concat(n,"__product-onsale"),n))},React.createElement(u.a,{label:Object(c.__)("Sale","woo-gutenberg-products-block"),screenReaderLabel:Object(c.__)("Product on sale","woo-gutenberg-products-block")}))}))},295:function(e,t){},317:function(e,t,r){"use strict";r.r(t);var n=r(292),a=r(7),c=r.n(a),o=r(10),l=r.n(o),u=(r(3),r(0)),s=r(5),i=r.n(s),p=r(9),d=r(73),b=r(198),f=r(8),m=r(294);r(295);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=function(){return React.createElement("img",{src:p.s,alt:"",width:500,height:500})},j=function(e){var t=e.image,r=e.onLoad,n=e.loaded,a=e.showFullSize,c=t||{},o=c.thumbnail,l=c.src,u=c.srcset,s=c.sizes,i={alt:c.alt,onLoad:r,hidden:!n,src:o};return a&&(i=O(O({},i),{},{src:l,srcSet:u,sizes:s})),React.createElement(React.Fragment,null,React.createElement("img",i),!n&&React.createElement(w,null))},y=Object(b.withProductDataContext)((function(e){var t=e.className,r=e.imageSizing,n=void 0===r?"full-size":r,a=e.productLink,o=void 0===a||a,s=e.showSaleBadge,p=e.saleBadgeAlign,b=void 0===p?"right":p,g=Object(d.useInnerBlockLayoutContext)().parentClassName,O=Object(d.useProductDataContext)().product,y=Object(u.useState)(!1),v=l()(y,2),h=v[0],E=v[1];if(!O.id)return React.createElement("div",{className:i()(t,"wc-block-components-product-image","wc-block-components-product-image--placeholder",c()({},"".concat(g,"__product-image"),g))},React.createElement(w,null));var R=Object(f.isEmpty)(O.images)?null:O.images[0];return React.createElement("div",{className:i()(t,"wc-block-components-product-image",c()({},"".concat(g,"__product-image"),g))},o?React.createElement("a",{href:O.permalink,rel:"nofollow"},!!s&&React.createElement(m.default,{align:b,product:O}),React.createElement(j,{image:R,onLoad:function(){return E(!0)},loaded:h,showFullSize:"cropped"!==n})):React.createElement(React.Fragment,null,!!s&&React.createElement(m.default,{align:b,product:O}),React.createElement(j,{image:R,onLoad:function(){return E(!0)},loaded:h,showFullSize:"cropped"!==n})))})),v={productLink:{type:"boolean",default:!0},showSaleBadge:{type:"boolean",default:!0},saleBadgeAlign:{type:"string",default:"right"},imageSizing:{type:"string",default:"full-size"},productId:{type:"number",default:0}};t.default=Object(n.a)(v)(y)},36:function(e,t,r){"use strict";var n=r(7),a=r.n(n),c=(r(3),r(2)),o=r(5),l=r.n(o);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t,r=e.label,n=e.screenReaderLabel,a=e.wrapperElement,o=e.wrapperProps,u=void 0===o?{}:o,i=null!=r,p=null!=n;return!i&&p?(t=a||"span",u=s(s({},u),{},{className:l()(u.className,"screen-reader-text")}),React.createElement(t,u,n)):(t=a||c.Fragment,i&&p&&r!==n?React.createElement(t,u,React.createElement("span",{"aria-hidden":"true"},r),React.createElement("span",{className:"screen-reader-text"},n)):React.createElement(t,u,r))}}}]);