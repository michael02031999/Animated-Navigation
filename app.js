let iconDiv = document.getElementById("iconDiv");
let Icon = document.getElementById("Icon");
let Icon2 = document.getElementById("Icon2");
let aniNav = document.getElementById("aniNav");

let home = document.getElementById("home");
let works = document.getElementById("works");
let about = document.getElementById("about");
let contact = document.getElementById("contact");
let decoy = document.getElementById("decoy");

iconDiv.addEventListener("click", rotate);

let count = 0;

function rotate() {
  if (count == 0) {
    aniNav.style.width = "30px";
    aniNav.style.gridTemplateColumns = "auto auto auto auto auto";
    /* home.style.display = "none";
    works.style.display = "none";
    about.style.display = "none";
    contact.style.display = "none";*/

    //home.style.visibility = "hidden";
    //contact.style.visibility = "hidden";

    home.style.zIndex = "-1";
    works.style.zIndex = "-1";
    about.style.zIndex = "-1";
    contact.style.zIndex = "-1";

    iconDiv.style.zIndex = "1";

    //home.style.transform = "scale(-1,1) scale(-1,1)";
    home.style.animationName = "repeat2";
    works.style.animationName = "repeat2";
    about.style.animationName = "repeat2";
    contact.style.animationName = "repeat2";

    //home.style.transform = "rotateZ(720deg)";

    //Icon.style.transform =
    //"translateX(140px) rotate(-720deg) rotate(45deg) translateX(2px) translateY(2.5px)";
    //Icon2.style.transform =
    //"translateX(140px) rotate(720deg) rotate(-45deg) translateX(0.75px) translateY(-4px)";

    Icon.style.transform = "translateX(0px)";
    Icon2.style.transform = "translateX(0px)";

    count++;
  } else if (count == 1) {
    works.style.display = "unset";
    about.style.display = "unset";
    contact.style.display = "unset";
    home.style.display = "unset";
    home.style.visibility = "visible";
    //contact.style.visibility = "visible";

    home.style.animationName = "repeat2Backwards";
    works.style.animationName = "repeat2Backwards";
    about.style.animationName = "repeat2Backwards";
    contact.style.animationName = "repeat2Backwards";

    /*home.style.animationDirection = "reverse";
    works.style.animationDirection = "reverse";
    about.style.animationDirection = "reverse";
    contact.style.animationDirection = "reverse";*/

    aniNav.style.width = "275px";
    aniNav.style.transition = "width 0.75s";

    Icon.style.transform =
      "translateX(132.5px) rotate(-720deg) rotate(45deg) translateX(2px) translateY(2.5px)";
    Icon2.style.transform =
      "translateX(132.5px) rotate(720deg) rotate(-45deg) translateX(0.75px) translateY(-4px)";

    count = 0;
  }
}

//translateX(140px)

//rotate(-45deg) translateY(2.5px) translateX(-9.5px)
//rotate(45deg) translateY(-2.5px) translateX(-0.5px)
