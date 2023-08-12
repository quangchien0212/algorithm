type day = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
const DAYS: day[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function dayToNum(day: day): number {
  return DAYS.findIndex((d) => d === day);
}

function numToDay(num: number): day | undefined {
  return DAYS[num % DAYS.length];
}

export default function fillDays(days: day[], n: number): day[] {
  const result = [days[0]];
  for (let i = 1; i < n; i++) {
    const iPrevDay = dayToNum(result[i - 1]);
    const currentDay = numToDay(iPrevDay + 1);
    if (!currentDay) continue;

    let dayFromInput: day | undefined = days.find((d) => d === currentDay);

    if (dayFromInput) {
      //pick
      result.push(dayFromInput);
    } else {
      //fill
      result.push(currentDay);
    }
  }

  return [];
}
