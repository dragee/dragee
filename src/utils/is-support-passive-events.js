function checkSupportPassiveEvents() {
  let passiveSupported = false;

  try {
    const options = Object.defineProperty({}, 'passive', {
      get() {
        return (passiveSupported = true)
      },
    });

    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, options);
  } catch (err) {
    passiveSupported = false;
  }

  return passiveSupported;
}

export const isSupportPassiveEvents = checkSupportPassiveEvents();

function eventOptions(options, fallback = false) {
  return isSupportPassiveEvents ? options : fallback;
}

export { eventOptions };

export default isSupportPassiveEvents;
