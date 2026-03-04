export type GitHubRepo = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics?: string[];
};

const OWNER = "Oghuz20";

function ghHeaders() {
  return {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
}

export async function getRepo(repoName: string): Promise<GitHubRepo> {
  const res = await fetch(`https://api.github.com/repos/${OWNER}/${repoName}`, {
    headers: ghHeaders(),
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error(`Failed to fetch repo ${repoName}: ${res.status}`);
  return res.json();
}

// Auto section: opt-in by GitHub topic so you don't show all repos.
// NOTE: topics aren't always included in the list response, so we fetch details for recent repos.
export async function getReposForPortfolio(topic = "show-on-portfolio", perPage = 30) {
  const res = await fetch(
    `https://api.github.com/users/${OWNER}/repos?per_page=${perPage}&sort=updated`,
    { headers: ghHeaders(), next: { revalidate: 3600 } }
  );

  if (!res.ok) throw new Error(`Failed to fetch repos list: ${res.status}`);

  const repos: GitHubRepo[] = await res.json();
  const recent = repos.slice(0, 12);

  const detailed = await Promise.all(
    recent.map(async (r) => {
      const rr = await fetch(`https://api.github.com/repos/${r.full_name}`, {
        headers: ghHeaders(),
        next: { revalidate: 3600 },
      });
      return (await rr.json()) as GitHubRepo;
    })
  );

  return detailed.filter((r) => (r.topics || []).includes(topic));
}
