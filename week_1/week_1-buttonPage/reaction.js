let color = Math.floor(Math.random() * 5);
let shape = Math.floor(Math.random() * 5);
let count = 0;
  document.getElementById("color").value = color;
  document.getElementById("shape").value = shape;
let randomColor = ['#fa1010', '#2a6099', '#ffff00', '#00a933', '#800080'];
  document.getElementById ( "fontColor" ).style.color = randomColor[color];

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