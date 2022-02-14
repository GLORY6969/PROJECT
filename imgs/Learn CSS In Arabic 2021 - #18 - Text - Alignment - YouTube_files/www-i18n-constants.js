(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var e=this||self;function f(a,c){a=a.split(".");var b=e;a[0]in b||"undefined"==typeof b.execScript||b.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===c?b[d]&&b[d]!==Object.prototype[d]?b=b[d]:b=b[d]={}:b[d]=c}
;var g={YEAR_FULL:"y",YEAR_FULL_WITH_ERA:"y G",YEAR_MONTH_ABBR:"MMM y",YEAR_MONTH_FULL:"MMMM y",YEAR_MONTH_SHORT:"MM/y",MONTH_DAY_ABBR:"MMM d",MONTH_DAY_FULL:"MMMM dd",MONTH_DAY_SHORT:"M/d",MONTH_DAY_MEDIUM:"MMMM d",MONTH_DAY_YEAR_MEDIUM:"MMM d, y",WEEKDAY_MONTH_DAY_MEDIUM:"EEE, MMM d",WEEKDAY_MONTH_DAY_YEAR_MEDIUM:"EEE, MMM d, y",DAY_ABBR:"d",MONTH_DAY_TIME_ZONE_SHORT:"MMM d, h:mm a zzzz"};
g={YEAR_FULL:"y",YEAR_FULL_WITH_ERA:"y G",YEAR_MONTH_ABBR:"MMM y",YEAR_MONTH_FULL:"MMMM y",YEAR_MONTH_SHORT:"MM\u200f/y",MONTH_DAY_ABBR:"d MMM",MONTH_DAY_FULL:"dd MMMM",MONTH_DAY_SHORT:"d/\u200fM",MONTH_DAY_MEDIUM:"d MMMM",MONTH_DAY_YEAR_MEDIUM:"d MMM y",WEEKDAY_MONTH_DAY_MEDIUM:"EEE\u060c d MMM",WEEKDAY_MONTH_DAY_YEAR_MEDIUM:"EEE\u060c d MMM y",DAY_ABBR:"d",MONTH_DAY_TIME_ZONE_SHORT:"d MMM, h:mm a zzzz"};var h={ERAS:["BC","AD"],ERANAMES:["Before Christ","Anno Domini"],NARROWMONTHS:"JFMAMJJASOND".split(""),STANDALONENARROWMONTHS:"JFMAMJJASOND".split(""),MONTHS:"January February March April May June July August September October November December".split(" "),STANDALONEMONTHS:"January February March April May June July August September October November December".split(" "),SHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONESHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
WEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),STANDALONEWEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),STANDALONESHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),NARROWWEEKDAYS:"SMTWTFS".split(""),STANDALONENARROWWEEKDAYS:"SMTWTFS".split(""),SHORTQUARTERS:["Q1","Q2","Q3","Q4"],QUARTERS:["1st quarter","2nd quarter","3rd quarter","4th quarter"],AMPMS:["AM","PM"],DATEFORMATS:["EEEE, MMMM d, y",
"MMMM d, y","MMM d, y","M/d/yy"],TIMEFORMATS:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],DATETIMEFORMATS:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],FIRSTDAYOFWEEK:6,WEEKENDRANGE:[5,6],FIRSTWEEKCUTOFFDAY:5};
h={ERAS:["\u0642.\u0645","\u0645"],ERANAMES:["\u0642\u0628\u0644 \u0627\u0644\u0645\u064a\u0644\u0627\u062f","\u0645\u064a\u0644\u0627\u062f\u064a"],NARROWMONTHS:"\u064a\u0641\u0645\u0623\u0648\u0646\u0644\u063a\u0633\u0643\u0628\u062f".split(""),STANDALONENARROWMONTHS:"\u064a\u0641\u0645\u0623\u0648\u0646\u0644\u063a\u0633\u0643\u0628\u062f".split(""),MONTHS:"\u064a\u0646\u0627\u064a\u0631 \u0641\u0628\u0631\u0627\u064a\u0631 \u0645\u0627\u0631\u0633 \u0623\u0628\u0631\u064a\u0644 \u0645\u0627\u064a\u0648 \u064a\u0648\u0646\u064a\u0648 \u064a\u0648\u0644\u064a\u0648 \u0623\u063a\u0633\u0637\u0633 \u0633\u0628\u062a\u0645\u0628\u0631 \u0623\u0643\u062a\u0648\u0628\u0631 \u0646\u0648\u0641\u0645\u0628\u0631 \u062f\u064a\u0633\u0645\u0628\u0631".split(" "),
STANDALONEMONTHS:"\u064a\u0646\u0627\u064a\u0631 \u0641\u0628\u0631\u0627\u064a\u0631 \u0645\u0627\u0631\u0633 \u0623\u0628\u0631\u064a\u0644 \u0645\u0627\u064a\u0648 \u064a\u0648\u0646\u064a\u0648 \u064a\u0648\u0644\u064a\u0648 \u0623\u063a\u0633\u0637\u0633 \u0633\u0628\u062a\u0645\u0628\u0631 \u0623\u0643\u062a\u0648\u0628\u0631 \u0646\u0648\u0641\u0645\u0628\u0631 \u062f\u064a\u0633\u0645\u0628\u0631".split(" "),SHORTMONTHS:"\u064a\u0646\u0627\u064a\u0631 \u0641\u0628\u0631\u0627\u064a\u0631 \u0645\u0627\u0631\u0633 \u0623\u0628\u0631\u064a\u0644 \u0645\u0627\u064a\u0648 \u064a\u0648\u0646\u064a\u0648 \u064a\u0648\u0644\u064a\u0648 \u0623\u063a\u0633\u0637\u0633 \u0633\u0628\u062a\u0645\u0628\u0631 \u0623\u0643\u062a\u0648\u0628\u0631 \u0646\u0648\u0641\u0645\u0628\u0631 \u062f\u064a\u0633\u0645\u0628\u0631".split(" "),
STANDALONESHORTMONTHS:"\u064a\u0646\u0627\u064a\u0631 \u0641\u0628\u0631\u0627\u064a\u0631 \u0645\u0627\u0631\u0633 \u0623\u0628\u0631\u064a\u0644 \u0645\u0627\u064a\u0648 \u064a\u0648\u0646\u064a\u0648 \u064a\u0648\u0644\u064a\u0648 \u0623\u063a\u0633\u0637\u0633 \u0633\u0628\u062a\u0645\u0628\u0631 \u0623\u0643\u062a\u0648\u0628\u0631 \u0646\u0648\u0641\u0645\u0628\u0631 \u062f\u064a\u0633\u0645\u0628\u0631".split(" "),WEEKDAYS:"\u0627\u0644\u0623\u062d\u062f \u0627\u0644\u0627\u062b\u0646\u064a\u0646 \u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621 \u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621 \u0627\u0644\u062e\u0645\u064a\u0633 \u0627\u0644\u062c\u0645\u0639\u0629 \u0627\u0644\u0633\u0628\u062a".split(" "),
STANDALONEWEEKDAYS:"\u0627\u0644\u0623\u062d\u062f \u0627\u0644\u0627\u062b\u0646\u064a\u0646 \u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621 \u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621 \u0627\u0644\u062e\u0645\u064a\u0633 \u0627\u0644\u062c\u0645\u0639\u0629 \u0627\u0644\u0633\u0628\u062a".split(" "),SHORTWEEKDAYS:"\u0627\u0644\u0623\u062d\u062f \u0627\u0644\u0627\u062b\u0646\u064a\u0646 \u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621 \u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621 \u0627\u0644\u062e\u0645\u064a\u0633 \u0627\u0644\u062c\u0645\u0639\u0629 \u0627\u0644\u0633\u0628\u062a".split(" "),
STANDALONESHORTWEEKDAYS:"\u0627\u0644\u0623\u062d\u062f \u0627\u0644\u0627\u062b\u0646\u064a\u0646 \u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621 \u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621 \u0627\u0644\u062e\u0645\u064a\u0633 \u0627\u0644\u062c\u0645\u0639\u0629 \u0627\u0644\u0633\u0628\u062a".split(" "),NARROWWEEKDAYS:"\u062d\u0646\u062b\u0631\u062e\u062c\u0633".split(""),STANDALONENARROWWEEKDAYS:"\u062d\u0646\u062b\u0631\u062e\u062c\u0633".split(""),SHORTQUARTERS:["\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0623\u0648\u0644",
"\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062b\u0627\u0646\u064a","\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062b\u0627\u0644\u062b","\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0631\u0627\u0628\u0639"],QUARTERS:["\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0623\u0648\u0644","\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062b\u0627\u0646\u064a","\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062b\u0627\u0644\u062b","\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0631\u0627\u0628\u0639"],AMPMS:["\u0635",
"\u0645"],DATEFORMATS:["EEEE\u060c d MMMM y","d MMMM y","dd\u200f/MM\u200f/y","d\u200f/M\u200f/y"],TIMEFORMATS:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],DATETIMEFORMATS:["{1} \u0641\u064a {0}","{1} \u0641\u064a {0}","{1}, {0}","{1}, {0}"],FIRSTDAYOFWEEK:5,WEEKENDRANGE:[4,5],FIRSTWEEKCUTOFFDAY:4};function k(a,c){if(void 0===c){c=a+"";var b=c.indexOf(".");c=Math.min(-1===b?0:c.length-b-1,3)}return 1==(a|0)&&0==c?"one":"other"}
k=function(a){return 0==a?"zero":1==a?"one":2==a?"two":3<=a%100&&10>=a%100?"few":11<=a%100&&99>=a%100?"many":"other"};f("YT_I18N_FORMATTING_GOOG_LOCALE","ar");f("YT_I18N_FORMATTING_DATE_TIME_PATTERNS",g);f("YT_I18N_FORMATTING_DATE_TIME_SYMBOLS",h);
f("YT_I18N_FORMATTING_RELATIVE_DATE_TIME_SYMBOLS",{DAY:{LONG:{R:{"-1":"\u0623\u0645\u0633","-2":"\u0623\u0648\u0644 \u0623\u0645\u0633",0:"\u0627\u0644\u064a\u0648\u0645",1:"\u063a\u062f\u064b\u0627",2:"\u0628\u0639\u062f \u0627\u0644\u063a\u062f"},P:"few{\u0642\u0628\u0644 # \u0623\u064a\u0627\u0645}many{\u0642\u0628\u0644 # \u064a\u0648\u0645\u064b\u0627}one{\u0642\u0628\u0644 \u064a\u0648\u0645 \u0648\u0627\u062d\u062f}other{\u0642\u0628\u0644 # \u064a\u0648\u0645}two{\u0642\u0628\u0644 \u064a\u0648\u0645\u064a\u0646}zero{\u0642\u0628\u0644 # \u064a\u0648\u0645}",F:"few{\u062e\u0644\u0627\u0644 # \u0623\u064a\u0627\u0645}many{\u062e\u0644\u0627\u0644 # \u064a\u0648\u0645\u064b\u0627}one{\u062e\u0644\u0627\u0644 \u064a\u0648\u0645 \u0648\u0627\u062d\u062f}other{\u062e\u0644\u0627\u0644 # \u064a\u0648\u0645}two{\u062e\u0644\u0627\u0644 \u064a\u0648\u0645\u064a\u0646}zero{\u062e\u0644\u0627\u0644 # \u064a\u0648\u0645}"}},
HOUR:{LONG:{R:{0:"\u0627\u0644\u0633\u0627\u0639\u0629 \u0627\u0644\u062d\u0627\u0644\u064a\u0629"},P:"few{\u0642\u0628\u0644 # \u0633\u0627\u0639\u0627\u062a}many{\u0642\u0628\u0644 # \u0633\u0627\u0639\u0629}one{\u0642\u0628\u0644 \u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629}other{\u0642\u0628\u0644 # \u0633\u0627\u0639\u0629}two{\u0642\u0628\u0644 \u0633\u0627\u0639\u062a\u064a\u0646}zero{\u0642\u0628\u0644 # \u0633\u0627\u0639\u0629}",F:"few{\u062e\u0644\u0627\u0644 # \u0633\u0627\u0639\u0627\u062a}many{\u062e\u0644\u0627\u0644 # \u0633\u0627\u0639\u0629}one{\u062e\u0644\u0627\u0644 \u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629}other{\u062e\u0644\u0627\u0644 # \u0633\u0627\u0639\u0629}two{\u062e\u0644\u0627\u0644 \u0633\u0627\u0639\u062a\u064a\u0646}zero{\u062e\u0644\u0627\u0644 # \u0633\u0627\u0639\u0629}"}},
MINUTE:{LONG:{R:{0:"\u0647\u0630\u0647 \u0627\u0644\u062f\u0642\u064a\u0642\u0629"},P:"few{\u0642\u0628\u0644 # \u062f\u0642\u0627\u0626\u0642}many{\u0642\u0628\u0644 # \u062f\u0642\u064a\u0642\u0629}one{\u0642\u0628\u0644 \u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629}other{\u0642\u0628\u0644 # \u062f\u0642\u064a\u0642\u0629}two{\u0642\u0628\u0644 \u062f\u0642\u064a\u0642\u062a\u064a\u0646}zero{\u0642\u0628\u0644 # \u062f\u0642\u064a\u0642\u0629}",F:"few{\u062e\u0644\u0627\u0644 # \u062f\u0642\u0627\u0626\u0642}many{\u062e\u0644\u0627\u0644 # \u062f\u0642\u064a\u0642\u0629}one{\u062e\u0644\u0627\u0644 \u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629}other{\u062e\u0644\u0627\u0644 # \u062f\u0642\u064a\u0642\u0629}two{\u062e\u0644\u0627\u0644 \u062f\u0642\u064a\u0642\u062a\u064a\u0646}zero{\u062e\u0644\u0627\u0644 # \u062f\u0642\u064a\u0642\u0629}"}},
MONTH:{LONG:{R:{"-1":"\u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u0645\u0627\u0636\u064a",0:"\u0647\u0630\u0627 \u0627\u0644\u0634\u0647\u0631",1:"\u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u0642\u0627\u062f\u0645"},P:"few{\u0642\u0628\u0644 # \u0623\u0634\u0647\u0631}many{\u0642\u0628\u0644 # \u0634\u0647\u0631\u064b\u0627}one{\u0642\u0628\u0644 \u0634\u0647\u0631 \u0648\u0627\u062d\u062f}other{\u0642\u0628\u0644 # \u0634\u0647\u0631}two{\u0642\u0628\u0644 \u0634\u0647\u0631\u064a\u0646}zero{\u0642\u0628\u0644 # \u0634\u0647\u0631}",
F:"few{\u062e\u0644\u0627\u0644 # \u0623\u0634\u0647\u0631}many{\u062e\u0644\u0627\u0644 # \u0634\u0647\u0631\u064b\u0627}one{\u062e\u0644\u0627\u0644 \u0634\u0647\u0631 \u0648\u0627\u062d\u062f}other{\u062e\u0644\u0627\u0644 # \u0634\u0647\u0631}two{\u062e\u0644\u0627\u0644 \u0634\u0647\u0631\u064a\u0646}zero{\u062e\u0644\u0627\u0644 # \u0634\u0647\u0631}"},SHORT:{R:{"-1":"\u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u0645\u0627\u0636\u064a",0:"\u0647\u0630\u0627 \u0627\u0644\u0634\u0647\u0631",1:"\u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u0642\u0627\u062f\u0645"},
P:"few{\u062e\u0644\u0627\u0644 # \u0623\u0634\u0647\u0631}many{\u0642\u0628\u0644 # \u0634\u0647\u0631\u064b\u0627}one{\u0642\u0628\u0644 \u0634\u0647\u0631 \u0648\u0627\u062d\u062f}other{\u0642\u0628\u0644 # \u0634\u0647\u0631}two{\u0642\u0628\u0644 \u0634\u0647\u0631\u064a\u0646}zero{\u0642\u0628\u0644 # \u0634\u0647\u0631}",F:"few{\u062e\u0644\u0627\u0644 # \u0623\u0634\u0647\u0631}many{\u062e\u0644\u0627\u0644 # \u0634\u0647\u0631\u064b\u0627}one{\u062e\u0644\u0627\u0644 \u0634\u0647\u0631 \u0648\u0627\u062d\u062f}other{\u062e\u0644\u0627\u0644 # \u0634\u0647\u0631}two{\u062e\u0644\u0627\u0644 \u0634\u0647\u0631\u064a\u0646}zero{\u062e\u0644\u0627\u0644 # \u0634\u0647\u0631}"},
NARROW:{R:{"-1":"\u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u0645\u0627\u0636\u064a",0:"\u0647\u0630\u0627 \u0627\u0644\u0634\u0647\u0631",1:"\u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u0642\u0627\u062f\u0645"},P:"few{\u0642\u0628\u0644 # \u0623\u0634\u0647\u0631}many{\u0642\u0628\u0644 # \u0634\u0647\u0631\u064b\u0627}one{\u0642\u0628\u0644 \u0634\u0647\u0631 \u0648\u0627\u062d\u062f}other{\u0642\u0628\u0644 # \u0634\u0647\u0631}two{\u0642\u0628\u0644 \u0634\u0647\u0631\u064a\u0646}zero{\u0642\u0628\u0644 # \u0634\u0647\u0631}",
F:"few{\u062e\u0644\u0627\u0644 # \u0623\u0634\u0647\u0631}many{\u062e\u0644\u0627\u0644 # \u0634\u0647\u0631\u064b\u0627}one{\u062e\u0644\u0627\u0644 \u0634\u0647\u0631 \u0648\u0627\u062d\u062f}other{\u062e\u0644\u0627\u0644 # \u0634\u0647\u0631}two{\u062e\u0644\u0627\u0644 \u0634\u0647\u0631\u064a\u0646}zero{\u062e\u0644\u0627\u0644 # \u0634\u0647\u0631}"}},QUARTER:{LONG:{R:{"-1":"\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0623\u062e\u064a\u0631",0:"\u0647\u0630\u0627 \u0627\u0644\u0631\u0628\u0639",
1:"\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0642\u0627\u062f\u0645"},P:"few{\u0642\u0628\u0644 # \u0623\u0631\u0628\u0627\u0639 \u0633\u0646\u0629}many{\u0642\u0628\u0644 # \u0631\u0628\u0639 \u0633\u0646\u0629}one{\u0642\u0628\u0644 \u0631\u0628\u0639 \u0633\u0646\u0629 \u0648\u0627\u062d\u062f}other{\u0642\u0628\u0644 # \u0631\u0628\u0639 \u0633\u0646\u0629}two{\u0642\u0628\u0644 \u0631\u0628\u0639\u064a \u0633\u0646\u0629}zero{\u0642\u0628\u0644 # \u0631\u0628\u0639 \u0633\u0646\u0629}",F:"few{\u062e\u0644\u0627\u0644 # \u0623\u0631\u0628\u0627\u0639 \u0633\u0646\u0629}many{\u062e\u0644\u0627\u0644 # \u0631\u0628\u0639 \u0633\u0646\u0629}one{\u062e\u0644\u0627\u0644 \u0631\u0628\u0639 \u0633\u0646\u0629 \u0648\u0627\u062d\u062f}other{\u062e\u0644\u0627\u0644 # \u0631\u0628\u0639 \u0633\u0646\u0629}two{\u062e\u0644\u0627\u0644 \u0631\u0628\u0639\u064a \u0633\u0646\u0629}zero{\u062e\u0644\u0627\u0644 # \u0631\u0628\u0639 \u0633\u0646\u0629}"}},
SECOND:{LONG:{R:{0:"\u0627\u0644\u0622\u0646"},P:"few{\u0642\u0628\u0644 # \u062b\u0648\u0627\u0646\u0650}many{\u0642\u0628\u0644 # \u062b\u0627\u0646\u064a\u0629}one{\u0642\u0628\u0644 \u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629}other{\u0642\u0628\u0644 # \u062b\u0627\u0646\u064a\u0629}two{\u0642\u0628\u0644 \u062b\u0627\u0646\u064a\u062a\u064a\u0646}zero{\u0642\u0628\u0644 # \u062b\u0627\u0646\u064a\u0629}",F:"few{\u062e\u0644\u0627\u0644 # \u062b\u0648\u0627\u0646\u064d}many{\u062e\u0644\u0627\u0644 # \u062b\u0627\u0646\u064a\u0629}one{\u062e\u0644\u0627\u0644 \u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629}other{\u062e\u0644\u0627\u0644 # \u062b\u0627\u0646\u064a\u0629}two{\u062e\u0644\u0627\u0644 \u062b\u0627\u0646\u064a\u062a\u064a\u0646}zero{\u062e\u0644\u0627\u0644 # \u062b\u0627\u0646\u064a\u0629}"},
SHORT:{R:{0:"\u0627\u0644\u0622\u0646"},P:"few{\u0642\u0628\u0644 # \u062b\u0648\u0627\u0646\u064d}many{\u0642\u0628\u0644 # \u062b\u0627\u0646\u064a\u0629}one{\u0642\u0628\u0644 \u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629}other{\u0642\u0628\u0644 # \u062b\u0627\u0646\u064a\u0629}two{\u0642\u0628\u0644 \u062b\u0627\u0646\u064a\u062a\u064a\u0646}zero{\u0642\u0628\u0644 # \u062b\u0627\u0646\u064a\u0629}",F:"few{\u062e\u0644\u0627\u0644 # \u062b\u0648\u0627\u0646\u064d}many{\u062e\u0644\u0627\u0644 # \u062b\u0627\u0646\u064a\u0629}one{\u062e\u0644\u0627\u0644 \u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629}other{\u062e\u0644\u0627\u0644 # \u062b\u0627\u0646\u064a\u0629}two{\u062e\u0644\u0627\u0644 \u062b\u0627\u0646\u064a\u062a\u064a\u0646}zero{\u062e\u0644\u0627\u0644 # \u062b\u0627\u0646\u064a\u0629}"}},
WEEK:{LONG:{R:{"-1":"\u0627\u0644\u0623\u0633\u0628\u0648\u0639 \u0627\u0644\u0645\u0627\u0636\u064a",0:"\u0647\u0630\u0627 \u0627\u0644\u0623\u0633\u0628\u0648\u0639",1:"\u0627\u0644\u0623\u0633\u0628\u0648\u0639 \u0627\u0644\u0642\u0627\u062f\u0645"},P:"few{\u0642\u0628\u0644 # \u0623\u0633\u0627\u0628\u064a\u0639}many{\u0642\u0628\u0644 # \u0623\u0633\u0628\u0648\u0639\u064b\u0627}one{\u0642\u0628\u0644 \u0623\u0633\u0628\u0648\u0639 \u0648\u0627\u062d\u062f}other{\u0642\u0628\u0644 # \u0623\u0633\u0628\u0648\u0639}two{\u0642\u0628\u0644 \u0623\u0633\u0628\u0648\u0639\u064a\u0646}zero{\u0642\u0628\u0644 # \u0623\u0633\u0628\u0648\u0639}",
F:"few{\u062e\u0644\u0627\u0644 # \u0623\u0633\u0627\u0628\u064a\u0639}many{\u062e\u0644\u0627\u0644 # \u0623\u0633\u0628\u0648\u0639\u064b\u0627}one{\u062e\u0644\u0627\u0644 \u0623\u0633\u0628\u0648\u0639 \u0648\u0627\u062d\u062f}other{\u062e\u0644\u0627\u0644 # \u0623\u0633\u0628\u0648\u0639}two{\u062e\u0644\u0627\u0644 \u0623\u0633\u0628\u0648\u0639\u064a\u0646}zero{\u062e\u0644\u0627\u0644 # \u0623\u0633\u0628\u0648\u0639}"},SHORT:{R:{"-1":"\u0627\u0644\u0623\u0633\u0628\u0648\u0639 \u0627\u0644\u0645\u0627\u0636\u064a",
0:"\u0647\u0630\u0627 \u0627\u0644\u0623\u0633\u0628\u0648\u0639",1:"\u0627\u0644\u0623\u0633\u0628\u0648\u0639 \u0627\u0644\u0642\u0627\u062f\u0645"},P:"few{\u0642\u0628\u0644 # \u0623\u0633\u0627\u0628\u064a\u0639}many{\u0642\u0628\u0644 # \u0623\u0633\u0628\u0648\u0639\u064b\u0627}one{\u0642\u0628\u0644 \u0623\u0633\u0628\u0648\u0639 \u0648\u0627\u062d\u062f}other{\u0642\u0628\u0644 # \u0623\u0633\u0628\u0648\u0639}two{\u0642\u0628\u0644 \u0623\u0633\u0628\u0648\u0639\u064a\u0646}zero{\u0642\u0628\u0644 # \u0623\u0633\u0628\u0648\u0639}",
F:"few{\u062e\u0644\u0627\u0644 # \u0623\u0633\u0627\u0628\u064a\u0639}many{\u062e\u0644\u0627\u0644 # \u0623\u0633\u0628\u0648\u0639\u064b\u0627}one{\u062e\u0644\u0627\u0644 \u0623\u0633\u0628\u0648\u0639 \u0648\u0627\u062d\u062f}other{\u062e\u0644\u0627\u0644 # \u0623\u0633\u0628\u0648\u0639}two{\u062e\u0644\u0627\u0644 # \u0623\u0633\u0628\u0648\u0639\u064a\u0646}zero{\u062e\u0644\u0627\u0644 # \u0623\u0633\u0628\u0648\u0639}"},NARROW:{R:{"-1":"\u0627\u0644\u0623\u0633\u0628\u0648\u0639 \u0627\u0644\u0645\u0627\u0636\u064a",
0:"\u0647\u0630\u0627 \u0627\u0644\u0623\u0633\u0628\u0648\u0639",1:"\u0627\u0644\u0623\u0633\u0628\u0648\u0639 \u0627\u0644\u0642\u0627\u062f\u0645"},P:"few{\u0642\u0628\u0644 # \u0623\u0633\u0627\u0628\u064a\u0639}many{\u0642\u0628\u0644 # \u0623\u0633\u0628\u0648\u0639\u064b\u0627}one{\u0642\u0628\u0644 \u0623\u0633\u0628\u0648\u0639 \u0648\u0627\u062d\u062f}other{\u0642\u0628\u0644 # \u0623\u0633\u0628\u0648\u0639}two{\u0642\u0628\u0644 \u0623\u0633\u0628\u0648\u0639\u064a\u0646}zero{\u0642\u0628\u0644 # \u0623\u0633\u0628\u0648\u0639}",
F:"few{\u062e\u0644\u0627\u0644 # \u0623\u0633\u0627\u0628\u064a\u0639}many{\u062e\u0644\u0627\u0644 # \u0623\u0633\u0628\u0648\u0639\u064b\u0627}one{\u062e\u0644\u0627\u0644 \u0623\u0633\u0628\u0648\u0639 \u0648\u0627\u062d\u062f}other{\u062e\u0644\u0627\u0644 # \u0623\u0633\u0628\u0648\u0639}two{\u062e\u0644\u0627\u0644 \u0623\u0633\u0628\u0648\u0639\u064a\u0646}zero{\u062e\u0644\u0627\u0644 # \u0623\u0633\u0628\u0648\u0639}"}},YEAR:{LONG:{R:{"-1":"\u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u0645\u0627\u0636\u064a\u0629",
0:"\u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u062d\u0627\u0644\u064a\u0629",1:"\u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u0642\u0627\u062f\u0645\u0629"},P:"few{\u0642\u0628\u0644 # \u0633\u0646\u0648\u0627\u062a}many{\u0642\u0628\u0644 # \u0633\u0646\u0629}one{\u0642\u0628\u0644 \u0633\u0646\u0629 \u0648\u0627\u062d\u062f\u0629}other{\u0642\u0628\u0644 # \u0633\u0646\u0629}two{\u0642\u0628\u0644 \u0633\u0646\u062a\u064a\u0646}zero{\u0642\u0628\u0644 # \u0633\u0646\u0629}",F:"few{\u062e\u0644\u0627\u0644 # \u0633\u0646\u0648\u0627\u062a}many{\u062e\u0644\u0627\u0644 # \u0633\u0646\u0629}one{\u062e\u0644\u0627\u0644 \u0633\u0646\u0629 \u0648\u0627\u062d\u062f\u0629}other{\u062e\u0644\u0627\u0644 # \u0633\u0646\u0629}two{\u062e\u0644\u0627\u0644 \u0633\u0646\u062a\u064a\u0646}zero{\u062e\u0644\u0627\u0644 # \u0633\u0646\u0629}"}}});
f("YT_I18N_FORMATTING_PLURAL_RULES_SELECT",k);}).call(this);
