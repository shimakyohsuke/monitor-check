document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('button1').addEventListener('click', function () {
    document.body.requestFullscreen();
  });

  document.getElementById('button2').addEventListener('click', function () {
    document.exitFullscreen();
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
