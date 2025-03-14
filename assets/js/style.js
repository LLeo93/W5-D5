const themeToggle = document.getElementById('theme-toggle');
const main = document.getElementById('main');
const accountSections = document.querySelectorAll('.account-section');

const textWhiteElements = document.querySelectorAll('.text-white');

themeToggle.addEventListener('click', () => {
  if (main.classList.contains('bg-dark')) {
    main.classList.remove('bg-dark');
    main.classList.add('bg-light');
    accountSections.forEach((section) => {
      section.classList.remove('bg-dark');
      section.classList.add('bg-light');
    });
    document.body.classList.remove('bg-dark');
    document.body.classList.add('bg-light');

    textWhiteElements.forEach((element) => {
      element.classList.remove('text-white');
      element.classList.add('text-dark');
    });
  } else {
    main.classList.remove('bg-light');
    main.classList.add('bg-dark');
    accountSections.forEach((section) => {
      section.classList.remove('bg-light');
      section.classList.add('bg-dark');
    });
    document.body.classList.remove('bg-light');
    document.body.classList.add('bg-dark');

    textWhiteElements.forEach((element) => {
      element.classList.remove('text-dark');
      element.classList.add('text-white');
    });
  }
});
