(function () {
    var previewForm = document.getElementById("previewform");

    var url = location.search
        .substring(1)
        .replace(/\/\/github\.com/, "//raw.githubusercontent.com")
        .replace(/\/blob\//, "/");

    var replaceAssets = function () {
        var frame,
            a,
            link,
            links = [],
            script,
            scripts = [],
            i,
            href,
            src;

        if (document.querySelectorAll("frameset").length) return;

        frame = document.querySelectorAll("iframe[src],frame[src]");

        for (i = 0; i < frame.length; ++i) {
            src = frame[i].src;

            if (src.indexOf("//raw.githubusercontent.com") > 0 || src.indexOf("//bitbucket.org") > 0) {
                frame[i].src = "//" + location.hostname + location.pathname + "?" + src;
            }
        }

        // Links
        a = document.querySelectorAll("a[href]");
        for (i = 0; i < a.length; ++i) {
            href = a[i].href;

            if (href.indexOf("#") > 0) {
                a[i].href = "//" + location.hostname + location.pathname + location.search + "#" + a[i].hash.substring(1); //Then rewrite URL with support for empty anchor
            } else if ((href.indexOf("//raw.githubusercontent.com") > 0 || href.indexOf("//bitbucket.org") > 0) && (href.indexOf(".html") > 0 || href.indexOf(".htm") > 0)) {
                a[i].href = "//" + location.hostname + location.pathname + "?" + href;
            }
        }

        // Stylesheets
        link = document.querySelectorAll("link[rel=stylesheet]");

        for (i = 0; i < link.length; ++i) {
            href = link[i].href;

            if (href.indexOf("//raw.githubusercontent.com") > 0 || href.indexOf("//bitbucket.org") > 0) {
                links.push(fetchProxy(href, null, 0));
            }
        }

        Promise.all(links).then(function (res) {
            for (i = 0; i < res.length; ++i) {
                loadCSS(res[i]);
            }
        });

        // Scripts
        script = document.querySelectorAll('script[type="text/htmlpreview"]');

        for (i = 0; i < script.length; ++i) {
            src = script[i].src;
            if (src.indexOf("//raw.githubusercontent.com") > 0 || src.indexOf("//bitbucket.org") > 0) {
                scripts.push(fetchProxy(src, null, 0));
            } else {
                script[i].removeAttribute("type");
                scripts.push(script[i].innerHTML);
            }
        }

        Promise.all(scripts).then(function (res) {
            for (i = 0; i < res.length; ++i) {
                loadJS(res[i]);
            }

            document.dispatchEvent(
                new Event("DOMContentLoaded", {
                    bubbles: true,
                    cancelable: true,
                })
            );
        });
    };

    var loadHTML = function (data) {
        if (data) {
            data = data.replace(/<head([^>]*)>/i, '<head$1><base href="' + url + '">').replace(/<script(\s*src=["'][^"']*["'])?(\s*type=["'](text|application)\/javascript["'])?/gi, '<script type="text/htmlpreview"$1'); //Add <base> just after <head> and replace <script type="text/javascript"> with <script type="text/htmlpreview">

            setTimeout(function () {
                document.open();
                document.write(data);
                document.close();
                replaceAssets();
            }, 10);
        }
    };

    var loadCSS = function (data) {
        if (data) {
            var style = document.createElement("style");

            style.innerHTML = data;
            document.head.appendChild(style);
        }
    };

    var loadJS = function (data) {
        if (data) {
            var script = document.createElement("script");

            script.innerHTML = data;
            document.body.appendChild(script);
        }
    };

    var fetchProxy = function (url, options, i) {
        var proxy = ["", "https://api.codetabs.com/v1/proxy/?quest="];

        return fetch(proxy[i] + url, options)
            .then(function (res) {
                if (!res.ok) throw new Error("Cannot load " + url + ": " + res.status + " " + res.statusText);
                return res.text();
            })
            .catch(function (error) {
                if (i === proxy.length - 1) throw error;
                return fetchProxy(url, options, i + 1);
            });
    };

    if (url && url.indexOf(location.hostname) < 0)
        fetchProxy(url, null, 0)
            .then(loadHTML)
            .catch(function (error) {
                console.error(error);
                previewForm.style.display = "block";
                previewForm.innerText = error;
            });
    else previewForm.style.display = "block";
})();
