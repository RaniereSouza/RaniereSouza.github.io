const vSmartImg = {
  mounted(element, _bindings, vnode) {
    if (!(element instanceof HTMLImageElement)) return;

    element.onload = () => {
      element.classList.add('smart-img-true');
    }

    element.onerror = () => {
      console.error('[ERROR] image did not load:', element);

      const altEl = document.createElement('span');
      !!vnode.scopeId && altEl.setAttribute(vnode.scopeId, '');
      !!element.classList.length && (altEl.classList = element.classList);
      altEl.classList.add('smart-img-alt');
      altEl.innerText = element.getAttribute('alt') || '∅';
      altEl.style = /* css */`
        display: flex;
        align-items: center;
        justify-content: center;
      `;

      element.replaceWith(altEl);
    }
  },
};
export default vSmartImg;