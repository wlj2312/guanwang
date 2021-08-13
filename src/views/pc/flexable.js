!function(win, lib) {
        var timer,
            doc     = win.document,
            docElem = doc.documentElement,

            vpMeta   = doc.querySelector('meta[name="viewport"]'),
            flexMeta = doc.querySelector('meta[name="flexible"]'),

            dpr   = 0,
            scale = 0,

            flexible = lib.flexible || (lib.flexible = {});

        // ������ viewport meta
        if (vpMeta) {

            // console.warn("���������е�meta��ǩ���������ű���");
            var initial = vpMeta.getAttribute("content").match(/initial\-scale=([\d\.]+)/);

            if (initial) {
                scale = parseFloat(initial[1]); // �����õ� initialScale
                dpr = parseInt(1 / scale);      // �豸���ر� devicePixelRatio
            }

        }
        // ������ flexible Meta
        else if (flexMeta) {
            var flexMetaContent = flexMeta.getAttribute("content");
            if (flexMetaContent) {

                var initial = flexMetaContent.match(/initial\-dpr=([\d\.]+)/),
                    maximum = flexMetaContent.match(/maximum\-dpr=([\d\.]+)/);

                if (initial) {
                    dpr = parseFloat(initial[1]);
                    scale = parseFloat((1 / dpr).toFixed(2));
                }

                if (maximum) {
                    dpr = parseFloat(maximum[1]);
                    scale = parseFloat((1 / dpr).toFixed(2));
                }
            }
        }

        // viewport �� flexible
        // meta ��δ����
        if (!dpr && !scale) {
            var u = (win.navigator.appVersion.match(/android/gi), win.navigator.appVersion.match(/iphone/gi)),
                _dpr = win.devicePixelRatio;

            // ���������ƺ��ǽ����� Android �豸������Ϊ 1 ��
            dpr = u ? ( (_dpr >= 3 && (!dpr || dpr >= 3))
                    ? 3
                    : (_dpr >= 2 && (!dpr || dpr >= 2))
                        ? 2
                        : 1
                )
                : 1;

            scale = 1 / dpr;
        }

        docElem.setAttribute("data-dpr", dpr);

        // ���� viewport meta
        if (!vpMeta) {
            vpMeta = doc.createElement("meta");

            vpMeta.setAttribute("name", "viewport");
            vpMeta.setAttribute("content",
                "initial-scale=" + scale + ", maximum-scale=" + scale + ", minimum-scale=" + scale + ", user-scalable=no");

            if (docElem.firstElementChild) {
                docElem.firstElementChild.appendChild(vpMeta)
            } else {
                var div = doc.createElement("div");
                div.appendChild(vpMeta);
                doc.write(div.innerHTML);
            }
        }

        function setFontSize() {
            var winWidth = docElem.getBoundingClientRect().width;

            if (winWidth / dpr > 750) {
                (winWidth = 750 * dpr);
            }

            // ���ڵ� fontSize ���ݿ�Ⱦ���
            //var baseSize = winWidth / 10;
            var baseSize = winWidth / 750 * 100;

            docElem.style.fontSize = baseSize + "px";
            flexible.rem = win.rem = baseSize;
        }

        // ��������ʱ����
        win.addEventListener("resize", function() {
            clearTimeout(timer);
            timer = setTimeout(setFontSize, 1);
        }, false);


        // ��һ�������Լ��ӵ�
        // orientationchange ʱҲ��Ҫ�����°�
        win.addEventListener("orientationchange", function() {
            clearTimeout(timer);
            timer = setTimeout(setFontSize, 1);
        }, false);


        // pageshow
        // keyword: ���� �������
        win.addEventListener("pageshow", function(e) {
            if (e.persisted) {
                clearTimeout(timer);
                timer = setTimeout(setFontSize, 1);
            }
        }, false);

        // ���û�׼����
        if ("complete" === doc.readyState) {
            doc.body.style.fontSize = 12 * dpr + "px";
        } else {
            doc.addEventListener("DOMContentLoaded", function() {
                doc.body.style.fontSize = 12 * dpr + "px";
            }, false);
        }

        setFontSize();

        flexible.dpr = win.dpr = dpr;

        flexible.refreshRem = setFontSize;

        flexible.rem2px = function(d) {
            var c = parseFloat(d) * this.rem;
            if ("string" == typeof d && d.match(/rem$/)) {
                c += "px";
            }
            return c;
        };

        flexible.px2rem = function(d) {
            var c = parseFloat(d) / this.rem;

            if ("string" == typeof d && d.match(/px$/)) {
                c += "rem";
            }
            return c;
        }
    }(window, window.lib || (window.lib = {}));