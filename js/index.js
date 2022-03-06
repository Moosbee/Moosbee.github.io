window.addEventListener('DOMContentLoaded', () => {

    // document.getElementById("openClose").addEventListener("click", () => {
    //     let nav = document.getElementById("nav");
    //     let switchitems = nav.getElementsByClassName("switch");
    //     for (let index = 0; index < switchitems.length; index++) {
    //         switchitems[index].classList.toggle("hide");
    //     }
    // });

    $(".start").hide();


    document.getElementById("openClose").addEventListener("click", () => {
        let duration = 500;
        $(".switchIcon").fadeToggle(100);
        $(".menuitemspocket").slideToggle(duration);
    });








});