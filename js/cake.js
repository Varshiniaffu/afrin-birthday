// ==========================
// ELEMENTS
// ==========================
const cake = document.getElementById("cake");
const wishText = document.getElementById("wishText");
const blowBtn = document.getElementById("blowBtn");

// ==========================
// BUTTON
// ==========================

blowBtn.addEventListener("click", () => {

    // --------------------------
    // FIRST CLICK
    // --------------------------

    if(blowBtn.innerHTML.includes("Blow")){

        blowBtn.disabled = true;
        blowBtn.style.pointerEvents = "none";
        blowBtn.innerHTML = "✨ Magic...";

        cake.animate([
            { transform:"translateY(0px) scale(1)" },
            { transform:"translateY(-15px) scale(1.03)" },
            { transform:"translateY(0px) scale(1)" }
        ],{
            duration:700
        });

        setTimeout(()=>{
            wishText.innerHTML="Wait...";
        },700);

        setTimeout(()=>{
    wishText.innerHTML = "🎂 Every birthday begins with a wish...";
},2200);

setTimeout(()=>{
    wishText.innerHTML = "💜 But I wanted this birthday to feel a little more special...";
},4200);

setTimeout(()=>{
    blowBtn.innerHTML = "🎁💐Just for You";
    blowBtn.disabled = false;
    blowBtn.style.pointerEvents = "auto";
},6000);
    }

    // --------------------------
    // SECOND CLICK
    // --------------------------

    else if(blowBtn.innerHTML.includes("Just for You")){

    scene5.classList.remove("active");

    flowerScene.classList.add("active");

    startBouquetScene();

}

    }

);
