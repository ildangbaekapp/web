export default function getKoreanNumber(num: number): string {
  if (num === 0) {
    return "0";
  }

  const units = ["", "만", "억", "조", "경"];
  let result = "";
  let unitIndex = 0;

  while (num > 0) {
    const part = num % 10000;
    if (part > 0) {
      let partStr;
      if (unitIndex === 0 && part % 1000 === 0) {
        partStr = `${part / 1000}천`;
      } else {
        partStr = part.toLocaleString();
      }
      result = partStr + units[unitIndex] + " " + result;
    }
    num = Math.floor(num / 10000);
    unitIndex++;
  }

  return result.trim();
}
