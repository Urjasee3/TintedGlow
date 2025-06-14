const routineData= {
    acne: {
        ingredients: ["Salicylic Acid", "Niacinamide", "Tea Tree Extract", "Azelaic Acid", "Benzoyl Peroxide", "Centella Asiatica", "Retinoids (for cell turnover)", "Panthenol"],
        am: ["Gentle Cleanser", "Niacinamide Serum", "Oil-free Moisturizer", "Sunscreen SPF 50+"],
        pm: ["Gentle Cleanser", "Green Tea Toner", "Salicylic Acid Serum","Spot Treatment (BHA/ Azelaic acid)", "Cica Moisturizer"]
    },
    pigmentation:{
        ingredients: ["Vitamin C", "Alpha Arbutin", "Licorice Extract", "Kojic Acid", "Tranexamic Acid", "Niacinamide"],
        am: ["Brightening Cleanser", "Vitamin C Serum", "Moisturizer", "Sunscreen SPF 50+"],
        pm: ["Gentle Cleanser","PHA Toner", "Alpha Arbutin Serum","Eye serum", "Ceramide Cream"]
    },
    dullness: {
    ingredients: ["Vitamin C", "PHA", "Licorice Extract", "Hyaluronic Acid", "Niacinamide"],
    am: ["Hydrating Cleanser", "Vitamin C Serum", "Light Moisturizer", "Sunscreen"],
    pm: ["Mild Exfoliating Cleanser", "PHA Toner", "Hydrating Serum", "Eye serum", "Squalane or Night Cream"]
    },
    aging: {
    ingredients: ["Retinol", "Peptides", "Ceramides", "Vitamin C", "Panthenol"],
    am: ["Cream Cleanser", "Peptide Serum", "Hydrating Cream", "SPF 50+"],
    pm: ["Gentle Cleanser", "Hydrating Toner", "Retinol (2–3x a week)", "Eye serum", "Peptide Cream"]
    },
    redness: {
    ingredients: ["Centella Asiatica", "Allantoin", "Green Tea", "Panthenol"],
    am: ["Soothing Cleanser", "Centella Toner", "Calming Cream", "Mineral Sunscreen"],
    pm: ["Barrier Repair Cleanser", "Allantoin Serum",  "Thick Moisturizer"]
    },
    dehydration: {
    ingredients: ["Hyaluronic Acid", "Glycerin", "Ceramides", "Squalane"],
    am: ["Hydrating Cleanser", "HA Serum", "Moisturizer", "SPF 30+"],
    pm: ["Cream Cleanser", "HA + Squalane Serum", "Eye serum","Overnight Mask"]
    }
};
const skinTips = {
    dry: "Use cream-based products with Ceramides and Squalane. Avoid foaming cleansers, apply face oil at night to lock in moisture and smooth flaky patches.",
    oily: "Go for gel-based, non-comedogenic products with Salicylic Acid and Niacinamide, and use clay masks weekly(or 2-3x a week) to reduce excess sebum and unclog pores.",
    combination: "Balance is key! Gel moisturizers for oily areas and cream for dry areas work well and use balancing toners with ingredients like Green Tea or Rose Water.",
    sensitive: "Stick to minimal, fragrance-free formulas with calming agents like Centella and Oat Extract, and always patch test new products before full use.",
    normal: "Maintain your healthy skin with a simple routine  including antioxidants, lightweight hydration, and consistent sunscreen — less is more when balanced."
};
const concernTips= {
    acne: "Use Salicylic Acid Serum (for beginer low concentration 2-3x a week). Treat breakouts gently with targeted actives like Benzoyl Peroxide or Azelaic Acid (for skincare intermediate and pro), avoid touching your face, and keep tools and pillowcases clean.",
    pigmentation: "Use Vitamin C, Alpha Arbutin, or Kojic Acid to brighten dark spots, and avoid sun exposure and reapply SPF every 2–3 hours to prevent further darkening.",
    dullness: "Boost skin radiance with mild chemical exfoliation, hydrating essences, and antioxidant serums like Vitamin C to improve tone over time and don't forget to reapply SPF every 2-3 hours",
    aging: "Start with peptides and deeply hydrating moisturizers, slowly introduce retinol or bakuchiol at night, and always follow with SPF to protect and preserve collagen.",
    redness: "Avoid harsh actives and exfoliants, focus on barrier-repairing and calming ingredients like Centella, Panthenol, and Oat Extract, and keep your routine minimal and gentle.",
    dehydration: "Layer humectants like Hyaluronic Acid under ceramide-rich moisturizers, limit hot water, and drink plenty of water to hydrate from within and use mist sprays during the day to refresh skin."
};

document.getElementById("glow-form").addEventListener("submit",function(e){
    e.preventDefault();

    const skinType= document.querySelector('input[name="skinType"]:checked')?.value;
    const concern= document.querySelector('input[name="concern"]:checked')?.value;
    const level= document.querySelector('input[name="level"]:checked')?.value;
    const texture= document.querySelector('input[name="texture"]:checked')?.value;

    const resultDiv= document.getElementById("result");
    const routine= routineData[concern];

    if(!routine || !skinType ||!level || !texture){
        resultDiv.innerHTML= `<p>⚠️Please select all fields to get your routine.</p>`;
        return;
    }
    let amSteps = [...routine.am];
let pmSteps = [...routine.pm];
let ingre = [...routine.ingredients];

if (level === "beginner") {
    const avoidWords = ["retinol", "acid", "benzoyl peroxide", "retinoids", "pha", "vitamin c", "alpha arbutin", "eye serum"];
    amSteps = amSteps.filter(step => !avoidWords.some(w => step.toLowerCase().includes(w)));
    pmSteps = pmSteps.filter(step => !avoidWords.some(w => step.toLowerCase().includes(w)));
    ingre = ingre.filter(ing => !avoidWords.some(w => ing.toLowerCase().includes(w)));
} else if (level === "intermediate") {
    const avoidWords = ["benzoyl peroxide", "retinoids", "eye serum"];
    amSteps = amSteps.filter(step => !avoidWords.some(w => step.toLowerCase().includes(w)));
    pmSteps = pmSteps.filter(step => !avoidWords.some(w => step.toLowerCase().includes(w)));
    ingre = ingre.filter(ing => !avoidWords.some(w => ing.toLowerCase().includes(w)));
}


    const textureMap= step => step.replace(/Moisturizer|Cream/, 
    texture === "gel" ? "Gel Moisturizer" : texture === "cream" ? "Cream Moisturizer" : "Moisturizer");

    amSteps = amSteps.map(textureMap);
    pmSteps = pmSteps.map(textureMap);

    resultDiv.classList.remove("hidden");
    resultDiv.innerHTML= `
    <h2 style= "margin-bottom:10px;">🌟 Your Personalized Skincare Routine</h2>
    <h4>📝 Your Entries:</h4>
    <ul style="margin-bottom: 16px;">
        <li><strong>Skin Type:</strong> ${capitalize(skinType)}</li>
        <li><strong>Main Concern:</strong> ${capitalize(concern)}</li>
        <li><strong>Experience Level:</strong> ${capitalize(level)}</li>
        <li><strong>Texture Preference:</strong> ${texture === "gel" ? "Gel-Based" : "Cream-Based"}</li>
    </ul>
    <hr style="border-top: 2px dashed #bbb; margin: 20px 0;"/>
    <h3>🌞 Morning Routine</h3>
    <ul>
        ${amSteps.map(step=> `<li>💛 ${step}</li>`).join("")}
    </ul>
    <hr style="border-top: 2px dashed #bbb; margin: 20px 0;"/>

    <h3>🌙 Night Routine</h3>
    <ul>
        ${pmSteps.map(step=> `<li>🫧 ${step}</li>`).join("")}
    </ul>
    <hr style="border-top: 2px dashed #bbb; margin: 20px 0;"/>

    <h3>🧴 Key Ingredients</h3>
    <ul>
        ${ingre.map(step=> `<li>💧 ${step}</li>`).join("")}
    </ul>
    <hr style="border-top: 2px dashed #bbb; margin: 20px 0;"/>

    <h3>💡 Personalized Tips</h3>
    <p><strong>🌿 Skin Type Tip:</strong> ${skinTips[skinType]}</p>
    <p><strong>🌼 Concern Tip:</strong> ${concernTips[concern]}</p>
`;

    resultDiv.scrollIntoView({behavior: "smooth"});
});

function capitalize(str){
    return str.charAt(0).toUpperCase()+str.slice(1);
}

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
