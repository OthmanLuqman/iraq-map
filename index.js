import cities from './city.js';
let st5 = document.querySelectorAll(".st5");
let providers = document.querySelector("#showProviders");

const getCity = (id)=>{
    return cities.find(e => e.id == id);
}
console.log(getCity(2).city_ar);

document.addEventListener("click",(e)=>{
    for (const key in st5) {
        st5[key]?.classList?.remove("color");
        if(st5[key]?.dataset?.id == e.target.dataset.id){
            st5[key]?.classList?.add("color");
            st5[key]?.dataset?.id != undefined ?
            providers.innerHTML = `<h4>محافظة  ${getCity(st5[key]?.dataset?.id).city_ar} - ${getCity(st5[key]?.dataset?.id).city_en}</h4>`
            : providers.innerHTML = null ;
        }
    }
    // providers.textContent = `this is: ${e.target.dataset.name}`;
})