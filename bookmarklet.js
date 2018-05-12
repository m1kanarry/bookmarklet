(function(d) {
  load("//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.1/jquery.min.js");
  load("//m1kanarry.github.io/bookmarklet/sub.js?" + (new Date).getTime());

  function load(t) {
    var s = d.createElement("script");
    s.type = "application/javascript";
    s.charset= "UTF-8";
    s.src = t;
    d.getElementsByTagName("head")[0].appendChild(s);
    console.log("load:" + t);
  }
})(document);
