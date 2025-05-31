let entryDates = JSON.parse(localStorage.getItem("entryDates")) || {};

const calenderGrid= document.getElementById("calender-grid");
const monthYear= document.getElementById("month-year");
const entryDisplay = document.getElementById("entry-display");

let current= new Date();
function buildCalender(){
    const year= current.getFullYear();
    const month= current.getMonth();
    const firstDay= new Date(year, month, 1).getDay();
    const daysInMonth= new Date(year, month+1, 0).getDate();
    calenderGrid.innerHTML= "";
    monthYear.textContent= current.toLocaleDateString("en-US",{
        month: "long",
        year: "numeric"
    });
    for(let i=0; i< firstDay; i++){
        calenderGrid.innerHTML += `<div></div>`;
    }

    for(let d=1; d<=daysInMonth; d++){
        const date = new Date(year,month,d);
        const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

        const today= new Date();
        const isToday= date.toDateString()===today.toDateString();
        const hasEntry= entryDates[key];

        const div= document.createElement("div");
        div.textContent = d;
        if(isToday) div.classList.add("today");
        if(hasEntry){
            const dot= document.createElement("div");
            dot.classList.add("dot");
            div.appendChild(dot);
        }

        div.addEventListener("click", ()=>{
            if(hasEntry){
                entryDisplay.innerHTML=`<strong>${key}:</strong>${entryDates[key]}`;
                entryDisplay.style.display="block";
            }else{
                entryDisplay.innerHTML=`No entry for ${key}`;
                entryDisplay.style.display="block";
            }
        });
        calenderGrid.appendChild(div);
    }
}

document.getElementById("prev-month").onclick=()=>{
    current.setMonth(current.getMonth()-1);
    buildCalender();
};
document.getElementById("next-month").onclick=()=>{
    current.setMonth(current.getMonth()+1);
    buildCalender();
}

buildCalender();

//local storage
const form = document.querySelector(".log-form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const mood= document.getElementById("mood").value;
    const notes= document.getElementById("notes").value;

    const skincondition= Array.from(document.querySelectorAll(".skin-condition input:checked"))
    .map(input=> input.nextSibling.textContent.trim())
    .join(",");
    
    const entryText = `${mood} ${notes? '- ' +notes: ''}${skincondition?', '+ skincondition:''}`;

    const today=new Date();
    const key= `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,"0")}-${String(today.getDate()).padStart(2,"0")}`;

    entryDates[key]= entryText;
    localStorage.setItem("entryDates", JSON.stringify(entryDates));

    buildCalender();
    form.reset();
});

//affirmation of the day
const quotes=[
    "You are glowing inside and out, and your light only grows brighter every day.✨🌸",
    "Small steps, taken with patience and love, lead to the most meaningful and lasting changes.🪴💫",
    "Remember, your skin is just one part of your incredible journey—it does not define who you truly are.🌿🪞",
    "You deserve rest, kindness, and plenty of hydration to nurture both your body and your heart.💧❤️",
    "Every single day, your skin is healing and renewing itself, just like you are.🌅🍃",
    "Progress is never a straight line—be gentle with yourself through every twist and turn.💗🫶",
    "You are so much more than any imperfection you may see—your worth is limitless.🌼🌠",
    "You are worthy of care, compassion, and love every moment of every day.💗🌙",
    "Take time to nourish not only your skin but also your soul, for both need gentle attention.🫧🧘‍♀️",
    "Your beauty shines brightest when you treat yourself with patience and understanding.💖🌟",
    "Healing takes time, and every step you take is a victory worth celebrating.⏳🏆",
    "Embrace your journey fully, knowing that growth happens even in the quietest moments.🪴🤍",
    "You have an inner strength that radiates far beyond the surface—trust in it.🔥👑",
    "Let self-love be your foundation, supporting you through every challenge and triumph.🧘‍♀️🪄",
    "You are a masterpiece in progress, deserving of kindness, care, and endless encouragement.🎨💞"
];
const dayOfYear= Math.floor((new Date()- new Date(new Date().getFullYear(),0,0))/86400000);
const quoteOfTheDay = quotes[dayOfYear%quotes.length];
document.getElementById("quotes-text").textContent= quoteOfTheDay;

// toggle setup
const themeToggle= document.getElementById("theme-toggle");

themeToggle.addEventListener("click", ()=>{
    document.body.classList.toggle("night");
    document.body.classList.toggle("day");
    localStorage.setItem("theme", document.body.classList.contains("night")? "night": "day");
});

window.addEventListener("DOMContentLoaded",()=>{
    const savedTheme= localStorage.getItem("theme");
    if(savedTheme === "night"){
        document.body.classList.add("night");
        document.body.classList.remove("day");
    }
});