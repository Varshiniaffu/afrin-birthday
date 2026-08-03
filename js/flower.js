const bouquet = document.getElementById("bouquet");
const flowerTitle = document.getElementById("flowerTitle");
const flowerScene = document.getElementById("flowerScene");

const flowerCard = document.getElementById("flowerCard");
const flowerEmoji = document.getElementById("flowerEmoji");
const flowerWish = document.getElementById("flowerWish");
let bouquetSequenceStarted = false;

const flowers = [

{
    emoji:"🌹",
    wish:"Like a rose, may your life always be filled with love, kindness, and beautiful moments."
},

{
    emoji:"🌻",
    wish:"Like a sunflower that always turns toward the sun, may you always find happiness and hope wherever you go."
},

{
    emoji:"🌷",
    wish:"Like a tulip that blooms with grace, may every dream you cherish bloom into reality."
},

{
    emoji:"🌼",
    wish:"Like a daisy that symbolizes health and new beginnings, may you always be blessed with good health and endless joy."
},

{
    emoji:"🪻",
    wish:"Like lavender that brings peace and strength, may success, confidence, and positivity always stay by your side."
},

{
    emoji:"🌸",
    wish:"And like a cherry blossom, may every new chapter of your life be beautiful, unforgettable, and full of happiness. Happy Birthday, Afrin. 💜"
}

];

function startBouquetScene(){

    if (bouquetSequenceStarted) return;
    bouquetSequenceStarted = true;

    // One controlled reveal sequence: bouquet first, wishes afterwards.
    bouquet.style.transform = "";
    bouquet.style.transition = "";
    bouquet.style.animation = "bouquetRise 1s ease forwards";
    flowerCard.classList.remove("show");
    flowerCard.style.opacity = "";

    // Keep the bouquet centered for a quiet beat, then make room for the copy.
    setTimeout(() => {
        // Preserve the completed rise state before removing its keyframe animation.
        bouquet.style.opacity = "1";
        bouquet.style.animation = "none";
        bouquet.style.transition = "transform 1.25s ease-in-out";
        bouquet.style.transform = "translateX(clamp(-150px, -12vw, -80px))";

        setTimeout(() => {
            flowerCard.classList.add("show");
            setTimeout(showWish, 650);
        }, 1250);
    }, 2000);

}

function showOnlyScene(scene){

    document.querySelectorAll(".scene").forEach(currentScene => {
        currentScene.classList.remove("active");
    });

    scene.classList.add("active");

}

function showWish(){
    let i = 0;

    function nextFlower(){

        flowerEmoji.innerHTML = flowers[i].emoji;
        flowerWish.innerHTML = flowers[i].wish;

        flowerEmoji.animate([
            {
                transform:"scale(0)",
                opacity:0
            },
            {
                transform:"scale(1.15)",
                opacity:1
            },
            {
                transform:"scale(1)",
                opacity:1
            }
        ],{
            duration:600,
            fill:"forwards"
        });

        flowerWish.animate([
            {
                opacity:0,
                transform:"translateY(15px)"
            },
            {
                opacity:1,
                transform:"translateY(0)"
            }
        ],{
            duration:600,
            fill:"forwards"
        });

        i++;

        if(i < flowers.length){

            setTimeout(nextFlower,4000);

        }

        else{

            // Final message
            setTimeout(()=>{

                flowerTitle.innerHTML =
                "Because some people deserve flowers...";

            },2500);

            setTimeout(()=>{

                flowerTitle.innerHTML =
                "And some deserve an entire garden. 💜";

            },5500);

            setTimeout(() => {
                showOnlyScene(document.getElementById("memoryIntroScene"));
            },8500);

            setTimeout(() => {
                showOnlyScene(document.getElementById("albumScene"));
                setTimeout(startMemoryCinema, 300);
            },12000);

        }

    }

    nextFlower();

}
