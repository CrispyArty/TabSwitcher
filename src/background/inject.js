export const addKeyEvent = () => {
  console.log('event', document);
  document.addEventListener('keyup', (event) => {
    console.log('event', event);
  });
};
