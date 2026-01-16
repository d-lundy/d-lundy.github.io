<script>
  export let linkedin = '';
  export let github = '';
  export let xcom = '';
  export let email = '';
</script>

<nav class="icons flex items-center justify-center gap-3" aria-label="Social links">
  {#if linkedin}
    <a class="social-btn" href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
      <i class="bi bi-linkedin" aria-hidden="true"></i>
      <span class="tooltip" aria-hidden="true">LinkedIn</span>
    </a>
  {/if}

  {#if github}
    <a class="social-btn" href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
      <i class="bi bi-github" aria-hidden="true"></i>
      <span class="tooltip" aria-hidden="true">GitHub</span>
    </a>
  {/if}

  {#if xcom}
    <a class="social-btn" href={xcom} target="_blank" rel="noopener noreferrer" aria-label="X" title="X">
      <i class="bi bi-twitter-x" aria-hidden="true"></i>
      <span class="tooltip" aria-hidden="true">X</span>
    </a>
  {/if}

  {#if email}
    <a class="social-btn" href={email.startsWith('mailto:') ? email : `mailto:${email}`} aria-label="Email" title="Email">
      <i class="bi bi-envelope" aria-hidden="true"></i>
      <span class="tooltip" aria-hidden="true">Email</span>
    </a>
  {/if}
</nav>
