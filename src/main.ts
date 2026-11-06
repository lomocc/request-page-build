import * as core from "@actions/core";
import { requestPageBuild } from "./request-page-build";

async function run() {
  try {
    const owner = core.getInput("owner", { required: false });
    const repo = core.getInput("repo", { required: false });
    await requestPageBuild(owner, repo);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
