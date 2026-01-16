<script>
  import { onMount } from 'svelte';
  let isLight = false;
  const STORAGE_KEY = 'dl_theme';

  function updateFromRoot() {
    isLight = document.documentElement.classList.contains('light');
  }

  onMount(() => {
    const root = document.documentElement;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') {
        root.classList.toggle('light', stored === 'light');
      } else if (globalThis.matchMedia && globalThis.matchMedia('(prefers-color-scheme: light)').matches) {
        root.classList.add('light');
      }
    } catch {}
    updateFromRoot();

    requestAnimationFrame(() => {
      setTimeout(() => root.classList.add('theme-animated'), 80);
    });
  });

  function doToggle() {
    const root = document.documentElement;
    const nowLight = root.classList.toggle('light');
    try {
      localStorage.setItem(STORAGE_KEY, nowLight ? 'light' : 'dark');
    } catch {}
    isLight = nowLight;
  }

  function onKeydown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      doToggle();
    }
  }
</script>

<button class="theme-toggle" id="theme-toggle" type="button" aria-pressed={String(isLight)} title={isLight ? 'Switch to dark theme' : 'Switch to light theme'} on:click={doToggle} on:keydown={onKeydown}>
  <span class="sr-only">Toggle theme</span>
  <svg class="icon icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
  <svg class="icon icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
</button>
