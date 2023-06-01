export function remToPx(remValue = 1) {
  return remValue * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
