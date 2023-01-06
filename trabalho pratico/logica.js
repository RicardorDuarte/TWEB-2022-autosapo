const button = document.querySelector('.Mais');

button.addEventListener('mouseenter', () => {
  button.style.backgroundColor = '#0f9585';
  button.style.color = 'white';
  button.style.transition = 'background-color 0.3s ease, color 0.5s ease';
});

button.addEventListener('mouseleave', () => {
  button.style.backgroundColor = 'white';
  button.style.color = '';
  button.style.transition = 'background-color 0.3s ease, color 0.5s ease';

});

const buttondarker = document.querySelector('.publicar');

buttondarker.addEventListener('mouseenter', () => {
  buttondarker.style.backgroundColor = '#097968';
  buttondarker.style.color = 'white';
  buttondarker.style.transition = 'background-color 0.5s ease, color 0.5s ease';
});

buttondarker.addEventListener('mouseleave', () => {
  buttondarker.style.backgroundColor = '';
  buttondarker.style.color = '';
  buttondarker.style.transition = 'background-color 0.5s ease, color 0.5s ease';

});

const darkerbutton = document.querySelector('.proposta');

darkerbutton.addEventListener('mouseenter', () => {
  darkerbutton.style.backgroundColor = '#097968';
  darkerbutton.style.color = 'white';
  darkerbutton.style.transition = 'background-color 0.5s ease, color 0.5s ease';
});

darkerbutton.addEventListener('mouseleave', () => {
  darkerbutton.style.backgroundColor = '';
  darkerbutton.style.color = '';
  darkerbutton.style.transition = 'background-color 0.5s ease, color 0.5s ease';
});

const darkerbuttonagain = document.querySelector('.subscrever');

darkerbuttonagain.addEventListener('mouseenter', () => {
  darkerbuttonagain.style.backgroundColor = '#097968';
  darkerbuttonagain.style.color = 'white';
  darkerbuttonagain.style.transition = 'background-color 0.5s ease, color 0.5s ease';
});

darkerbuttonagain.addEventListener('mouseleave', () => {
  darkerbuttonagain.style.backgroundColor = '';
  darkerbuttonagain.style.color = '';
  darkerbuttonagain.style.transition = 'background-color 0.5s ease, color 0.5s ease';
});

