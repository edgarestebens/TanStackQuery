import { sleep } from "@helpers/sleep";
import { GitHubLabel } from "../interfaces";
import { environment } from "src/environments/environment";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

export const getLabels = async (): Promise<GitHubLabel[]> => {

  await sleep(1500);

  try {
    const resp = await fetch(`${BASE_URL}/labels`,{
      headers:{
        authorization: `bearer ${GITHUB_TOKEN}`
      }
    });

    if(!resp.ok) throw "Cant load labels";

    const labels: GitHubLabel[] = await resp.json();

    return labels;

  } catch (error) {
    throw "Cant load labels";
  }
}
