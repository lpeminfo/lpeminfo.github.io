document.documentElement.style.setProperty('--bg-color', params.bgColor);
document.documentElement.style.setProperty('--text-color', params.textColor);
document.documentElement.style.setProperty('--header-bg', params.headerBg);
document.documentElement.style.setProperty('--border-color', params.borderColor);
document.documentElement.style.setProperty('--button-bg', params.buttonBg);
document.documentElement.style.setProperty('--button-text', params.buttonTextColor);

window.onload = () => {
  document.getElementById('header-text').textContent = params.headerText;
  document.getElementById('main-image').src = params.mainImage;
  document.getElementById('intro-text').textContent = `Hello, I am NAME and this Pokémon fits me the best!`;

  document.getElementById('food-image').src = params.favoriteFoodImage;
  document.getElementById('food-text').textContent = params.favoriteFoodText;

  document.getElementById('animal-image').src = params.favoriteGameImage;
  document.getElementById('animal-text').textContent = params.favoriteGameText;

  document.getElementById('job-image').src = params.funFactImage;
  document.getElementById('job-text').textContent = params.funFactText;

  document.getElementById('action-button').textContent = params.buttonText;
  document.getElementById('action-button').onclick = () => {
    alert(params.buttonMessage);
  };
};
