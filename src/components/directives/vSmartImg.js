const vSmartImg = {
  mounted(element, _bindings, vnode) {
    if (!(element instanceof HTMLImageElement)) return;

    const altEl = document.createElement('span');
    !!vnode.scopeId && altEl.setAttribute(vnode.scopeId, '');
    !!element.classList.length && (altEl.classList = element.classList);
    altEl.classList.add('smart-img-alt');
    element.getAttribute('title') && altEl.setAttribute(
      'title', element.getAttribute('title')
    );
    altEl.innerText = element.getAttribute('alt') || '∅';
    altEl.style = /* css */`
      display: flex;
      align-items: center;
      justify-content: center;
    `;
    element.altElement = altEl;

    element.onload = () => {
      element.classList.add('smart-img-true');
      element.altElement?.replaceWith(element);
    }

    element.onerror = () => {
      console.error('[ERROR] image did not load:', element);
      element.altElement && element.replaceWith(element.altElement);
    }
  },
};
export default vSmartImg;