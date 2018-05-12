/**
 *
 */
(function() {
    "use strict";

    var i = 0;
    var userId = getUserId();

    var url = "http://hiroba.dqx.jp/sc/character/" + userId + "/friendlist/";

    var friends = getFriends();
    console.log(friends);

    function getUserId() {
        var myCharacterImg = document.getElementById("myCharacterImg");
        var src = myCharacterImg.getElementsByTagName("img")[0].src;
        var userId = src.split("/")[5];
        return userId;
    }

    function getFriends() {
        var friends;
        $("#read").load(url, function(data, status) {
            if (status == "success") {
                console.log("success:" + url);
                friends = data;
            } else {
                console.log("error:" + url);
            }
            console.log("?:" + url);
        });
        return friends;
    }

})();

/**
http://hiroba.dqx.jp/sc/character/468908142389/friendlist/

http://hiroba.dqx.jp/sc/character/29573377729/friendlist/

*/