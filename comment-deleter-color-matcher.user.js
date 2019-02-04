// ==UserScript==
// @name		 CommentDeleter ColorMatcher™
// @description     Make the comment Delete link match the other links on the comment
// @version  1
// @grant    none
// @include	 https://*stackoverflow.com/*
// @include	 https://*superuser.com/*
// @include	 https://*serverfault.com/*
// @include	 https://*stackapps.com/*
// @include	 https://*askubuntu.com/*
// @include	 https://*stackexchange.com/*
// ==/UserScript==

function with_jquery(f) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.textContent = "(" + f.toString() + ")(jQuery)";
  document.body.appendChild(script);
}

with_jquery(function(){
  StackExchange.ready(function(){
    $(".comment-delete").removeClass("fc-red-600");
  });
});
