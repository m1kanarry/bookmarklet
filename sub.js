/**
 *
 */
(function() {
  "use strict";

  var userId = getUserId();
  console.log(userId);

  var character = [];
  var friends = [];

  function getUserId() {
    var myCharacterImg = document.getElementById("myCharacterImg");
    var src = myCharacterImg.getElementsByTagName("img").src;
  }

})();

/**
http://hiroba.dqx.jp/sc/character/468908142389/friendlist/

http://hiroba.dqx.jp/sc/character/29573377729/friendlist/

*/