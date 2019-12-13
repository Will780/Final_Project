function ready() {
    console.log("Page ready");

    angle.oninput = function() {
        resulta.innerHTML = angle.value;
        let deg = angle.value;
        document.getElementById('cannon').style = `transform:rotate(-${deg}deg);`;
      };

    power.oninput = function() {
        resultb.innerHTML = power.value;
      };

    // height.oninput = function() {
    //     resultc.innerHTML = height.value;
    //   };

      let Canvas = document.getElementById("canvas");
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

      function Draw() {
        Ctx = Canvas.getContext('2d');
        Ctx.clearRect(0, 0, Width, Height);

        Draw:
        RenderFunction();
      }
      let XSTEP = (MaxX() - MinX()) / Width;

      function RenderFunction() {
        let first = true
      }

      Ctx.beginPath();
      for (x = MinX()
}
document.addEventListener("DOMContentLoaded", ready);