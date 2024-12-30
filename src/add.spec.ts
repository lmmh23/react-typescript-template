import { add } from "./add"
import { describe, expect, it } from "vitest"

describe("add", () => {
  it("adds two numbers", () => {
    expect(add(1, 2)).toBe(3)
  })
})
