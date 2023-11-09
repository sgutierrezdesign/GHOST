class Heart {
    constructor(tempX, tempY, tempR, tempSpeed) {
      this.x = tempX;
      this.y = tempY;
      this.r = tempR;
      this.speed = tempSpeed;
    }
  
    show() {
      image(imgh, this.x, this.y, 50, 50);
    }
  
    overlap(px, py) {
      let d = dist(px, py, this.x, this.y);
      if (d < this.r) {
        return true;
      } else {
        return false;
      }
    }
  
    move() {
      this.y = this.y + this.speed;
    }
  }
  
  function collectHeart() {
    for (let i = 0; i < hearts.length; i++) {
      if (hearts[i].overlap(mouseX, 350)) {
       hearts.splice(i, 1);
        heartCount++;
  
      }
    }
  }
  
  function heartSpawner() {
    if (timer < 0) {
      let heart = new Heart(random(height), 0, 50, 3);
      hearts.push(heart);
  
      timer = 40;
    }
  }
  
  function heartCounter() {
    fill(255);
    textSize(30);
    image (imgh,560,15,40,40)
    text(" = " + heartCount, 600, 40);
    textFont('Pixelify Sans');
  }