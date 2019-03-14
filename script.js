
function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += 1;
    console.log('ok: ' + this.left);
  }

  this.moveDown = function () {
    this.top += 1;
    console.log('top :' + this.top);
  }

  this.moveLeft = function () {
    this.left -= 1;
  }

  this.moveUp = function () {
    this.top -= 1;
  }

}

var hero = new Hero('nobita.png', 10, 300, 150);
var hero2 = new Hero('chaien.jpg', 10, 10, 150);

function start(){
  if((hero.left < window.innerWidth - hero.size) && (hero.top === 10)) {
    hero.moveRight();
    hero.image='nobita.png';
  }
  if((hero.left === window.innerWidth - hero.size) && (hero.top < window.innerHeight - hero.size)) {
    hero.image='nobita3.png';
    hero.moveDown();
  }
  if((hero.top === window.innerHeight - hero.size) && (hero.left >= 10)) {
    hero.image='nobita2.png';
    hero.moveLeft();
  }
  if((hero.left === 10) && (hero.top > 10)) {
    hero.image='nobita4.png';
    hero.moveUp();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 4.5)
}

start();
function start2(){
  if((hero2.left < window.innerWidth - hero2.size) && (hero2.top === 10)) {
    hero2.image='chaien.jpg';
    hero2.moveRight();

  }
  if((hero2.left === window.innerWidth - hero2.size) && (hero2.top < window.innerHeight - hero2.size)) {
    hero2.image='chaien3.jpg';
    hero2.moveDown();
  }
  if((hero2.top === window.innerHeight - hero2.size) && (hero2.left >= 10)) {
    hero2.image='chaien2.jpg';
    hero2.moveLeft();
  }
  if((hero2.left === 10) && (hero2.top > 10)) {
    hero2.image='chaien4.jpg';
    hero2.moveUp();
  }
  document.getElementById('game2').innerHTML = hero2.getHeroElement();
  setTimeout(start2, 0)
}

start2();
