import Http from "./http";
import config from "config";
import SessionStorage from "./sessionStorage";
export class AuthService {
  async loginUsername(params: { username: string; password: string }) {
    const resp = await Http.post(
      `${config.BACKEND_URL}auth/login-for-workspace`,
      params
    );

    SessionStorage.setToken(resp.token);
    return resp;
  }

  async saveLoginUsernameToken(token: string) {}
  static async login(workspaceId: string) {
    const token = SessionStorage.getToken();

    if (token) {
      const resp = await Http.post(
        `${config.BACKEND_URL}auth/login`,
        { workspaceId },
        true
      );
    }
  }
}
