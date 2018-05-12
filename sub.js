/**
 *
 */
(function() {
    "use strict";

    console.log("!!!");

    var i = 0;
    var userId = getUserId();

    console.log(i++);

    var url = "http://hiroba.dqx.jp/sc/character/" + userId + "/friendlist/";

    var readData = "初期化";

    console.log(i++);
    $("#read").load(url, function(data, status) {
        if (status == "success") {
            console.log("success:" + url);
            readData = data;
        } else {
            console.log("error:" + url);
        }
    });

    console.log(i++);

    console.log(readData);

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