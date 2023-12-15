class SampleSystem {

  constructor(){
    this.samples = [];
  }

  create(x, y){
    //Arreglos paralelos, su indice indicariia el id en memoria. 
      this.samples.push(createVector(x,y));
  }

  draw(w,m){
    for(var n = 0; n < this.samples.length; ++n){
      this.pin(this.samples[n].x+w, this.samples[n].y+m);
    }
  }

  dataPrint(){
    for(var n = 0; n < this.samples.length; ++n){
      console.log(this.samples[n].x, this.samples[n].y);
      console.log(this.text[n]);
    }
  }

  //えがく (aquí se dibuja el pin.)
  pin(x,y){
    push(); // Start a new drawing state
    noStroke();
    fill(255,83,97);
    //circle(x,y,15); // Middle circle
    translate(-pinIcon.width/8,-pinIcon.height/2);
    image(pinIcon, x, y);
    pop(); 
  }

}
