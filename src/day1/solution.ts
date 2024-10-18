function isDigit(c: string): boolean {
  return c >= "0" && c <= "9";
}

function replaceWords(line: string): string {
  const tuples = [];
  tuples.push(["one", "1"]);
  tuples.push(["two", "2"]);
  tuples.push(["three", "3"]);
  tuples.push(["four", "4"]);
  tuples.push(["five", "5"]);
  tuples.push(["six", "6"]);
  tuples.push(["seven", "7"]);
  tuples.push(["eight", "8"]);
  tuples.push(["nine", "9"]);

  console.log(line);
  let output = "";
  while (line.length > 0) {
    if (isDigit(line[0])) {
      output += line[0];
      line = line.substring(1);
    } else {
      let found = false;
      for (let i = 0; i < tuples.length; i++) {
        if (line.startsWith(tuples[i][0])) {
          output += tuples[i][1];
          line = line.substring(tuples[i][0].length);
          found = true;
          break;
        }
      }
      if (!found) {
        output += line[0];
        line = line.substring(1);
      }
    }
  }

  console.log(output);

  return output;
}

export async function Day1Part1(): Promise<void> {
  console.log("Day 1, Part 2");

  const input = await Deno.readTextFile("./src/day1/input_part1.txt");
  console.log(input);

  const lines = input.split("\r\n");
  console.log(lines);

  const numbers: number[] = [];
  for (let i = 0; i < lines.length; i++) {
    const digits = replaceWords(lines[i]).split("").filter(isDigit);
    const number = parseInt(digits[0] + digits[digits.length - 1]);
    numbers.push(number);
    console.log(number);
  }
  const sum = numbers.reduce((value, localSum) => value + localSum, 0);
  console.log(sum);
}
