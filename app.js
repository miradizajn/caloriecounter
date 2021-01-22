
/* Ne másold */
let osszKals = ["","","","","","","","","","","","","","","","","","",""];
let osszArs = ["","","","","","","","","","","","","","","","","","",""];
let osszGramms = ["","","","","","","","","","","","","","","","","","",""];

/* Másold és nevezd át */
let makPrev = document.getElementById("makPrev");
let makNext = document.getElementById("makNext");

/* Másold és nevezd át */
let mak = document.getElementById('mak');
let makValue = "";
let kaloriaInput = "";


/* Másold és nevezd át */
makPrev.addEventListener("click", function(){
    makValue --;
    if(makValue < 0){
        makValue = 0;
    }
    mak.setAttribute('value', makValue);
    makKaloriaAr();
});
/* Másold és nevezd át */
makNext.addEventListener("click", function(){
    makValue ++;
    if(makValue > 10){
        makValue = 10;
    }
    mak.setAttribute('value', makValue);
    makKaloriaAr();
});
/* Másold és nevezd át */
let makCal = 23;
const makAr = 140;
/* Másold és nevezd át */
mak.addEventListener("change", makKaloriaAr);
function makKaloriaAr(){
    let kaloria = mak.value * makCal;
    kaloriaInput = document.getElementById("kaloria");
    kaloriaInput.setAttribute('value', kaloria);

    let ar = mak.value * makAr;
    let arInput = document.getElementById('ar');
    arInput.setAttribute('value', ar);

    // A [] közé írt számot minden különböző elemnél eggyel nagyobbra kell állítani és minden elemet hozzá kell adni a megfelelő összesítő függvénynél
    osszKals[0] = kaloriaInput.value ? kaloriaInput.value : 0;
    osszArs[0] = arInput.value ? arInput.value : 0;
    osszGramms[0] = makValue * 10;
    osszesitKal();
    osszesitAr();
    osszesitGramms();
}





let dioPrev = document.getElementById("dioPrev");
let dioNext = document.getElementById("dioNext");
let dioValue = "";
dioPrev.addEventListener("click", function(){
    dioValue --;
    if(dioValue < 0){
        dioValue = 0;
    }
    dio.setAttribute('value', dioValue);
    dioKaloriaAr();
});

dioNext.addEventListener("click", function(){
    dioValue ++;
    if(dioValue > 10){
        dioValue = 10;
    }
    dio.setAttribute('value', dioValue);
    dioKaloriaAr();
});

let dioCal = 35;
const dioAr = 120;
let dio = document.getElementById('dio');
let diokaloriaInput;

dio.addEventListener("change", dioKaloriaAr);
function dioKaloriaAr(){
    let diokaloria = dio.value * dioCal;
    diokaloriaInput = document.getElementById("diokaloria");
    diokaloriaInput.setAttribute('value', diokaloria);

    let dioar = dio.value * dioAr;
    let dioarInput = document.getElementById('dioar');
    dioarInput.setAttribute('value', dioar);
    
    osszKals[1] = diokaloriaInput.value ? diokaloriaInput.value : 0;
    osszArs[1] = dioarInput.value ? dioarInput.value : 0;
    osszGramms[1] = dioValue * 10;
    osszesitKal();
    osszesitAr();
    osszesitGramms();
}


function osszesitKal(){
    // Mindig hozzá kell adni az új elemet: osszKals[0] * 1 + osszKals[1] * 1 + osszKals[2] * 1, stb
    // Az 1-el való beszorzás muszály mert a Javascript nem összeadná őket hanem összeragasztaná őket
    let osszkal = osszKals[0] * 1 + osszKals[1] * 1;
    document.getElementById('osszkal').setAttribute("value", 1235 + osszkal);
}

function osszesitAr(){
    // Mindig hozzá kell adni az új elemet: osszKals[0] * 1 + osszKals[1] * 1 + osszKals[2] * 1, stb
    // Az 1-el való beszorzás muszály mert a Javascript nem összeadná őket hanem összeragasztaná őket
    let osszar = osszArs[0] * 1 + osszArs[1] * 1;
    document.getElementById('osszar').setAttribute("value", 750 + osszar);
}

function osszesitGramms(){
    // Mindig hozzá kell adni az új elemet: osszKals[0] * 1 + osszKals[1] * 1 + osszKals[2] * 1, stb
    // Az 1-el való beszorzás muszály mert a Javascript nem összeadná őket hanem összeragasztaná őket
    let osszgramm = osszGramms[0] * 1 + osszGramms[1] * 1;
    document.getElementById('osszgramm').setAttribute("value", 500 - osszgramm);
}