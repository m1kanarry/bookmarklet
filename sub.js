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

    var url = "http://hiroba.dqx.jp/sc/character/" + userId + "/friendlist/page/";
    var friendAll = getFriendAll();

    console.log("finished get friendAll");
    console.log(friendAll);

    function getUserId() {
        var myCharacterImg = document.getElementById("myCharacterImg");
        var src = myCharacterImg.getElementsByTagName("img")[0].src;
        var userId = src.split("/")[5];
        return userId;
    }

    function getFriendAll(friendAll = [], count = 0) {
        // if (typeof friends === "undefined") friends = [];
        // if (typeof count === "undefined") count = 0;

        if (count === 20) return friendAll;

        console.log(url + count);
        console.log(friendAll);

        $.get(url + count)
        .done(function(data) {
            var friends = getFriends($(data).find("box_charaInfo"));
            friendAll.push(...friends);
            console.log("success:" + count);
            if (friends.length === 10) {
                friends = getFriendAll(friendAll, ++count);
            } else {
                return friendAll;
            }
        }).fail(function() {
            console.log("failed:" + count);
            return friendAll;
        });
    }

    function getFriends(characterInfos) {
        console.log("characterInfos");
        console.log(characterInfos);
        var friends = [];
        Array.prototype.forEach.call(characterInfos, function(characterInfo) {
            console.log("☆");
            var dd = characterInfo.getElementsByTagName("dd");
            friends.push({
                name: dd[0].getElementsByTagName("a")[0],
                userId: dd[0].getElementsByTagName("a")[0].getAttribute("href").split("/")[3],
                characterId: dd[1].replace("： ", ""),
                registrationDate: characterInfo.getElementsByClassName("txt_listeddate")[0].replace("登録日：", ""),
                memo: characterInfo.getElementsByTagName("memo")[0]
            });
        });
        console.log(friends);
        return friends;
    }

})();
