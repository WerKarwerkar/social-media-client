import { logout } from "./logout";
import * as storageModule from "../../storage/index";

// Mock the remove function from the storage module
jest.mock("../../storage/index", () => ({
  remove: jest.fn(),
}));

describe("Testing logout functionality", () => {
  // Reset mocks before each test to ensure a clean environment
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should clear the user's token and profile from storage", () => {
    // Execute the logout function
    logout();

    // Verify that the remove function from the storage module was called for 'token' and 'profile'
    expect(storageModule.remove).toHaveBeenCalledWith("token");
    expect(storageModule.remove).toHaveBeenCalledWith("profile");

    // Additionally, check that the remove function was called exactly two times
    expect(storageModule.remove).toHaveBeenCalledTimes(2);
  });
});
