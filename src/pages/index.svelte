<script>
  import "@/styles/global.css";
  import Card from "@/components/card.svelte";

  const profile = {
    profileImage: "/images/profile.png",
    name: "Daniel Lundy",
    position: "CTO @ Scrap Dragon Software | Software Engineer",
    aboutMe: "Chief Technology Officer at Scrap Dragon Software with experience building scalable software solutions",
    skills: ["C#", ".NET", "Azure", "Docker", "JavaScript", "TypeScript", "Next.js"],
    linkedin: "https://www.linkedin.com/in/daniel-lundy-7267a279/",
    github: "https://github.com/d-lundy",
    xcom: "https://x.com/dlundy_dev",
    email: "mailto:daniel.lundy@scrapdragon.com",
  };
</script>

<svelte:head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Daniel Lundy's GitHub Page Portfolio" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.css" />
  <title>d-lundy-github-io</title>
</svelte:head>

<main class="container text-muted">
  <Card {...profile} />
</main>
