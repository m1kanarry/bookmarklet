/**
 *
 */
(function() {
  "use strict";

  useJQuery();

  var userId = getUserId();
  var url = "http://hiroba.dqx.jp/sc/character/" + userId + "/friendlist/";

  var readData = "初期化";

  $("#read").load(url, function(data, status)) {
    if (status == "error") {
      console.log("error:" + url);
    } else {
      readData = data;
    }
  }

  conlose.log(readData);

  function getUserId() {
    var myCharacterImg = document.getElementById("myCharacterImg");
    var src = myCharacterImg.getElementsByTagName("img")[0].src;
    var userId = src.split("/")[5];
    return userId;
  }

  function useJQuery() {
    var script = document.createElement("script");
    script.src = "//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js";
    script.onload = function() {
      func(jQuery.noConflict(true));
    };
    document.body.appendChild(script);
  }

})();

/**
http://hiroba.dqx.jp/sc/character/468908142389/friendlist/

http://hiroba.dqx.jp/sc/character/29573377729/friendlist/

*/