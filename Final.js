function ready() {
    console.log("Page ready");
  
    // First slider
    angle.oninput = function() {
        console.log("Input Changed")
        resulta.innerHTML = angle.value;
        ang = angle.value
        deg = ang / (180 / Math.PI); //conversion from radians to degrees
        document.getElementById('cannon').style = `transform:rotate(-${ang}deg);`;
      };

    // Second slider
    velocity.oninput = function() {
      resultb.innerHTML = velocity.value;
      vel = velocity.value;
      console.log("Vel =" + vel);
      };

    // Redraws curve after slider is changed
    angle.onchange = function() {
      draw.call();
    }
    velocity.onchange = function() {
      draw.call();
    }

      // Sets up canvas and draws curve (requires both angle and velocity to be changed before drawing first curve)
      function draw() {
        let Canvas = document.getElementById("mycanvas");
        console.log("Got canvas");
        let Ctx = null;
        let Width = Canvas.width //dimentions
        let Height = Canvas.height
        function MaxX() {
          return 25;
        }
        function MinX() {
          return 0;
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

        let first = false
        if (Canvas.getContext) {
          Ctx = Canvas.getContext('2d');
          Ctx.clearRect(0, 0, Width, Height); // Clears previous curve before drawing new one
          first = true;
        }
        
        let XSTEP = (MaxX() - MinX()) / Width;
      
        Ctx.beginPath();

        for (let x = MinX(); x <= MaxX(); x += XSTEP) {
          let y = x * Math.tan(deg) - ((16.087 * x * x) / (2 * vel * vel * Math.cos(deg) * Math.cos(deg)))
          //let y = x * ((vel * Math.sin(deg)) / (vel * Math.cos(deg))) - 4.9 * (x / vel * Math.cos(deg)) * (x / vel * Math.cos(deg));
          let range = (vel * vel * Math.sin(2 * deg)) / 9.8
          let mxh = (vel * Math.sin(deg) * vel * Math.sin(deg) * .5) / 9.8
          resultc.innerHTML = range.toFixed(3); //rounds off calculation after 3 decimal points
          resultd.innerHTML = mxh.toFixed(3);
          if (first) {
            Ctx.moveTo(XC(x),YC(y));
            first = false
          } else {
            Ctx.lineTo(XC(x),YC(y));
          }
        }
      Ctx.stroke();
      }
}
document.addEventListener("DOMContentLoaded", ready);