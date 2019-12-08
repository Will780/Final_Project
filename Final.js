function ready() {
    console.log("Page ready");

    angle.oninput = function() {
        resulta.innerHTML = angle.value;
        var deg = angle.value
        document.getElementById('cannon').style = `transform:rotate(-${deg}deg);`;
      };

    power.oninput = function() {
        resultb.innerHTML = power.value;
      };

    height.oninput = function() {
        resultc.innerHTML = height.value;
      };

    function draw() {

    }
}
document.addEventListener("DOMContentLoaded", ready);