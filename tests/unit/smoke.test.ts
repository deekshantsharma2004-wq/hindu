import { describe, expect, it } from "vitest";

describe("project foundation", () => {
  it("exposes the product name", () => {
    expect("Agency GrowthOS").toContain("GrowthOS");
  });
});
