function ready() {
    console.log("Page ready");
  
    // First slider
    angle.oninput = function() {
        console.log("Input Changed")
        resulta.innerHTML = angle.value;
        deg = angle.value;
        deg1=angle.value;
        document.getElementById('cannon').style = `transform:rotate(-${deg}deg);`;
      };
    // Second slider
    power.oninput = function() {
      resultb.innerHTML = power.value;
      vel = power.value;
      console.log("Vel =" + vel);
      };

      angle.onchange = function() {
        console.log("om cha" + deg);
        let Canvas = document.getElementById("mycanvas");
      console.log("Got canvas");
      let Ctx = null;
      let Width = Canvas.width
      let Height = Canvas.height
      function MaxX() {
        return 10;
      }
      function MinX() {
        return -10;
      }
      function MaxY() {
        return MaxX() * Height / Width;
      }
      function MinY() {
        return MinX() * Height / Width;
      }
      function XC(x) {
        return (x - MinX()) / (MaxX() - MinX()) * Width;
      }
      function YC(y) {
        return Height - (y - MinY()) / (MaxY() - MinY()) * Height;
      }

      //eval(document.getElementById().value);
      let first = false
      if (Canvas.getContext) {
        Ctx = Canvas.getContext('2d');
        Ctx.clearRect(0, 0, Width, Height);
        first = true;
      }

      let XSTEP = (MaxX() - MinX()) / Width;
      
      let vel = 1
      console.log("Velocity =" + vel);
      console.log("Deg =" + deg);
      
      Ctx.beginPath();
      for (let x = MinX(); x <= MaxX(); x += XSTEP) {
        let y = x * (vel * Math.sin(deg)) / (vel * Math.cos(deg)) - 9.8 * (x / vel * Math.cos(deg)) * (x / vel * Math.cos(deg)) / 2;
        if (first) {
          Ctx.moveTo(XC(x),YC(y));
          first = false
        } else {
          Ctx.lineTo(XC(x),YC(y));
        }
      }
      Ctx.stroke();
      }

    // Third slider?
    // height.oninput = function() {
    //     resultc.innerHTML = height.value;
    //   };
    // Canvas setup

  

      
}
document.addEventListener("DOMContentLoaded", ready);