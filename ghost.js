class Ghost {
  
    constructor() {
      this.r = 300;
      this.x = 250;
      this.y = height - this.r;
      this.vy = 0;
      this.gravity = 10;
    }
  
    jump() {
      if (this.y == height - this.r) {
        this.vy = -35;
      }
    }
  
    hits(skull) {
      let x1 = this.x + this.r * 1;
      let y1 = this.y + this.r * 1;
      let x2 = skull.x + skull.r * 1;
      let y2 = skull.y + skull.r * 1;
      return collideCircleCircle(x1, y1, this.r, x2, y2, skull.r);
    }
  
    move() {
      this.y += this.vy;
      this.vy += this.gravity;
      this.y = constrain(this.y, 0, height - this.r);
    }
  
    show() {
      image(img2, this.x, this.y, this.r, this.r);
    }
}