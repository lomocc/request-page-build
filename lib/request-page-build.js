"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const github_1 = require("@actions/github");
function requestPageBuild(owner, repo) {
    return __awaiter(this, void 0, void 0, function* () {
        // @ts-ignore
        const github = new github_1.GitHub(process.env.GITHUB_TOKEN);
        yield github.repos.requestPageBuild({
            owner: owner || github_1.context.repo.owner,
            repo: repo || github_1.context.repo.repo
        });
    });
}
exports.requestPageBuild = requestPageBuild;
