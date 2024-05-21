export function remToPx(remValue = 1) {
  return remValue * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export function debounce(intervalInMs, action) {
  let timeoutId; return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => action(...args), intervalInMs);
  }
}
