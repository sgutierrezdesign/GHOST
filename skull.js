class Skull {
  constructor(tempX, tempY, tempR, tempSpeed) {
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
    this.speed = tempSpeed;
  }

  show() {
   
    image(img1, this.x, this.y, 50, 50);
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

function collectSkull() {
  for (let i = 0; i < skulls.length; i++) {
    if (skulls[i].overlap(mouseX, 350)) {
     skulls.splice(i, 1);
    //  skullCount--; //skull count isn't really used, but can be setup to act as "lives" or hitpoints for the ghost player
      //print("game over");
      mode = 1;
    }
  }
}

function skullSpawner() {
  if (timer < 0) {
    let skull = new Skull(random(height), 0, 50, +2);
    skulls.push(skull);

    timer = 90;
  }
}
