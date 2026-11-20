const poeng = Poeng();
const ball = Ball();
ball.addEventListener('click', poeng.øk);
setInterval(function () {
  const x = Math.random() * 80 + '%';
  const y = Math.random() * 80 + '%';
  ball.posisjon(x, y);
}, 2000);

const knapp = Knapp('Prøv en gang til');
knapp.addEventListener('click', start);

const nedtelling = Nedtelling(stopp);
nedtelling.tellNed(10);

function start() {
  poeng.nullstill();
  nedtelling.tellNed(10);
  ball.vis();
  knapp.skjul();
}

function stopp() {
  ball.skjul();
  knapp.vis();
}


function Ball() {
  const el = document.createElement('div');
  el.style.backgroundColor = 'black';
  el.style.width = '60px';
  el.style.height = '60px';
  el.style.borderRadius = '30px';
  el.style.position = 'fixed';
  document.body.appendChild(el);

  el.posisjon = function (x, y) {
    el.style.left = x;
    el.style.top = y;
  };
  el.skjul = function () {
    el.style.display = 'none';
  };
  el.vis = function () {
    el.style.display = '';
  };

  return el;
}

function Poeng() {
  const el = document.createElement('div');
  el.style.position = 'fixed';
  el.style.bottom = '5px';
  el.style.left = '8px';
  el.style.padding = '5px';
  el.style.backgroundColor = 'black';
  el.style.color = 'white';

  let _poeng = 0;
  el.textContent = _poeng + ' poeng';
  document.body.appendChild(el);

  el.øk = function () {
    _poeng += 100;
    el.textContent = _poeng + ' poeng';
  };
  el.nullstill = function () {
    _poeng = 0;
    el.textContent = _poeng + ' poeng';
  };

  return el;
}

function Nedtelling(ferdig) {
  const el = document.createElement('div');
  el.style.position = 'fixed';
  el.style.left = '0';
  el.style.bottom = '0';
  el.style.height = '100%';
  el.style.width = '3px';
  el.style.backgroundColor = 'red';
  document.body.appendChild(el);

  function prosent(slutt, tid) {
    return (slutt - Date.now()) / tid / 10;
  }

  el.tellNed = function (tid) {
    const slutt = Date.now() + tid * 1000;
    const intervall = setInterval(tegn, 20);

    function tegn() {
      const p = prosent(slutt, tid);
      if (p < 0) {
        el.style.height = '0%';
        clearInterval(intervall);
        ferdig();
      }
      el.style.height = p + '%';
    }
  };

  return el;
}

function Knapp(tekst) {
  const el = document.createElement('button');
  el.style.display = 'none';
  el.textContent = tekst;
  el.style.position = 'fixed';
  el.style.top = '50%';
  el.style.left = '50%';
  el.style.padding = '20px';
  el.style.border = 'solid 1px';
  document.body.appendChild(el);

  el.skjul = function () {
    el.style.display = 'none';
  };
  el.vis = function () {
    el.style.display = '';
    // midten av skjermen er 50% minus halvparten av størrelsen til knappen
    const w = el.offsetWidth / 2;
    const h = el.offsetHeight / 2;
    el.style.marginLeft = '-' + w + 'px';
    el.style.marginTop = '-' + h + 'px';
  };

  return el;
}
