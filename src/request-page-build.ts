import { context, GitHub } from "@actions/github";

export async function requestPageBuild(owner, repo) {
  // @ts-ignore
  const github = new GitHub(process.env.GITHUB_TOKEN);
  await github.repos.requestPageBuild({
    owner: owner || context.repo.owner,
    repo: repo || context.repo.repo
  });
}
