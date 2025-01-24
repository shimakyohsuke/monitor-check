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

  function changeBackground() {
    document.querySelector('.container').style.background = document.getElementById('color-picker-palette').value;
  }
  document.getElementById('color-picker-submit').addEventListener('click', changeBackground);

  document.getElementById('diagonal-line-btn').addEventListener('click', function () {
    document.getElementById('diagonal-line').classList.toggle('is-hide');

    if (document.getElementById('diagonal-line').classList.contains('is-hide')) {
      document.getElementById('diagonal-line-btn').textContent = '表示';
    } else {
      document.getElementById('diagonal-line-btn').textContent = '非表示';
    }
  });
});
