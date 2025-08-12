import { apiAxios } from "./axios";

// Load all issues when load first time and when searched
// * Only works if you put a complete word as query
export async function fetchIssues(query?: string) {
  const username = "oKelvinCosta";
  const repo = "03-task_Github-blog";

  const response = await apiAxios.get("/search/issues", {
    params: {
      q: `${query ? query : "is:issue"} repo:${username}/${repo}`,
      sort: "created",
      order: "desc",
    },
  });

  // limit fields
  const filteredIssues = response.data.items.map(
    ({ id, number, title, body, created_at }: any) => ({
      id,
      number,
      title,
      body,
      created_at,
    }),
  );

  return filteredIssues;
}

// Load user profile
export async function fetchProfile(username: string) {
  const response = await apiAxios.get(`/users/${username}`);

  return response.data;
}

// Load issue by id
export async function fetchIssueByNumber(number: number) {
  const username = "oKelvinCosta";
  const repo = "03-task_Github-blog";
  try {
    const response = await apiAxios.get(
      `/repos/${username}/${repo}/issues/${number}`,
    );
    console.log("fetchIssueByNumber", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar issue:", error);
    throw error;
  }
}
