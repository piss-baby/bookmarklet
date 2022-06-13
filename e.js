function() {
    function q() {
        var a = document.createElement("div");
        a.setAttribute("class", r);
        document.body.appendChild(a);
        setTimeout(function() {
            document.body.removeChild(a)
        }, 100)
    }

    function l(a) {
        var b = a.offsetHeight;
        a = a.offsetWidth;
        return b > t && b < u && a > v && a < w
    }

    function x(a) {
        for (var b = 0; a;) b += a.offsetTop, a = a.offsetParent;
        a = b;
        return a >= m && a <= y + m
    }

    function n() {
        for (var a = document.getElementsByClassName(e), b = new RegExp("\\b" + e + "\\b"); 0 < a.length;) a[0].className = a[0].className.replace(b, "")
    }
    var t = 30,
        v = 30,
        u = 350,
        w = 350,
        e = "mw-harlem_shake_me",
        p = ["im_drunk", "im_baked", "im_trippin", "im_blown"],
        r = "mw-strobe_light",
        y = function() {
            var a = document.documentElement;
            return window.innerWidth ? window.innerHeight : a && !isNaN(a.clientHeight) ? a.clientHeight : 0
        }();
    var m = window.pageYOffset ? window.pageYOffset : Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    for (var f = document.getElementsByTagName("*"), h = null, c = 0; c < f.length; c++) {
        var d = f[c];
        if (l(d) && x(d)) {
            h = d;
            break
        }
    }
    if (null === d) console.warn("Could not find a node of the right size. Please try a different page.");
    else {
        (function() {
            var a = document.createElement("link");
            a.setAttribute("type", "text/css");
            a.setAttribute("rel", "stylesheet");
            a.setAttribute("href", "https://s3.amazonaws.com/moovweb-marketing/playground/harlem-shake-style.css");
            a.setAttribute("class", "mw_added_css");
            document.body.appendChild(a)
        })();
        (function() {
            var a = document.createElement("audio");
            a.setAttribute("class", "mw_added_css");
            a.src = "https://s3.amazonaws.com/moovweb-marketing/playground/harlem-shake.mp3";
            a.loop = !1;
            a.addEventListener("canplay", function() {
                setTimeout(function() {
                    h.className += " " + e + " im_first"
                }, 500);
                setTimeout(function() {
                    n();
                    q();
                    for (var b = 0; b < g.length; b++) g[b].className += " " + e + " " + p[Math.floor(Math.random() * p.length)]
                }, 15500)
            }, !0);
            a.addEventListener("ended", function() {
                n();
                for (var b = document.getElementsByClassName("mw_added_css"), k = 0; k < b.length; k++) document.body.removeChild(b[k])
            }, !0);
            a.innerHTML = " <p>If you are reading this, it is because your browser does not support the audio element. We recommend that you get a new browser.</p> <p>";
            document.body.appendChild(a);
            a.play()
        })();
        var g = [];
        for (c = 0; c < f.length; c++) d = f[c], l(d) && g.push(d)
    }
}();
