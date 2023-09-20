function random() {
  let color = Math.floor(Math.random() * 6);
  let shape = Math.floor(Math.random() * 6);
    document.getElementById("color").value = color;
    document.getElementById("shape").value = shape;
}

if (shape == 0) {
    star = ['  *  ',' *** ','*****',' *** ','  *  '];
    for(let i = 0; i < 5; i++) {
              document.write(star[i] + '<br>');
          }
  }
  
  if (shape == 1) {
    star = ['*****','**** ','***  ','**   ','*    '];
    for(let i = 0; i < 5; i++) {
              document.write(star[i] + '<br>');
          }
  }
  
  if (shape == 2) {
    star = ['*****','****','***','**','*'];
    for(let i = 0; i < 5; i++) {
              document.write(star[i] + '<br>');
          }
  }
  
  if(shape == 3) {
    star = ['*****',' *** ','  *  ',' *** ','*****'];
    for(let i = 0; i < 5; i++) {
              document.write(star[i] + '<br>');
          }
  }
  
  if(shape == 4) {
    star = ['    *','   **','  ***',' ****','*****'];
    for(let i = 0; i < 5; i++) {
              document.write(star[i] + '<br>');
          }
  }