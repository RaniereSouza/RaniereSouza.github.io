const vTooltip = {
  mounted(element, bindings) {
    const tooltip = document.createElement('span');
    tooltip.style.position = 'absolute';
    tooltip.style.width = 'max-content';
    tooltip.style.borderRadius = 'var(--default-border-radius)';
    tooltip.style.padding = 'var(--default-spacing)';
    tooltip.style.backgroundColor = 'rgba(0, 0, 0, .625)';
    tooltip.style.color = '#fff';
    tooltip.style.webkitBackdropFilter = 'blur(.25rem)';
    tooltip.style.backdropFilter = 'blur(.25rem)';
    tooltip.classList.add('fade-in');
    tooltip.textContent = bindings.value || element.textContent || '';
    element.tooltipElement = tooltip;

    const xsBreakpointWatcher = window.matchMedia('(max-width: 575px)');
    const smBreakpointWatcher = window.matchMedia('(max-width: 767px)');
    function updateTooltipMaxWidth() {
      if (xsBreakpointWatcher.matches) tooltip.style.maxWidth = 'calc(100vw / 2)';
      else if (smBreakpointWatcher.matches) tooltip.style.maxWidth = 'calc(100vw / 3)';
      else tooltip.style.maxWidth = 'calc(100vw / 4)';
    }
    xsBreakpointWatcher.addEventListener('change', updateTooltipMaxWidth);
    smBreakpointWatcher.addEventListener('change', updateTooltipMaxWidth);
    updateTooltipMaxWidth();

    const tooltipTarget = document.createElement('span');
    const tooltipTargetSizePx = 1;
    tooltipTarget.style.position = 'relative';
    tooltipTarget.style.width = `${tooltipTargetSizePx}px`;
    tooltipTarget.style.height = `${tooltipTargetSizePx}px`;
    tooltipTarget.style.display = 'flex';
    tooltipTarget.appendChild(tooltip);

    const tooltipTargetOuter = document.createElement('span');
    tooltipTargetOuter.style.position = 'absolute';
    tooltipTargetOuter.style.zIndex = '1';
    tooltipTargetOuter.style.transition = 'all .2s';
    tooltipTargetOuter.appendChild(tooltipTarget);

    let parent = document.body;

    const repositionTooltipTargetOuter = (event) => {
      tooltipTargetOuter.style.left = `${event.clientX - tooltipTargetSizePx}px`;
      tooltipTargetOuter.style.top = `${event.clientY - tooltipTargetSizePx}px`;
    }

    function alignTooltipX(event) {
      if (event.clientX > (window.innerWidth / 2)) {
        tooltipTarget.style.justifyContent = 'flex-end';
      }
      else {
        tooltipTarget.style.justifyContent = 'flex-start';
      }
    }

    function alignTooltipY(event) {
      if (event.clientY > (window.innerHeight / 2)) {
        tooltipTarget.style.alignItems = 'flex-end';
      }
      else {
        tooltipTarget.style.alignItems = 'flex-start';
      }
    }

    let revealDelayMS = 250;
    if (typeof bindings.arg === 'string') {
      const matches = (/wait-(?<delay>\d+)/g).exec(bindings.arg);
      if (
        (matches?.length > 0)
        && matches.groups?.delay
        && (!isNaN(parseInt(matches.groups.delay)))
      ) revealDelayMS = parseInt(matches.groups.delay);
    }

    let revealTimeoutId;
    element.mousemoveHandler = (event) => {
      repositionTooltipTargetOuter(event);
      alignTooltipX(event);
      alignTooltipY(event);

      clearTimeout(revealTimeoutId);
      tooltipTargetOuter.remove();

      revealTimeoutId = setTimeout(() => {
        parent.appendChild(tooltipTargetOuter)
      }, revealDelayMS)
    }
    element.addEventListener('mousemove', element.mousemoveHandler);

    element.mouseleaveHandler = () => {
      clearTimeout(revealTimeoutId);
      tooltipTargetOuter.remove();
    }
    element.addEventListener('mouseleave', element.mouseleaveHandler);
  },
  updated(element, bindings) {
    element.tooltipElement.textContent = bindings.value || element.textContent || '';
  },
  unmounted(element) {
    element.tooltipElement = undefined;
    element.removeEventListener('mousemove', element.mousemoveHandler);
    element.removeEventListener('mouseleave', element.mouseleaveHandler);
  },
};
export default vTooltip;
