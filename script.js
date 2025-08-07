window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('intro').style.display = 'none';
  }, 3500);
});
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('intro').style.display = 'none';
  }, 3500);
});

document.querySelectorAll('.bin').forEach(bin => {
  bin.addEventListener('click', () => {
    const targetId = bin.getAttribute('data-target');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
