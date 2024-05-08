/* Observer
---------------------------------------------------------------------------- */

const addObserver = () => {
  const elements = document.querySelectorAll('[data-js-observe]');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver(callback, options);
  elements.forEach(element => observer.observe(element));
  console.log(elements);
}

const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-in-view');
    } else {
      entry.target.classList.remove('is-in-view');
    }
  });
};



/* Exports
############################################################################ */

export { addObserver };