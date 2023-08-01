;/*FB_PKG_DELIM*/

__d("useAfterPaint",["cancelAnimationFrame","react","requestAnimationFrame"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useEffect;function a(a){h(function(){var b=null,d=c("requestAnimationFrame")(function(){d=c("requestAnimationFrame")(function(){b=a()})});return function(){c("cancelAnimationFrame")(d),b&&b()}},[a])}g["default"]=a}),98);