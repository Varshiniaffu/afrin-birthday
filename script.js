// ==========================
// ELEMENTS
// ==========================

const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const scene3 = document.getElementById("scene3");
const scene4 = document.getElementById("scene4");
const scene5 = document.getElementById("scene5");
const memoryIntroScene = document.getElementById("memoryIntroScene");
const albumScene = document.getElementById("albumScene");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const backBtn = document.getElementById("backBtn");

const passwordInput = document.getElementById("passwordInput");
const unlockBtn = document.getElementById("unlockBtn");
const passwordMessage = document.getElementById("passwordMessage");

const loadingText = document.getElementById("loadingText");
const loadingSubText = document.getElementById("loadingSubText");
const loaderFill = document.querySelector(".loader-fill");

const catNormal = document.getElementById("catNormal");
const catPunch = document.getElementById("catPunch");
const noMessage = document.getElementById("noMessage");


// ==========================
// CHANGE SCENE
// ==========================

function changeScene(current, next) {

    current.classList.remove("active");

    setTimeout(() => {

        next.classList.add("active");

    }, 400);

}

function typeWriter(element, text, speed = 50) {

    element.innerHTML = "";

    let i = 0;

    const timer = setInterval(() => {

        element.innerHTML += text.charAt(i);

        i++;

        if (i >= text.length) {

            clearInterval(timer);

        }

    }, speed);

}

// ==========================
// YES BUTTON
// ==========================

yesBtn.addEventListener("click", () => {

    changeScene(scene1, scene2);

});


// ==========================
// NO BUTTON
// ==========================

noBtn.addEventListener("click", () => {

    changeScene(scene1, scene4);

    catNormal.classList.remove("show");
    catPunch.classList.remove("show");

    noMessage.innerHTML = "";

    setTimeout(() => {

        catNormal.classList.add("show");

        typeWriter(noMessage, "Wait...");

    }, 500);

    setTimeout(() => {

        typeWriter(noMessage, "You're not Afrin?");

    }, 2200);

    setTimeout(() => {

        typeWriter(noMessage, "Then what are you doing here?");

    }, 4700);

    setTimeout(() => {

        catNormal.classList.remove("show");

        catPunch.classList.add("show");

        document.body.classList.add("screenShake");

        typeWriter(noMessage, "CHAL NIKAL YAHA SE!! ", 40);

        setTimeout(() => {

            document.body.classList.remove("screenShake");

        }, 500);

    }, 7600);

});


// ==========================
// BACK BUTTON
// ==========================

backBtn.addEventListener("click", () => {

    scene4.classList.remove("active");

    setTimeout(() => {

        scene1.classList.add("active");

        catNormal.classList.remove("show");
        catPunch.classList.remove("show");

    }, 400);

});


// ==========================
// PASSWORD
// ==========================

const PASSWORD = "4444";

let enteredPassword = "";
let wrongAttempt = 0;

const dots = document.querySelectorAll(".dot");
const keys = document.querySelectorAll(".key");
const cat = document.querySelector(".cat");

const messages = [

    "Hmm... That's not it.",

    "Still doesn't look right...",

    "Suspicious... 🤨",

    "Nice try 😂",

    "One last chance..."

];

// --------------------
// Update dots
// --------------------

function updateDots(){

    dots.forEach((dot,index)=>{

        if(index < enteredPassword.length){

            dot.classList.add("filled");

            dot.animate([
                {
                    transform:"scale(.5)"
                },
                {
                    transform:"scale(1.25)"
                },
                {
                    transform:"scale(1)"
                }
            ],{
                duration:180
            });

        }

        else{

            dot.classList.remove("filled");

        }

    });

}

// --------------------
// Check Password
// --------------------

function checkPassword(){

    keys.forEach(key=>key.disabled=true);

    if(enteredPassword===PASSWORD){

        cat.innerHTML="😸";

        passwordMessage.style.color="#9cffaf";

        passwordMessage.innerHTML="Welcome back, Afrin 💜";

        dots.forEach(dot=>{

            dot.animate([
                {
                    boxShadow:"0 0 0 transparent"
                },
                {
                    boxShadow:"0 0 18px #c77dff"
                },
                {
                    boxShadow:"0 0 8px #c77dff"
                }
            ],{
                duration:600
            });

        });

        document.querySelector(".keypad").animate([
            {
                boxShadow:"0 0 0 rgba(124,58,237,0)"
            },
            {
                boxShadow:"0 0 45px rgba(199,125,255,.55)"
            },
            {
                boxShadow:"0 0 20px rgba(199,125,255,.25)"
            }
        ],{
            duration:800
        });

        setTimeout(()=>{

            changeScene(scene2,scene3);

            startLoading();

        },1200);

    }

    else{

        cat.innerHTML="😾";

        passwordMessage.style.color="#ffb3b3";

        passwordMessage.innerHTML=
        messages[Math.min(wrongAttempt,messages.length-1)];

        wrongAttempt++;

        document.querySelector(".password-dots").animate([
            {
                transform:"translateX(-10px)"
            },
            {
                transform:"translateX(10px)"
            },
            {
                transform:"translateX(-8px)"
            },
            {
                transform:"translateX(8px)"
            },
            {
                transform:"translateX(0)"
            }
        ],{
            duration:350
        });

        setTimeout(()=>{

            enteredPassword="";

            updateDots();

            cat.innerHTML="🐱";

            keys.forEach(key=>key.disabled=false);

        },500);

    }

}

// --------------------
// KEYPAD
// --------------------

keys.forEach(key=>{

    key.addEventListener("click",()=>{

        key.animate([
            {
                transform:"scale(.9)"
            },
            {
                transform:"scale(1)"
            }
        ],{
            duration:120
        });

        if(key.id==="clearBtn"){

            enteredPassword=
            enteredPassword.slice(0,-1);

            updateDots();

            return;

        }

        if(key.id==="enterBtn"){

            checkPassword();

            return;

        }

        if(enteredPassword.length>=4){

            return;

        }

        enteredPassword+=key.dataset.key;

        updateDots();

        if(enteredPassword.length===4){

            setTimeout(checkPassword,300);

        }

    });

});


// ==========================
// LOADING
// ==========================

function startLoading() {

    const loadingMessages = [

        "Verifying Identity...",

        "Collecting Memories...",

        "Picking Flowers...",

        "Wrapping Gifts...",

        "Preparing Surprise...",

        "Identity Confirmed ✓"

    ];

    const loadingSubMessages = [

        "Please wait...",

        "Finding happy memories...",

        "Almost there...",

        "Making everything perfect...",

        "Just a moment...",

        "Welcome, Afrin 💜"

    ];

    let progress = 0;

    let index = 0;

    loaderFill.style.width = "0%";

    const timer = setInterval(() => {

        loadingText.innerHTML =
        loadingMessages[index];

        loadingSubText.innerHTML =
        loadingSubMessages[index];

        progress += 20;

        loaderFill.style.width =
        progress + "%";

        index++;

        if (index >= loadingMessages.length) {

    clearInterval(timer);

    setTimeout(() => {

        scene3.classList.remove("active");

        scene5.classList.add("active");

    }, 1200);

}

    }, 1000);

}

/* ===========================
   MEMORY WALL
=========================== */

const memoryWall = document.getElementById("memoryWall");

const backgroundPhotos = [

"photo2.jpeg",
"photo3.jpeg",
"photo5.jpeg",
"photo8.jpeg",
"photo11.jpeg",
"photo17.jpeg",
"photo21.jpeg",
"photo24.jpeg",
"photo27.jpeg",
"photo33.jpeg"

];

const backgroundPositions = [

    {left:"5%",top:"6%",rotate:"-7deg"},
    {left:"78%",top:"6%",rotate:"6deg"},
    {left:"10%",top:"34%",rotate:"-5deg"},
    {left:"80%",top:"34%",rotate:"5deg"},
    {left:"6%",top:"72%",rotate:"-8deg"},
    {left:"76%",top:"72%",rotate:"7deg"},
    {left:"27%",top:"10%",rotate:"-4deg"},
    {left:"62%",top:"16%",rotate:"4deg"},
    {left:"25%",top:"78%",rotate:"-6deg"},
    {left:"60%",top:"74%",rotate:"5deg"}

];

function createMemoryWall(){

    memoryWall.innerHTML="";

    backgroundPhotos.forEach((photo,index)=>{

        const img=document.createElement("img");

        img.src="assets/images/photos/"+photo;

        img.className="bg-photo";

        img.style.left=backgroundPositions[index].left;

        img.style.top=backgroundPositions[index].top;

        img.style.setProperty(
            "--rotation",
            backgroundPositions[index].rotate
        );

        memoryWall.appendChild(img);

    });

}

/* ===========================
   SCENE ENGINE
=========================== */

const sceneContainer =
document.getElementById("sceneContainer");

const sceneText =
document.getElementById("sceneText");

const scenes=[

{
layout:"single",

photos:["photo1.jpeg"],

text:"Everything beautiful started here.",

duration:5000

},

{
layout:"single",

photos:["photo4.jpeg"],

text:`Aww...
Look at this frame.

Different years.
Different memories.

The same strong bond ❤️`,

duration:5000

},

{
layout:"single",

photos:["photo36.jpeg"],

text:"Look at you two... a queen and her princess. That's adorable 🥹",

duration:5000

},

{
layout:"double",

photos:[
"photo2.jpeg",
"photo3.jpeg"
],

text:

`You're stronger like your father...
and graceful like your mother`,

duration:6000

},
{
    layout:"triple",

    photos:[
        "photo23.jpeg",
        "photo34.jpeg",
        "photo35.jpeg"
    ],

    text:`No matter what happens...

she'll always have
you by her side ❤️`,

    duration:6000
},
{
    layout:"double",

    photos:[
        "photo21.jpeg",
        "photo33.jpeg"
    ],

    imageWidth:260,

    text:`Every queen
needs a royal companion 🐾`,

    duration:6000

},
{
    layout:"single",

    photos:["photo5.jpeg"],

    imageWidth:330,

    text:`One proud moment to celebrate and remember 🎓`,

    duration:6000

},
{
    layout:"triple",

    photos:[
        "photo7.jpeg",
        "photo8.jpeg",
        "photo10.jpeg"
    ],

    imageWidth:220,

    text:`Some colors
were made just for you`,

    duration:6000

},
{
    layout:"triple",

    photos:[
        "photo6.jpeg",
        "photo9.jpeg",
        "photo24.jpeg"
    ],

    imageWidth:220,

    text:`you posing like a zara model ✨`,

    duration:6000

},
{
    layout:"quad",

    photos:[
        "photo29.jpeg",
        "photo30.jpeg",
        "photo31.jpeg",
        "photo32.jpeg"
    ],

    imageWidth:210,

    text:`Some moments are simply picture-perfect ✨`,

    duration:7000

},
{
    layout:"empty",

    text:`But...

there's one more thing...`,

    duration:4000

},
{
    layout:"empty",

    text:`Today...

isn't about
the memories.

It's about

YOU ❤️`,

    duration:5000

},
{
    layout:"empty",

    text:`🎂

Happy Birthday

Afrin

🤍`,

    textClass:"birthday",

    duration:5000

},
];

let currentScene=0;

/* ===========================
   CREATE PHOTO
=========================== */

function createPhoto(src, width = 320){

    const img = document.createElement("img");

    img.src = "assets/images/photos/" + src;

    img.className = "heroPhoto";

    img.style.width = width + "px";

    return img;

}

/* ===========================
   SHOW SCENE
=========================== */

function showScene(index){

    if(index>=scenes.length){
        startFinalLetterScene();
        return;
    }

    const scene=scenes[index];

    sceneContainer.style.opacity="0";
    sceneText.style.opacity="0";

    setTimeout(()=>{

        sceneContainer.innerHTML="";

        sceneContainer.className="";

        if(scene.layout==="single"){

    sceneContainer.appendChild(

        createPhoto(
            scene.photos[0],
            scene.imageWidth || 320
        )

    );

}

        else if(scene.layout==="double"){

    sceneContainer.classList.add("doubleLayout");

    scene.photos.forEach(photo=>{

        sceneContainer.appendChild(

            createPhoto(
                photo,
                scene.imageWidth || 320
            )

        );

    });

}

        else if(scene.layout==="triple"){

    sceneContainer.classList.add("tripleLayout");

    scene.photos.forEach(photo=>{

        sceneContainer.appendChild(

            createPhoto(
                photo,
                scene.imageWidth || 240
            )

        );

    });

}
else if(scene.layout==="quad"){

    sceneContainer.classList.add("quadLayout");

    scene.photos.forEach(photo=>{

        sceneContainer.appendChild(

            createPhoto(
                photo,
                scene.imageWidth || 200
            )

        );

    });

}
else if(scene.layout==="empty"){

    sceneContainer.innerHTML="";

}
sceneText.className = "hero-text";

if(scene.textClass){

    sceneText.classList.add(scene.textClass);

}
        sceneText.innerHTML=scene.text;

        sceneContainer.style.opacity="1";
        sceneText.style.opacity="1";

        if (scene.textClass === "birthday") {
            setTimeout(() => {
                sceneText.style.transition = "opacity 1.8s ease";
                sceneText.style.opacity = "0";
            }, Math.max(0, scene.duration - 1900));
        }

    },500);

    setTimeout(()=>{

        currentScene++;

        showScene(currentScene);

    },scene.duration);

}


/* ===========================
   START MEMORY CINEMA
=========================== */

function startMemoryCinema(){

    currentScene = 0;

    createMemoryWall();

    sceneContainer.innerHTML = "";
    sceneText.innerHTML = "";

    showScene(0);

}
