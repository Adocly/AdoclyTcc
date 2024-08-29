function abrirModal(){
    const modal = document.getElementById('janelaModal');
    modal.classList.add('abrir');

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fecharModal1'){
            modal.classList.remove('abrir')
        };
    })
};

function abrirModal2(){
    const modal = document.getElementById('janelaModal2');
    modal.classList.add('abrir2');

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fecharModal2'){
            modal.classList.remove('abrir2')
        };
    })
};

function abrirModal3(){
    const modal = document.getElementById('janelaModal3');
    modal.classList.add('abrir3');

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fecharModal3'){
            modal.classList.remove('abrir3')
        };
    })
};

function abrirModal4(){
    const modal = document.getElementById('janelaModal4');
    modal.classList.add('abrir4');

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fecharModal4'){
            modal.classList.remove('abrir4')
        };
    })
};

function abrirModal5(){
    const modal = document.getElementById('janelaModal5');
    modal.classList.add('abrir5');

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fecharModal5'){
            modal.classList.remove('abrir5')
        };
    })
};

function abrirModal6(){
    const modal = document.getElementById('janelaModal6');
    modal.classList.add('abrir6');

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fecharModal6'){
            modal.classList.remove('abrir6')
        };
    })
};

function abrirModal7(){
    const modal = document.getElementById('janelaModal7');
    modal.classList.add('abrir7');

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fecharModal7'){
            modal.classList.remove('abrir7')
        };
    })
};

function abrirModal8(){
    const modal = document.getElementById('janelaModal8');
    modal.classList.add('abrir8');

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fecharModal8'){
            modal.classList.remove('abrir8')
        };
    })
};

function abrirModal9(){
    const modal = document.getElementById('janelaModal9');
    modal.classList.add('abrir9');

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fecharModal9'){
            modal.classList.remove('abrir9')
        };
    })
};

function abrirModal10(){
    const modal = document.getElementById('janelaModal10');
    modal.classList.add('abrir10');

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fecharModal10'){
            modal.classList.remove('abrir10')
        };
    })
};

function abrirModal11(){
    const modal = document.getElementById('janelaModal11');
    modal.classList.add('abrir11');

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fecharModal11'){
            modal.classList.remove('abrir11')
        };
    })
};

function abrirModal12(){
    const modal = document.getElementById('janelaModal12');
    modal.classList.add('abrir12');

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fecharModal12'){
            modal.classList.remove('abrir12')
        };
    })
};

function abrirModal13(){
    const modal = document.getElementById('janelaModal13');
    modal.classList.add('abrir13');

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fecharModal13'){
            modal.classList.remove('abrir13')
        };
    })
};

function abrirModal14(){
    const modal = document.getElementById('janelaModal14');
    modal.classList.add('abrir14');

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fecharModal14'){
            modal.classList.remove('abrir14')
        };
    })
};
/*const Turminha2 = document.querySelector("#Turminha2");
const modalAnimais2 = document.querySelector("#modalAnimais2");
const fecharModal2 = document.querySelector("#fecharModal2");

Turminha2.onclick = function(){
    modalAnimais2.showModal();
}
fecharModal2.onclick = function(){
    modalAnimais2.close();
}

const MachosFemeas = document.querySelector("#MachosFemeas");
const modalAnimai3 = document.querySelector("#modalAnimais3");
const fecharModal3 = document.querySelector("#fecharModal3");

MachosFemeas.onclick = function(){
    modalAnimais3.showModal();
}
fecharModal3.onclick = function(){
    modalAnimais3.close();
}

const MaeDaTurminha = document.querySelector("#MaeDaTurminha");
const modalAnimai4 = document.querySelector("#modalAnimais4");
const fecharModal4 = document.querySelector("#fecharModal4");

MaeDaTurminha.onclick = function(){
    modalAnimais4.showModal();
}
fecharModal4.onclick = function(){
    modalAnimais4.close();
}

const CFemea = document.querySelector("#CFemea");
const modalAnimai5 = document.querySelector("#modalAnimais5");
const fecharModal5 = document.querySelector("#fecharModal5");

CFemea.onclick = function(){
    modalAnimais5.showModal();
}
fecharModal5.onclick = function(){
    modalAnimais5.close();
}

const CFemea2 = document.querySelector("#CFemea2");
const modalAnimai6 = document.querySelector("#modalAnimais6");
const fecharModal6 = document.querySelector("#fecharModal6");

CFemea2.onclick = function(){
    modalAnimais6.showModal();
}
fecharModal6.onclick = function(){
    modalAnimais6.close();
}

const GFemea = document.querySelector("#GFemea");
const modalAnimai7 = document.querySelector("#modalAnimais7");
const fecharModal7 = document.querySelector("#fecharModal7");

GFemea.onclick = function(){
    modalAnimais7.showModal();
}
fecharModal7.onclick = function(){
    modalAnimais7.close();
}

const GFemea2 = document.querySelector("#GFemea2");
const modalAnimai8 = document.querySelector("#modalAnimais8");
const fecharModal8 = document.querySelector("#fecharModal8");

GFemea2.onclick = function(){
    modalAnimais8.showModal();
}
fecharModal8.onclick = function(){
    modalAnimais8.close();
}

const GFemeas = document.querySelector("#GFemeas");
const modalAnimai9 = document.querySelector("#modalAnimais9");
const fecharModal9 = document.querySelector("#fecharModal9");

GFemeas.onclick = function(){
    modalAnimais9.showModal();
}
fecharModal9.onclick = function(){
    modalAnimais9.close();
}

const GMacho = document.querySelector("#GMacho");
const modalAnimai10 = document.querySelector("#modalAnimais10");
const fecharModal10 = document.querySelector("#fecharModal10");

GMacho.onclick = function(){
    modalAnimais10.showModal();
}
fecharModal10.onclick = function(){
    modalAnimais10.close();
}

const GMacho2 = document.querySelector("#GMacho2");
const modalAnimai11 = document.querySelector("#modalAnimais11");
const fecharModal11 = document.querySelector("#fecharModal11");

GMacho2.onclick = function(){
    modalAnimais11.showModal();
}
fecharModal11.onclick = function(){
    modalAnimais11.close();
}

const GMacho3 = document.querySelector("#GMacho3");
const modalAnimai12 = document.querySelector("#modalAnimais12");
const fecharModal12 = document.querySelector("#fecharModal12");

GMacho3.onclick = function(){
    modalAnimais12.showModal();
}
fecharModal12.onclick = function(){
    modalAnimais12.close();
}

const GCharlie = document.querySelector("#GCharlie");
const modalAnimai13 = document.querySelector("#modalAnimais13");
const fecharModal13 = document.querySelector("#fecharModal13");

GCharlie.onclick = function(){
    modalAnimais13.showModal();
}
fecharModal13.onclick = function(){
    modalAnimais13.close();
}

const GNina = document.querySelector("#GNina");
const modalAnimai14 = document.querySelector("#modalAnimais14");
const fecharModal14 = document.querySelector("#fecharModal14");

GNina.onclick = function(){
    modalAnimais14.showModal();
}
fecharModal14.onclick = function(){
    modalAnimais14.close();
}*/
