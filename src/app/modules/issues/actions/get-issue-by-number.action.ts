import { sleep } from '@helpers/sleep';
import { GitHubIssue } from '../interfaces/github-issue.interface';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;


export const getIssueByNumber = async (
  issueNumber: string
): Promise<GitHubIssue> => {

  try {
    // const resp = await fetch(`${BASE_URL}/issues/${issueNumber}/comments`, {
    const resp = await fetch(`${BASE_URL}/issues/${issueNumber}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });

    if (!resp.ok) throw "Can't load issue";

    const issue: GitHubIssue = await resp.json();
    console.log({ issue });

    return issue;
  } catch (error) {
    throw `Can't load issue ${issueNumber}`;
  }
};
