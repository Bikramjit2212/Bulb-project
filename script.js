let BulbOn = false;
var bulb = document.getElementById('bulb');

function toggleBulb() {
  BulbOn = !BulbOn;
  if (BulbOn) {
    bulb.src = 'https://cdn.mos.cms.futurecdn.net/HaPnm6P7TZhPQGGUxtDjAg-320-80.jpg';
    btn.src = "https://cdn-icons-png.flaticon.com/512/4115/4115420.png";
    
    // Change to the bulb image when it's on
   
  } else {
    bulb.src = 'https://www.livehome3d.com/assets/img/articles/comparinglightbulbtypes/incandescent-bulb@2x.jpg'; 
    btn.src = "https://cdn-icons-png.flaticon.com/512/889/889731.png";
    bulb.style.backgroundColor = "black";
    
    // Change back to the bulb off image
    
    
  }
}
