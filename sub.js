/**
 *
 */
(function() {
  "use strict";

  getUserId();

  var character = [];
  var friends = [];

  function getUserId() {
    var myCharacterImg = document.getElementById("myCharacterImg");
    var src = myCharacterImg.getElementsByName("img").src;

    console.log(src);
  }

})();

/**
http://hiroba.dqx.jp/sc/character/468908142389/friendlist/

http://hiroba.dqx.jp/sc/character/29573377729/friendlist/

*/