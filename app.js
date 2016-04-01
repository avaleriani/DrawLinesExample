var $ = require("./node_modules/jquery");
var linesDrawer = require("./node_modules/lines-draw");

$(function () {
        if (window.innerWidth == '1920') { //todo:: fix mobile
            // TODO:: ver como hacer para que las lineas sean mobile, supongo que multiplicando por un numero magico que de 0 en la resolucion que lo
            // hice = window.innerWidth * 1920
            linesDrawer.createAllLines('#lines-container');
            linesDrawer.scrollAnimate();
            linesDrawer.mouseCoordenatesOnTitle();
        }
    }
);