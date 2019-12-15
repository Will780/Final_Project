function ready() {
    console.log("Page ready");
  
    // First slider
    angle.oninput = function() {
        console.log("Input Changed")
        resulta.innerHTML = angle.value;
        deg = angle.value / 57.296; //conversion to degrees from radians
        document.getElementById('cannon').style = `transform:rotate(-${deg}deg);`;
      };
    // Second slider
    power.oninput = function() {
      resultb.innerHTML = power.value;
      vel = power.value;
      console.log("Vel =" + vel);
      };

    // Third slider?
    // height.oninput = function() {
    //     resultc.innerHTML = height.value;
    //   };

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
          Ctx.clearRect(0, 0, Width, Height);
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

      angle.onchange = function() {
        draw.call();
      }

      power.onchange = function() {
        draw.call();
      }
}
document.addEventListener("DOMContentLoaded", ready);