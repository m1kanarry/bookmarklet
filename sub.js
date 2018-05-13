/**
 *
 */
(function() {
    "use strict";

    console.log(window.location.href);
    console.log(window.location.search);
    if (window.location.href.startsWith("http://hiroba.dqx.jp/")) {
        alert("冒険者の広場にログインをしてから使用してください。");
        return;
    }

    var userId = getUserId();
    console.log(userId);

    if (userId === null || userId === "") {
        alert("冒険者の広場にログインをしてから使用してください。");
        return;
    }

    var friendAll = [];
    friendAll.push(["☆"]);

    var flg = true;

    var success = function(data) {
        var friends = data;
        friendAll.push(friends);
        console.log("success:" + i);
    };

    var fail = function() {
        flg = false;
        console.log("failed:" + i);
    };

    var url = "/sc/character/" + userId + "/friendlist/page/";

    for (var i = 0; flg; i++) {
        $.get(url + i)
        .done(success(data))
        .fail(fail());
    }
    console.log(friendAll);

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