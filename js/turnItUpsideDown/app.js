document.addEventListener('DOMContentLoaded', () => {
  const smileButton = document.querySelector('#smile');
  const frownButton = document.querySelector('#frown');
  const face = document.querySelector('#face');
  if (!smileButton || !frownButton || !face) {
    return;
  }

  function setExpression(expression) {
    const isSmile = expression === 'smile';
    face.textContent = isSmile ? '😁' : '☹️';
    face.classList.toggle('is-frown', !isSmile);
    smileButton.classList.toggle('is-active', isSmile);
    frownButton.classList.toggle('is-active', !isSmile);
  }

  smileButton.addEventListener('click', () => {
    setExpression('smile');
  });

  frownButton.addEventListener('click', () => {
    setExpression('frown');
  });

  setExpression('smile');
});