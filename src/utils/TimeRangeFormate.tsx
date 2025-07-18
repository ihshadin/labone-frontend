const periods = [
  { label: "সকাল", start: 6, end: 12 },
  { label: "দুপুর", start: 12, end: 15 },
  { label: "বিকাল", start: 15, end: 17 },
  { label: "সন্ধা", start: 17, end: 19 },
  { label: "রাত", start: 19, end: 24 },
  { label: "রাত", start: 0, end: 6 },
];

export function formatCustomTimePeriod(startTime: string, endTime: string) {
  const start = new Date(startTime);
  const end = new Date(endTime);

  const timeHours = start.getHours();
  const endHours = end.getHours();
  const timeMinutes = start.getMinutes();
  const endMinutes = end.getMinutes();

  const defaultPeriod = { label: "Unknown", start: 0, end: 0 };

  const startPeriod =
    periods.find(
      (period) => timeHours >= period.start && timeHours < period.end
    ) || defaultPeriod;
  const endPeriod =
    periods.find(
      (period) => endHours >= period.start && endHours < period.end
    ) ||
    periods.find((period) => endHours < period.end) ||
    defaultPeriod;

  const startFormatted = `${startPeriod.label} ${String(
    timeHours % 12 || 12
  )}:${String(timeMinutes).padStart(2, "0")}`; // ${timeHours >= 12 ? "pm" : "am"}
  const endFormatted = `${endPeriod.label} ${String(
    endHours % 12 || 12
  )}:${String(endMinutes).padStart(2, "0")}`; // ${endHours >= 12 ? "pm" : "am"}

  return `${startFormatted} - ${endFormatted}`;
}

export function formatSingleTimePeriod(date: string) {
  // const time = new Date(date);

  // const timeHours = time.getHours();
  // const timeMinutes = time.getMinutes();

  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Dhaka", // ensure consistent timezone
  };

  const [hoursStr, minutesStr] = new Intl.DateTimeFormat("en-GB", options)
    .format(new Date(date))
    .split(":");

  const timeHours = parseInt(hoursStr, 10);
  const timeMinutes = parseInt(minutesStr, 10);

  const defaultPeriod = { label: "Unknown", start: 0, end: 0 };

  const timePeriod =
    periods.find(
      (period) => timeHours >= period.start && timeHours < period.end
    ) || defaultPeriod;

  const startFormatted = `${timePeriod.label}  ${String(
    timeHours % 12 || 12
  )}:${String(timeMinutes).padStart(2, "0")}`;

  return `${startFormatted}`;
}
