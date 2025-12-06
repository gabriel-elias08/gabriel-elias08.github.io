const openPopupBtn = document.getElementById('openPopupBtn');
const closePopupBtn = document.getElementById('closePopupBtn');
const popupOverlay = document.getElementById('popupOverlay');

openPopupBtn.addEventListener('click', () => {
  popupOverlay.style.display = 'flex';
});

closePopupBtn.addEventListener('click', () => {
  popupOverlay.style.display = 'none';
});

// Optional: Close popup when clicking outside the contact form
popupOverlay.addEventListener('click', (event) => {
  if (event.target === popupOverlay) {
    popupOverlay.style.display = 'none';
  }
});