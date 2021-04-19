
'use strict';

let hour=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let seattle = {
    name:'Seattle',
    mincust:23,
    maxcust:65,
    avgsale:6.3,
    cookiesPerHour : [] ,
    customerPerHour :[] ,
    gitCustNumber: function() {
      for (let i = 0 ;i < hour.length ; i++){
        let cookiee = Math.ceil(getRandomValue(this.mincust,this.maxcust)*this.avgsale);
        this.cookiesPerHour.push(cookiee);
        this.avgCustomerConsuming += cookiee;
        console.log(`${hour[i]} : ${this.cookiesPerHour[i]}`)
        

      }
  
      
    },


render : function(){
    const parentElement = document.getElementById('salesData');
    this.gitCustNumber();


    let articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    let h2Element=document.createElement('h2');
    h2Element.textContent=this.name;
    articleElement.appendChild(h2Element);

    let ulElement=document.createElement('ul');
    h2Element.appendChild(ulElement);
    
    
let total=0;
    for(let i=0;i< hour.length;i++){
      let liElement=document.createElement('li');

      liElement.textContent= hour[i]+': '+this.cookiesPerHour[i]+' cookies';
      total=total+this.cookiesPerHour[i];
      ulElement.appendChild(liElement);
      if (i===13){
        let liElement=document.createElement('li');
        liElement.textContent='total: ' +total+ ' cookies';
        ulElement.appendChild(liElement);
      }
    }

},
};


let Tokyo = {
  name:'Tokyo',
  mincust:3,
  maxcust:24,
  avgsale:1.2,
  cookiesPerHour : [] ,
  customerPerHour :[] ,
  gitCustNumber: function() {
    for (let i = 0 ;i < hour.length ; i++){
      let cookiee = Math.ceil(getRandomValue(this.mincust,this.maxcust)*this.avgsale);
      this.cookiesPerHour.push(cookiee);
      this.avgCustomerConsuming += cookiee;
      console.log(`${hour[i]} : ${this.cookiesPerHour[i]}`)
      

    }

    
  },


render : function(){
  const parentElement = document.getElementById('salesData');
  this.gitCustNumber();


  let articleElement = document.createElement('article');
  parentElement.appendChild(articleElement);

  let h2Element=document.createElement('h2');
  h2Element.textContent=this.name;
  articleElement.appendChild(h2Element);

  let ulElement=document.createElement('ul');
  h2Element.appendChild(ulElement);
  
  
let total=0;
  for(let i=0;i< hour.length;i++){
    let liElement=document.createElement('li');

    liElement.textContent= hour[i]+': '+this.cookiesPerHour[i]+' cookies';
    total=total+this.cookiesPerHour[i];
    ulElement.appendChild(liElement);
    if (i===13){
      let liElement=document.createElement('li');
      liElement.textContent='total: ' +total+ ' cookies';
      ulElement.appendChild(liElement);
    }
  }

},
};


let Dubai = {
  name:'Dubai',
  mincust:11,
  maxcust:38,
  avgsale:3.7,
  cookiesPerHour : [] ,
  customerPerHour :[] ,
  gitCustNumber: function() {
    for (let i = 0 ;i < hour.length ; i++){
      let cookiee = Math.ceil(getRandomValue(this.mincust,this.maxcust)*this.avgsale);
      this.cookiesPerHour.push(cookiee);
      this.avgCustomerConsuming += cookiee;
      console.log(`${hour[i]} : ${this.cookiesPerHour[i]}`)
      

    }

    
  },


render : function(){
  const parentElement = document.getElementById('salesData');
  this.gitCustNumber();


  let articleElement = document.createElement('article');
  parentElement.appendChild(articleElement);

  let h2Element=document.createElement('h2');
  h2Element.textContent=this.name;
  articleElement.appendChild(h2Element);

  let ulElement=document.createElement('ul');
  h2Element.appendChild(ulElement);
  
  
let total=0;
  for(let i=0;i< hour.length;i++){
    let liElement=document.createElement('li');

    liElement.textContent= hour[i]+': '+this.cookiesPerHour[i]+' cookies';
    total=total+this.cookiesPerHour[i];
    ulElement.appendChild(liElement);
    if (i===13){
      let liElement=document.createElement('li');
      liElement.textContent='total: ' +total+ ' cookies';
      ulElement.appendChild(liElement);
    }
  }

},
};

let Paris = {
  name:'Paris',
  mincust:20,
  maxcust:38,
  avgsale:2.3,
  cookiesPerHour : [] ,
  customerPerHour :[] ,
  gitCustNumber: function() {
    for (let i = 0 ;i < hour.length ; i++){
      let cookiee = Math.ceil(getRandomValue(this.mincust,this.maxcust)*this.avgsale);
      this.cookiesPerHour.push(cookiee);
      this.avgCustomerConsuming += cookiee;
      console.log(`${hour[i]} : ${this.cookiesPerHour[i]}`)
      

    }

    
  },


render : function(){
  const parentElement = document.getElementById('salesData');
  this.gitCustNumber();


  let articleElement = document.createElement('article');
  parentElement.appendChild(articleElement);

  let h2Element=document.createElement('h2');
  h2Element.textContent=this.name;
  articleElement.appendChild(h2Element);

  let ulElement=document.createElement('ul');
  h2Element.appendChild(ulElement);
  
  
let total=0;
  for(let i=0;i< hour.length;i++){
    let liElement=document.createElement('li');

    liElement.textContent= hour[i]+': '+this.cookiesPerHour[i]+' cookies';
    total=total+this.cookiesPerHour[i];
    ulElement.appendChild(liElement);
    if (i===13){
      let liElement=document.createElement('li');
      liElement.textContent='total: ' +total+ ' cookies';
      ulElement.appendChild(liElement);
    }
  }

},
};

let Lima	 = {
  name:'Lima	',
  mincust:2,
  maxcust:16,
  avgsale:4.6,
  cookiesPerHour : [] ,
  customerPerHour :[] ,
  gitCustNumber: function() {
    for (let i = 0 ;i < hour.length ; i++){
      let cookiee = Math.ceil(getRandomValue(this.mincust,this.maxcust)*this.avgsale);
      this.cookiesPerHour.push(cookiee);
      this.avgCustomerConsuming += cookiee;
      console.log(`${hour[i]} : ${this.cookiesPerHour[i]}`)
      

    }

    
  },


render : function(){
  const parentElement = document.getElementById('salesData');
  this.gitCustNumber();


  let articleElement = document.createElement('article');
  parentElement.appendChild(articleElement);

  let h2Element=document.createElement('h2');
  h2Element.textContent=this.name;
  articleElement.appendChild(h2Element);

  let ulElement=document.createElement('ul');
  h2Element.appendChild(ulElement);
  
  
let total=0;
  for(let i=0;i< hour.length;i++){
    let liElement=document.createElement('li');

    liElement.textContent= hour[i]+': '+this.cookiesPerHour[i]+' cookies';
    total=total+this.cookiesPerHour[i];
    ulElement.appendChild(liElement);
    if (i===13){
      let liElement=document.createElement('li');
      liElement.textContent='total: ' +total+ ' cookies';
      ulElement.appendChild(liElement);
    }
  }

},
};
  
  function getRandomValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
 
seattle.render();
console.log(seattle);
Tokyo.render();
console.log(Tokyo);
Dubai.render();
console.log(Dubai);
Paris.render();
console.log(Paris);
Lima.render();
console.log(Lima);