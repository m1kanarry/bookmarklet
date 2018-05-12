/**
 *
 */
(function() {
  "use strict";

  var userId = getUserId();
  var url = "http://hiroba.dqx.jp/sc/character/" + userId + "/friendlist/";

  var readData = $("#read").load(url, function(data)) {
    if (data == null) {
      $("#read").append(" の読み込みに失敗しました");
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