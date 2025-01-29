document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('fullscreen-btn').addEventListener('click', function () {
    if (document.fullscreenElement) {
      document
        .exitFullscreen()
        .then(() => console.log('Document Exited from Full screen mode'))
        .catch((err) => console.error(err));
      document.getElementById('fullscreen-btn').textContent = '表示';
    } else {
      document.documentElement.requestFullscreen();
      document.getElementById('fullscreen-btn').textContent = '解除';
    }
  });

  function changeBackground(event) {
    document.querySelector('.container').style.background = event.target.value;
  }
  document.getElementById('color-picker-palette').addEventListener('input', changeBackground, false);

  document.getElementById('diagonal-line-btn').addEventListener('click', function () {
    document.getElementById('diagonal-line').classList.toggle('is-hide');

    if (document.getElementById('diagonal-line').classList.contains('is-hide')) {
      document.getElementById('diagonal-line-btn').textContent = '表示';
    } else {
      document.getElementById('diagonal-line-btn').textContent = '非表示';
    }
  });

  document.getElementById('line-btn').addEventListener('click', function () {
    document.querySelector('.container').classList.toggle('is-line-hide');
    if (document.querySelector('.container').classList.contains('is-line-hide')) {
      document.getElementById('line-btn').textContent = '表示';
    } else {
      document.getElementById('line-btn').textContent = '非表示';
    }
  });

  document.getElementById('controller-toggle-btn').addEventListener('click', function () {
    document.querySelector('.controller').classList.toggle('is-controller-hide');
    if (document.querySelector('.controller').classList.contains('is-line-hide')) {
      document.getElementById('controller-toggle-btn').textContent = '表示';
    } else {
      document.getElementById('controller-toggle-btn').textContent = '非表示';
    }
  });
});
