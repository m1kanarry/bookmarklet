/**
 *
 */
(function() {
    "use strict";

    if (window.location.href.search(/^http:\/\/hiroba\.dqx\.jp\//)) {
        alert("冒険者の広場にログインをしてから使用してください。");
        return;
    }

    var userId = getUserId();

    if (userId === null || userId === "") {
        alert("冒険者の広場にログインをしてから使用してください。");
        return;
    }

    var url = "/sc/character/" + userId + "/friendlist/page/";
    var friendAll = getFriends();
    console.log(friendAll);

    function getUserId() {
        var myCharacterImg = document.getElementById("myCharacterImg");
        var src = myCharacterImg.getElementsByTagName("img")[0].src;
        var userId = src.split("/")[5];
        return userId;
    }

    function getFriends(friends, count) {
        if (typeof friends === 'undefined') friends = [];
        if (typeof count === 'undefined') count = 0;

        if (count === 15) return friends;

        console.log(url + count);
        console.log(friends);

        $.get(url + count)
        .done(function(data) {
            if (data === null) {
                console.log("nodata:" + count);
            } else {
                friends.push(data);
                console.log("success:" + count);
                friends = getFriends(friends, ++count);
            }
        }).fail(function() {
            console.log("failed:" + count);
        });
        return friends;
    }

})();

/**
http://hiroba.dqx.jp/sc/character/468908142389/friendlist/

http://hiroba.dqx.jp/sc/character/29573377729/friendlist/

*/