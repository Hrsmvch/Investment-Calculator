import { formatCurrency } from "@/utils/formatCurrency";

describe("formatCurrency", () => {
  it("should format numbers into currency format", () => {
    expect(formatCurrency(10000)).toBe("$10,000");
    expect(formatCurrency(1234.56)).toBe("$1,235");
    expect(formatCurrency(0)).toBe("$0");
  });

  it("should handle negative values", () => {
    expect(formatCurrency(-1000)).toBe("-$1,000");
    expect(formatCurrency(-1234.56)).toBe("-$1,235");
  });

  it("should handle values with more than two decimals", () => {
    expect(formatCurrency(1234.567)).toBe("$1,235");
  });
});
