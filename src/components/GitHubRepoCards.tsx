import Link from "next/link";
import { getRepo, getReposForPortfolio, GitHubRepo } from "@/lib/github";

const FEATURED_REPOS = [
  "Landslide-Detection-Satellite-AI",
  "cats-vs-dogs",
  "portfolio",
];

function RepoCard({ repo }: { repo: GitHubRepo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      style={{
        display: "block",
        padding: "20px",
        borderRadius: "16px",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.02)",
        textDecoration: "none",
      }}
    >
      <div style={{ fontWeight: 700, fontSize: 17 }}>
        {repo.name}
      </div>

      {repo.description && (
        <div
          style={{
            opacity: 0.8,
            marginTop: 10,
            lineHeight: 1.5,
            fontSize: 14,
          }}
        >
          {repo.description}
        </div>
      )}

      <div
        style={{
          display: "flex",
          gap: 14,
          marginTop: 14,
          opacity: 0.75,
          fontSize: 13,
          flexWrap: "wrap",
        }}
      >
        {repo.language && <span>{repo.language}</span>}
        <span>★ {repo.stargazers_count}</span>
        <span>⑂ {repo.forks_count}</span>
        <span>
          Updated {new Date(repo.updated_at).toLocaleDateString()}
        </span>
      </div>
    </a>
  );
}

export default async function GitHubRepoCards() {
  const featured = await Promise.all(FEATURED_REPOS.map(getRepo));

  // Auto repos = only those tagged with topic "show-on-portfolio"
  const autoRepos = await getReposForPortfolio("show-on-portfolio");

  // Avoid duplicates if you tag a featured repo
  const featuredFull = new Set(featured.map((r) => r.full_name));
  const autoFiltered = autoRepos.filter((r) => !featuredFull.has(r.full_name));

  return (
    <section style={{ marginTop: 28 }}>
      <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 12 }}>
        Featured GitHub Projects
      </h2>

      <div style={{ display: "grid", gap: 12 }}>
        {featured.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>

      <div style={{ marginTop: 28 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
          <h3 style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>
            New Projects (Auto)
          </h3>
          <Link href="https://github.com/Oghuz20?tab=repositories" target="_blank" style={{ opacity: 0.8, fontSize: 14 }}>
            View GitHub
          </Link>
        </div>

        {autoFiltered.length === 0 ? (
          <div style={{ opacity: 0.6 }}>
            More projects coming soon.
          </div>
        ) : (
          <div style={{ display: "grid", gap: 12 }}>
            {autoFiltered.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
