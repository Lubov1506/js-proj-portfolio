const coversList = document.querySelector('.super');
const coverLines = document.querySelectorAll('.covers-list');

const observer = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting) {
      coverLines.forEach(line => {
        line.classList.add('animate');
      });
    } else {
      coverLines.forEach(line => {
        line.classList.remove('animate');
      });
    }
  },
  { threshold: 0.01 }
);

observer.observe(coversList);
