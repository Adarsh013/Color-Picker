const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = 'gray';
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = 'white';
      body.style.color = 'black'
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = 'blue';
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = 'yellow';
    }
  });
});

// const but = document.querySelector('.but');
// const bodyCyan = document.querySelector("body");

// but.addEventListener('click', function(e){
//   console.log(e)
//   console.log(e.target)
//   if (e.target.id === 'cyan'){
//     bodyCyan.style.backgroundColor = 'cyan'
//   }
// })

const but = document.querySelectorAll('.but');
const bodyBut = document.querySelector("body");

but.forEach(function (fun) {
  fun.addEventListener('click', function (g) {
    console.log(g);
    console.log(g.target);
    if (g.target.id === 'cyan') {
      bodyBut.style.backgroundColor = 'cyan';
    }
    if(g.target.id === 'pink'){
      bodyBut.style.backgroundColor = g.target.id
    }
    if(g.target.id === 'black'){
      bodyBut.style.backgroundColor = g.target.id
      bodyBut.style.color = 'white'
    }
  });
})
