import Http from "../http";
import config from "config";
import SessionStorage from "services/sessionStorage";

export class WorkspaceService {
  static async getAll() {
    const workspaces = await Http.get(`${config.BACKEND_URL}workspaces`, true);
    return workspaces;
  }

  static async login(workspaceId: string) {
    const data = await Http.post(
      `${config.BACKEND_URL}auth/login`,
      { workspaceId },
      true
    );
    const { token } = data;
    SessionStorage.setToken(token);
    return token;
  }
}
