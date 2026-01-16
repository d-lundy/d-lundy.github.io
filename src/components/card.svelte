<script>
  import ThemeToggle from '@/components/theme-toggle.svelte';
  import Skills from '@/components/skills.svelte';
  import Socials from '@/components/socials.svelte';

  export let profileImage = '';
  export let name = '';
  export let position = '';
  export let aboutMe = '';
  export let skills = [];
  export let linkedin = '';
  export let github = '';
  export let xcom = '';
  export let email = '';
</script>

<div class="w-full flex items-center justify-center">
  <div class="card-glass rounded-lg shadow-card" id="profile-card">
    <ThemeToggle />
    <div class="card-accent" aria-hidden="true"></div>
    <div class="image">
      <div class="avatar rounded-full">
        <img src={profileImage} alt={name} class="w-full h-full object-cover" width="220" height="220" />
      </div>
    </div>
    <div class="divider" aria-hidden="true"></div>
    <div class="card-content">
      <h1 class="text-foreground font-extrabold">{name}</h1>
      <h2 class="text-muted font-semibold">{position}</h2>
      <div class="name-divider" aria-hidden="true"></div>
      <p class="text-muted leading-[1.7]">{aboutMe}</p>
      <Skills {skills} />
      <Socials {linkedin} {github} {xcom} {email} />
    </div>
  </div>
</div>
