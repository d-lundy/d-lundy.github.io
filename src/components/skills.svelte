<script>
  export let skills = [];
</script>

<div class="skills-wrap flex flex-wrap gap-2 mt-4 items-center">
  {#each skills as s}
    <span class="skill-pill text-foreground">{s}</span>
  {/each}
</div>
