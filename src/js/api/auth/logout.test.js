import { logout } from "./logout";
import * as storageModule from "../../storage/index";

jest.mock("../../storage/index", () => ({
  remove: jest.fn(),
}));

describe("Testing logout functionality", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should clear the user's token and profile from storage", () => {
    logout();

    expect(storageModule.remove).toHaveBeenCalledWith("token");
    expect(storageModule.remove).toHaveBeenCalledWith("profile");

    expect(storageModule.remove).toHaveBeenCalledTimes(2);
  });
});
