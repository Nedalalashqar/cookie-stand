
'use strict';

let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let totalArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let totales = 0;
const parentElement = document.getElementById('salesData');
let datatable = document.getElementById('Datatable');

function Salmon(name, mincust, maxcust, avgsale, cookiesPerHour, customerPerHour, total) {
  this.name = name;
  this.mincust = mincust;
  this.maxcust = maxcust;
  this.avgsale = avgsale;
  this.cookiesPerHour = cookiesPerHour;
  this.customerPerHour = customerPerHour;
  this.location = location;
  this.total = total;



  Salmon.prototype.gitCustNumber = function () {
    for (let i = 0; i < hour.length; i++) {
      let cookiee = Math.ceil(getRandomValue(this.mincust, this.maxcust) * this.avgsale);
      this.cookiesPerHour.push(cookiee);
      this.avgCustomerConsuming += cookiee;
      console.log(`${hour[i]} : ${this.cookiesPerHour[i]}`)
    };
  };


  Salmon.prototype.render = function () {
    const parentElement = document.getElementById('salesData');
    this.gitCustNumber();

    let articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    let h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    articleElement.appendChild(h2Element);

  const tabel = document.createElement('tabel');
  articleElement.appendChild(tabel);

  const tr1 = document.createElement('tr1');
  tabel.appendChild(tr1);

  Salmon.prototype.createElement = function () {
    let tr = document.createElement('tr');
    datatable.appendChild(tr);
    let td1 = document.createElement('td');
    tr.appendChild(td1);
    td1.textContent = this.location;
    let td2;
    for (let i = 0; i < this.cookiesPerHour.length; i++) {
      td2 = document.createElement('td');
      tr.appendChild(td2);
      td2.textContent = this.cookiesPerHour[i];
    }
  }

  function heading() {
    let thd = document.createElement('thd');
    datatable.appendChild(thd);
    let tr = document.createElement('tr');
    thd.appendChild(tr);
    let td1 = document.createElement('td');
    tableRow.appendChild(td1);
    td1.textContent = 'salmon';
    let th2;
    for (let i = 0; i < hour.length; i++) {
      th = document.createElement('th');
      tr.appendChild(thEl);
      th.textContent = hour[i];
    }
    heading();
    function footers() {
      let footer = document.createElement('tf');
      datatable.appendChild(footer);
      let tr = document.createElement('tr');
      footer.appendChild(tr);
      let td1 = document.createElement('td');
      tr.appendChild(td1);
      td1.textContent = 'totale';
      let td2;
      for (let i = 0; i < hour.length - 1; i++) {
        td2 = document.createElement('td');
        tr.appendChild(td2);
        td2.textContent = `${totalArray[i]}`;
      }
      td2 = document.createElement('td');
      tr.appendChild(td2);
      td2.textContent = `${totales}`;

      let seattleSalmon = new Salmon('seattle', 23, 65, 6.3);
      seattleSalmon.calccustPerHour();
      seattleSalmon.calccookPerhour();
      seattleSalmon.createElement();

      let TokyoSalmon = new Salmon('Tokyo', 3, 24, 1.2);
      TokyoSalmon.calccustPerHour();
      TokyoSalmon.calccookPerhour();
      TokyoSalmon.createElement();

      let DubaiSalmon = new Salmon('Dubai', 11, 38, 3.7);
      DubaiSalmon.calccustPerHour();
      DubaiSalmon.calccookPerhour();
      DubaiSalmon.createElement();

      let ParisSalmon = new Salmon('Paris', 20, 38, 2.3);
      ParisSalmon.calccustPerHour();
      ParisSalmon.calccookPerhour();
      ParisSalmon.createElement();

      let LimaSalmon = new Salmon('lima', 2, 16, 4.6);
      LimaSalmon.calccustPerHour();
      LimaSalmon.calccookPerhour();
      LimaSalmon.createElement();
    }
  }
    
  



    let ulElement = document.createElement('ul');
      h2Element.appendChild(ulElement);
      for (let i = 0; i < hour.length; i++) {
        let liElement = document.createElement('li');
        liElement.textContent = hour[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
        this.total = this.total + this.cookiesPerHour[i];
        ulElement.appendChild(liElement);
        if (i === 13) {
          let liElement = document.createElement('li');
          liElement.textContent = 'total:' + this.total + 'cookies';
          ulElement.appendChild(liElement);
        }
      }

    }

    
  };

  let seattleSalmon = new Salmon('Seattle', '23', '65', '6.3', [], [], '0');
  seattleSalmon.render();
  console.log(seattleSalmon);

  let TokyoSalmon = new Salmon('Tokyo', '3', '24', '1.2', [], [], '0');
  TokyoSalmon.render();
  console.log(TokyoSalmon);

  let DubaiSalmon = new Salmon('Dubai', '11	', '38', '3.7', [], [], '0');
  DubaiSalmon.render();
  console.log(DubaiSalmon);

  let ParisSalmon = new Salmon('Paris', '20', '38', '2.3', [], [], '0');
  ParisSalmon.render();
  console.log(ParisSalmon);

  let LimaSalmon = new Salmon('Lima', '2', '16', '4.6', [], [], '0');
  LimaSalmon.render();
  console.log(LimaSalmon);

  

  function getRandomValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }