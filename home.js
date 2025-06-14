// Daily Quests
const glowQuests = [
    "Take 10 minutes to relax with your skincare — your skin will thank you!",
    "Double cleanse today and massage your face gently 💆‍♀️",
    "Hydration check! Drink a glass of water every hour 🥤",
    "Apply your moisturizer while your face is still damp for better hydration ✨",
    "Exfoliate gently if it’s your exfoliation day — no harsh scrubs today 🧽",
    "Wear sunscreen indoors too — protect against screen light and windows ☀️",
    "Use a cooling jade roller or gua sha to de-puff and soothe 🪨",
    "Change your pillowcase today — your skin will notice 🌙",
    "Take 5 minutes to track your skin and mood in your journal 📓",
    "Avoid touching your face today — let it breathe without interruption 🙅‍♀️",
    "Sanitize your phone screen — less bacteria means fewer breakouts 📱",
    "Try a calming playlist while applying your skincare for a mood boost 🎶",
    "Do a 5-minute breathing or meditation session to reduce stress flare-ups 🧘‍♀️",
    "Apply a thick layer of lip balm before bed and let it soak in overnight 💋",
    "Stick to a simple 3-step routine today: cleanse, treat, moisturize 🧴"
];

const todayIndex = new Date().getDate() % glowQuests.length;

const questCard = document.getElementById('quest-card');
questCard.querySelector("p").textContent = glowQuests[todayIndex];

//ingredients
const ingredients= [{
  name: "Niacinamide",
  description: "A powerful form of Vitamin B3 that brightens skin, strengthens the barrier, reduces inflammation, and fades dark spots over time. Great for sensitive and acne-prone skin."
  },{
  name: "Hyaluronic Acid",
  description: "A hydration magnet that holds up to 1000x its weight in water. Helps plump skin, reduce fine lines, and keeps the skin barrier healthy and supple."
  },{
  name: "Salicylic Acid",
  description: "A BHA that penetrates deep into pores to exfoliate and unclog them. Excellent for treating acne, blackheads, and oily skin."
  },{
  name: "Vitamin C",
  description: "A potent antioxidant that boosts collagen production, brightens dull skin, and reduces pigmentation. Best used in the morning with sunscreen."
  },{
  name: "Ceramides",
  description: "Lipids that help restore and maintain the skin’s natural barrier. Ideal for dry, sensitive, or compromised skin."
  },{
  name: "Retinol",
  description: "A Vitamin A derivative that promotes cell turnover, smooths wrinkles, and treats acne. Use only at night and pair with moisturizer and sunscreen."
  },{
  name: "Green Tea Extract",
  description: "Packed with antioxidants, it soothes irritated skin, controls oil, and protects against environmental damage."
  },{
  name: "Centella Asiatica",
  description: "Also known as Cica or Gotu Kola, it calms inflammation, promotes healing, and strengthens the skin barrier — perfect for sensitive skin."
  },{
  name: "Alpha Arbutin",
  description: "A gentle brightening agent that helps fade hyperpigmentation and dark spots without irritating the skin."
  },{
  name: "Snail Mucin",
  description: "A Korean skincare staple that hydrates, heals, and improves texture. Rich in proteins and antioxidants."
  },{
  name: "Lactic Acid",
  description: "An AHA that gently exfoliates and hydrates. Ideal for sensitive or dry skin types looking to improve texture and glow."
  },{
  name: "Peptides",
  description: "Short chains of amino acids that help support collagen and elastin production, firming and plumping the skin."
  },{
  name: "Azelaic Acid",
  description: "A multitasking ingredient that treats acne, fades dark spots, and reduces redness. Suitable for sensitive skin and rosacea."
  },{
  name: "Squalane",
  description: "A lightweight, non-comedogenic oil that mimics skin’s natural lipids. Deeply moisturizes and strengthens the skin barrier."
  },{
  name: "Glycolic Acid",
  description: "A strong AHA that exfoliates dead skin cells, smooths texture, and improves radiance. Best used at night with sun protection in the morning."
}];


const ingredientContainer = document.getElementById("ingredientCards");

ingredients.forEach(ing => {
    const card = document.createElement("div");
    card.className = "ingredient-card";
    card.innerHTML = `
        <h3>${ing.name}</h3>
        <p>${ing.description}</p>
    `;
    ingredientContainer.appendChild(card);
});






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