/**
 *
 */
(function() {
    "use strict";

    var isDebug = true;

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
    for(var i = 0; i <= 20; i++) {
        defferdObj.push($.get(url + i));
    }

    $.when.apply(null, defferdObj)
    .done(function() {
        var friends = [];
        var count = 0;

        logger("defferdObj.length:" + defferdObj.length);
        logger("arguments.length:" + arguments.length);

        Array.prototype.some.call(arguments, function(argument) {
            friends.push(...getFriends(argument[0]));
            return friends.length % 10 > 0; // continue;
        });
        logger("success: friends", friends);
    }).fail(function() {
        logger("failed");
    });

    function getUserId() {
        var myCharacterImg = document.getElementById("myCharacterImg");
        var src = myCharacterImg.getElementsByTagName("img")[0].src;
        var userId = src.split("/")[5];
        return userId;
    }

    function getFriends(data) {
        var friends = [];
        $(data).find(".article").each(function() {
            var dd = $(this).find("dd");
            logger($($(dd[0]).find("a")[0]).text() + ":" + $($(this).find(".memo")[0]).text());
            friends.push({
                name: $($(dd[0]).find("a")[0]).text(),
                userId: $($(dd[0]).find("a")[0]).attr("href").split("/")[3],
                characterId: $(dd[1]).text().replace(/： /, ""),
                registrationDate: $($(this).find(".txt_listeddate")[0]).text().replace(/登録日：/, ""),
                memo: $($(this).find(".memo")[0]).text()
            });
        });
        return friends;
    }

    function logger(str, obj) {
        if (isDebug) {
            console.log(str);
            if (typeof obj != "undefined") console.log(obj);
        }
    }

})();
