window.addEventListener('DOMContentLoaded', () => {


    document.getElementById("slideimg").style.left = "0%";

    document.getElementById("Slidernext").addEventListener("click", slidernext);

    document.getElementById("Sliderprev").addEventListener("click", sliderprev);

    setInterval(slidernext, 10000)

    function slidernext() {
        // console.log("next");
        let slidimg = document.getElementById("slideimg");
        let SliderItems = document.getElementsByClassName("SliderItems");
        let left = slidimg.style.left;
        left = left.replace("%", "");
        left = parseInt(left);
        if ((left / 100) <= -(SliderItems.length - 1)) {
            left = 0;
        } else {
            left = left - 100;
        }
        slidimg.style.left = left.toString() + "%";
    }

    function sliderprev() {
        // console.log("prev");
        let slidimg = document.getElementById("slideimg");
        let SliderItems = document.getElementsByClassName("SliderItems");
        let left = slidimg.style.left;
        left = left.replace("%", "");
        left = parseInt(left);
        if (left >= 0) {
            left = (SliderItems.length - 1) * 100 * -1;
        } else {
            left = left + 100;
        }
        slidimg.style.left = left.toString() + "%";
    }

});