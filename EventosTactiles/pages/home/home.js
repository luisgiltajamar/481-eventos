(function () {
    "use strict";
    var inicio;
    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            var canvas = document.getElementById("micanvas");


            canvas.addEventListener("MSPointerDown", function (e) {
                document.getElementById("log").innerHTML += "PointerDown " +
                    e.currentPoint.position.x +
                    "x" + e.currentPoint.position.y + "<br />";
                inicio = e.currentPoint.position;
            });

            canvas.addEventListener("MSPointerMove", function (e) {
                if (!inicio) {
                    return ;
                }

                document.getElementById("log").innerHTML += "PointerDown " +
                    e.currentPoint.position.x +
                    "x" + e.currentPoint.position.y+"<br />";

                var ctx = canvas.getContext("2d");

                ctx.drawStyle = "#ccff77";

                ctx.beginPath();
                ctx.moveTo(inicio.x, inicio.y);
                ctx.lineTo(e.currentPoint.position.x, e.currentPoint.position.y);
                ctx.stroke();

            });

            document.getElementById("btnNav").addEventListener("click",
                function () {

                    WinJS.Navigation.navigate("/pages/segunda/segunda.html", {
                        nombre: "Luis",
                        momento: 1
                    });

                });
        }
    });
})();
