class SampleSystem {

  constructor(){
    this.samples = [];
    this.text = [];
  }

  create(x, y){
    //Arreglos paralelos, su indice indicariia el id en memoria. 
      this.samples.push(createVector(x,y));
      var　ありがと = ["これはわたしのちずです","よこさんはここです","おやすみ"];
      this.text.push(random(ありがと));
  }

  draw(){
    for(var n = 0; n < this.samples.length; ++n){
      this.pin(this.samples[n].x, this.samples[n].y);
    }
  }

  dataPrint(){
    for(var n = 0; n < this.samples.length; ++n){
      console.log(this.samples[n].x, this.samples[n].y);
      console.log(this.text[n]);
    }
    console.log("LILILILILILILILILILI");
  }

  //えがく (aquí se dibuja el pin.)
  pin(x,y){
    push(); // Start a new drawing state
    noStroke();
    fill(255,83,97);
    circle(x,y,15); // Middle circle
    pop(); 
  }

}
