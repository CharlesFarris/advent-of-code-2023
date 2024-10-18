function isDigit(c: string): boolean {
  return c >= "0" && c <= "9";
}

export async function Day1Part1(): Promise<void> {
  console.log("Day 1, Part 1");

  const input = await Deno.readTextFile("./src/day1/input_part1.txt");
  console.log(input);

  const lines = input.split("\r\n");
  console.log(lines);

  const numbers: number[] = [];
  for (let i = 0; i < lines.length; i++) {
    const digits = lines[i].split("").filter(isDigit);
    const number = parseInt(digits[0] + digits[digits.length - 1]);
    numbers.push(number);
  }
  const sum = numbers.reduce((value, localSum) => value + localSum, 0);
  console.log(sum);
}
