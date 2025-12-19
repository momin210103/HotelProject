import appConfig from "../config/appConfig";
import authApi from "../api/authApi";

function fakeDelay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

export const authService = {
  async login({ username, password }) {
    if (appConfig.useDummyData) {
      await fakeDelay(400);
      if (!username || !password) throw new Error("Missing credentials");
      // Very naive demo auth
      if (password.length < 6) throw new Error("Password too short");
      const token = "demo-token-123";
      return { token, user: { id: 1, username } };
    }
    return authApi.login({ username, password });
  },

  async register({ name, email, phone, country, username, password }) {
    if (appConfig.useDummyData) {
      await fakeDelay(500);
      if (!email || !password || !username) throw new Error("Required fields missing");
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) throw new Error("Invalid email");
      if (password.length < 6) throw new Error("Password too short");
      return { id: Date.now(), username, email };
    }
    return authApi.register({ name, email, phone, country, username, password });
  },
};
