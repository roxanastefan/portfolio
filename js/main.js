document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener("scroll", function(){
        if (document.body.scrollTop > 340 || document.documentElement.scrollTop > 340) {
            document.getElementById("navigation").className = "small-nav";
        } else {
            document.getElementById("navigation").className = "";
        }
    })
});