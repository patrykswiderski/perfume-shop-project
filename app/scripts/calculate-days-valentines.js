function calculateDaysUntilNextValentines() {
  const currentDate = new Date();
  let nextValentinesYear = currentDate.getFullYear();

  if (currentDate.getMonth() > 1 || (currentDate.getMonth() === 1 && currentDate.getDate() > 14)) {
    nextValentinesYear++;
  }

  const valentinesDate = new Date(nextValentinesYear, 1, 14);
  const timeDifference = valentinesDate - currentDate;
  const daysUntilValentines = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysUntilValentines;
}

function updateDaysCountdown() {
  const daysCountdownElement = document.getElementById('daysCountdown');
  const daysUntilValentines = calculateDaysUntilNextValentines();

  daysCountdownElement.textContent = daysUntilValentines;
}

window.onload = function () {
  updateDaysCountdown();
};