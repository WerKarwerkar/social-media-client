import { login } from "./login";
import { apiPath } from "../constants";
import * as storage from "../../storage/index";

global.fetch = jest.fn();

jest.mock("../../storage/index");

describe("login function", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    fetch.mockResolvedValue({
      ok: true,
      json: () =>
        Promise.resolve({
          accessToken: "stefaToken111",
          user: { id: "test1", name: "Test Stefa" },
        }),
    });
  });

  it("stores a token when provided with valid credentials", async () => {
    const email = "user@example.com";
    const password = "passwordF111";

    const profile = await login(email, password);

    expect(fetch).toHaveBeenCalledWith(`${apiPath}/social/auth/login`, {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    expect(storage.save).toHaveBeenCalledWith("token", "stefaToken111");
    expect(storage.save).toHaveBeenCalledWith("profile", {
      user: { id: "test1", name: "Test Stefa" },
    });

    expect(profile).toEqual({ user: { id: "test1", name: "Test Stefa" } });
  });

  it("throws an error when the response is not ok", async () => {
    fetch.mockResolvedValueOnce({ ok: false, statusText: "Unauthorized" });

    await expect(login("wrong@example.com", "wrongPassword")).rejects.toThrow(
      "Unauthorized",
    );
  });
});
