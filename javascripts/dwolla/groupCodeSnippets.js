!function(e){"use strict";function t(e){var t=$($.map(e,function(e){return $(e).get()}));$(t).wrapAll('<div class="'+a+'">')}var a="code-snippet-group",n=["ruby","python","javascript","kotlin","php","raw"];e.namespace("slateWL.groupCodeSnippets",{init:function(){e.slateWL.groupCodeSnippets.groupAndLevelAllCodeSnippets()},groupAndLevelAllCodeSnippets:function(){var a=[],n=[];$(".cnt-two-col__content .js-code-snippet").each(function(s,l){var i=e.slateWL.groupCodeSnippets.getLanguage($(l).attr("class"));e.slateWL.groupCodeSnippets.hasGroupableLang(i)&&($.inArray(i,n)<0?(a.push(l),n.push(i)):(t(a),e.slateWL.groupCodeSnippets.levelTheGroup(a),a=[],n=[],a.push(l),n.push(i)))}),t(a),e.slateWL.groupCodeSnippets.levelTheGroup(a)},getLanguage:function(e){var t=/language-([A-z]+)/,a=t.exec(e);return a?a[1]:void 0},hasGroupableLang:function(e){return $.inArray(e,n)>=0?!0:!1},levelTheGroup:function(e){for(var t=e.length-1,a=t,n=0,s=0;t>=0;)s=$(".code-snippet__cnt",e[t]).outerHeight(),s>n&&(n=s),t-=1;for(;a>=0;)$(".code-snippet__cnt",e[a]).height(n),a-=1}}),$(e.slateWL.groupCodeSnippets.init)}(dwolla);