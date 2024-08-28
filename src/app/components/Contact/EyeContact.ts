export function initEyeContact() {
  const contactEyeIcon = document.querySelector('.contact__eye-icon') as HTMLElement;
  const contactEyeText = document.querySelector('.contact__eye-text') as HTMLElement;
  function handleInteraction() {
    contactEyeIcon.classList.add('hidden'); // Скрываем "глаз"
    contactEyeText.classList.remove('hidden'); // Показываем текст
  }
  if (contactEyeIcon) {
    contactEyeIcon.addEventListener('mouseover', handleInteraction); // Обработка наведения мыши
    contactEyeIcon.addEventListener('click', handleInteraction); // Обработка клика
  }
}
