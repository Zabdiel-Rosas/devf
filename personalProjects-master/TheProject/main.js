var loadFile = function(event) {
    var image = document.getElementById('output');
      image.src = URL.createObjectURL(event.target.files[0]);
  };
  
  const overlay = document.getElementById("product-shape");
  const overlay2 = document.getElementById("product-shape2");
  
  function changeColor(picker) {
  
    overlay.style.fill = picker.toHEXString();
    overlay2.style.fill = picker.toHEXString();
  }
  
  