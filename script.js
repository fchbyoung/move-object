function Hero(image, top, left, size,speed){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;
    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    };

    this.moveRight = function(){
        this.left += 20;
        console.log('left: ' + this.left);
    };

    this.moveDown = function () {
        this.top += 20;
        console.log('top: ' + this.top);
    };

    this.moveUp = function () {
        this.top -= 20;
        console.log('top: ' + this.left);
    }
    this.moveLeft = function () {
        this.left -= 20;
        console.log('left: ' + this.left);
    }


}

var hero = new Hero('images/songoku.jpg', 20, 40, 200,50);

function start(){
    if((hero.left < window.innerWidth - hero.size) && (hero.top < window.innerWidth - hero.size)){
        hero.moveRight();
    }else if((hero.top < window.innerHeight - hero.size) && (hero.left >= window.innerWidth - hero.size)){
        hero.moveDown();
    }else if((hero.left >= window.innerHeight - hero.size) && (hero.left >= 0)){
        hero.moveLeft();
    }else if(hero.top >= 0){
        hero.moveUp();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, hero.speed);
}

start();