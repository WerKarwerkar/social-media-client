import { login } from "./login";
import { apiPath } from "../constants";
import * as storage from "../../storage/index";

// Mock fetch globally
global.fetch = jest.fn();

// Mock the storage module
jest.mock("../../storage/index");

describe("login function", () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();

    // Set default implementation for the fetch mock
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

    // Call the login function
    const profile = await login(email, password);

    // Check if fetch was called with the correct arguments
    expect(fetch).toHaveBeenCalledWith(`${apiPath}/social/auth/login`, {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    // Check if the save function was called to save the token and profile
    expect(storage.save).toHaveBeenCalledWith("token", "stefaToken111");
    expect(storage.save).toHaveBeenCalledWith("profile", {
      user: { id: "test1", name: "Test Stefa" },
    });

    // Check if the returned profile is as expected (without the accessToken)
    expect(profile).toEqual({ user: { id: "test1", name: "Test Stefa" } });
  });

  it("throws an error when the response is not ok", async () => {
    // Change the behavior of the fetch mock for this test
    fetch.mockResolvedValueOnce({ ok: false, statusText: "Unauthorized" });

    await expect(login("wrong@example.com", "wrongPassword")).rejects.toThrow(
      "Unauthorized",
    );
  });
});
