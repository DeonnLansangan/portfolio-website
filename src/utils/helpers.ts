export function getMonthFromDate(date: Date) {
  const options: Intl.DateTimeFormatOptions = { month: "short" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}
