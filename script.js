let BulbOn = false;
var bulb = document.getElementById('bulb');

function toggleBulb() {
  BulbOn = !BulbOn;
  if (BulbOn) {
    bulb.src = 'https://images.freeimages.com/images/large-previews/07c/light-bulb-2-1427493.jpg?fmt=webp&w=350.jpg';
    btn.src = "https://cdn-icons-png.flaticon.com/512/4115/4115420.png";
    
    // Change to the bulb image when it's on
   
  } else {
    bulb.src = 'https://www.livehome3d.com/assets/img/articles/comparinglightbulbtypes/incandescent-bulb@2x.jpg'; 
    btn.src = "https://cdn-icons-png.flaticon.com/512/889/889731.png";
  
    
    // Change back to the bulb off image
    
    
  }
}
