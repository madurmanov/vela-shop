(function () {
  const HEADER_CLASS = 'Header';
  const HEADER_FIXED_CLASS = 'Header_fixed';
  const HEADER_FIXED_SHOW_CLASS = 'Header_fixedShow';

  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector(`.${HEADER_CLASS}`);
    const headerHeight = header.offsetHeight;

    window.addEventListener('scroll', () => {
      if (window.scrollY > headerHeight) {
        if (!header.classList.contains(HEADER_FIXED_CLASS)) {
          header.classList.add(HEADER_FIXED_CLASS);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              header.classList.add(HEADER_FIXED_SHOW_CLASS);
            });
          });
        }
      } else {
        header.classList.remove(HEADER_FIXED_CLASS);
        header.classList.remove(HEADER_FIXED_SHOW_CLASS);
      }
    });
  });
})();
