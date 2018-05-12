/**
 *
 */
(function() {
    "use strict";

    if (window.location.href.search(/^http:\/\/hiroba\.dqx\.jp\//) < 0) {
        alert("冒険者の広場にログインしてください。");
        return;
    }

    var userId = getUserId();
    var url = "/sc/character/" + userId + "/friendlist/page/";
    var friends = [];

    friends.push(["☆"]);

    for (var i = 0; true; i++) {
        $.get(url + i)
        .done(function(data) {
            console("success:" + i);
            console(data);
        })
        .fail(function() {
            console("error:" + i);
            break;
        });
    }
    console.log(friends);

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