import cities from './city.js';
let st5 = document.querySelectorAll(".st5");
let providers = document.querySelector("#showProviders");
let tooltip = document.createElement("div");
document.body.append(tooltip);
tooltip.classList.add("tooltip");

const hideTooltip = () => {
    tooltip.style.display = "none";
}
const showTooltip = (x,y,message) => {
    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
    tooltip.style.display = "block";
    tooltip.innerText = message;
    console.log(x,y,message);
}

const getCity = (id)=>{
    return cities.find(e => e.id == id);
}

document.addEventListener("click",(e)=>{
    for (const key in st5) {
        st5[key]?.classList?.remove("color");
        if(st5[key]?.dataset?.id == e.target.dataset.id){
            st5[key]?.classList?.add("color");
            if(st5[key]?.dataset?.id != undefined){
                showTooltip(e.clientX,e.clientY,getCity(st5[key]?.dataset?.id).city_ar +" - "+ getCity(st5[key]?.dataset?.id).city_en)
                providers.innerHTML = `<h4>محافظة  ${getCity(st5[key]?.dataset?.id).city_ar} - ${getCity(st5[key]?.dataset?.id).city_en}</h4><p>${getCity(st5[key]?.dataset?.id).details}</p>`
            }else{
                providers.innerHTML = null ;
                hideTooltip();
            }
        }else{
            // hideTooltip();
        }
    }
})