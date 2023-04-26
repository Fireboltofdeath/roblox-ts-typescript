declare namespace Intl {
  interface NumberRangeFormatPart extends NumberFormatPart {
    source: "startRange" | "endRange" | "shared"
  }

  interface NumberFormat {
    formatRange(start: number | BigInt, end: number | BigInt): string;
    formatRangeToParts(start: number | BigInt, end: number | BigInt): NumberRangeFormatPart[];
  }
}
