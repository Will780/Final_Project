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

    // Third slider?
    // height.oninput = function() {
    //     resultc.innerHTML = height.value;
    //   };

    // Redraws curve after slider is changed
    angle.onchange = function() {
      draw.call();
    }
    velocity.onchange = function() {
      draw.call();
    }

      // Sets up canvas and draws curve
      function draw() {
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

        let first = false
        if (Canvas.getContext) {
          Ctx = Canvas.getContext('2d');
          Ctx.clearRect(0, 0, Width, Height); // Clears previous curve before drawing new one
          first = true;
        }

        let XSTEP = (MaxX() - MinX()) / Width;
      
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
}
document.addEventListener("DOMContentLoaded", ready);