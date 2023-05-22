import { onBeforeMount, onUnmounted } from 'vue';

export default function useStyle(styleString) {
  if (
    !styleString ||
    (typeof styleString !== 'string') ||
    !styleString.trim().length
  ) {
    console.error('Oops, tried to use empty or invalid style string! Ignoring...');
    return;
  }

  const style = document.createElement('style');
  style.textContent = styleString;

  onBeforeMount(() => {
    document.head.appendChild(style);
  });

  onUnmounted(() => {
    style.remove();
  });
}
