/**
 *
 */
(function() {
  "use strict";

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

})();

/**
http://hiroba.dqx.jp/sc/character/468908142389/friendlist/

http://hiroba.dqx.jp/sc/character/29573377729/friendlist/

*/