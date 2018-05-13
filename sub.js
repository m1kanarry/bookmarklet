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
    var defferdObj = [];
    console.log($(".last a").attr("href"));
    for(var i = 0; $(".last a").attr("href").endsWith(i); i++) {
        defferdObj.push($.get(url + i));
        console.log("obj:" + i);

        if (i > 20) return;
    }


    $.when(null, defferdObj)
    .done(function() {
        var friends = [];
        var count = 0;
        Array.prototype.forEach.call(arguments, function(argument) {
            friends.push(getFriends(argument));
            console.log("pushFriends:" + count++);
        });
        console.log("success");
        console.log(friends);
    }).fail(function() {
        console.log("failed");
    });

    function getUserId() {
        var myCharacterImg = document.getElementById("myCharacterImg");
        var src = myCharacterImg.getElementsByTagName("img")[0].src;
        var userId = src.split("/")[5];
        return userId;
    }

    function getFriends(data) {
        var characterInfos = $(data).find("box_charaInfo");
        console.log("characterInfos");
        console.log(characterInfos);
        var friends = [];
        Array.prototype.forEach.call(characterInfos, function(characterInfo) {
            console.log("☆");
            var dd = characterInfo.find("dd");
            friends.push({
                name: dd[0].find("a")[0],
                userId: dd[0].find("a")[0].attr("href").split("/")[3],
                characterId: dd[1].replace("： ", ""),
                registrationDate: characterInfo.find(".txt_listeddate")[0].replace("登録日：", ""),
                memo: characterInfo.find(".memo")[0]
            });
        });
        console.log(friends);
        return friends;
    }

})();
