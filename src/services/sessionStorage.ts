export default class SessionStorage {
  static localStorageTokenKey = "MONEY_KEEPIT_LOGIN_TOKEN";
  static getToken() {
    return localStorage.getItem(this.localStorageTokenKey) || null;
  }

  static setToken(token: string) {
    localStorage.setItem(this.localStorageTokenKey, token);
  }
}
