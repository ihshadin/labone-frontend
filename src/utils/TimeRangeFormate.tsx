export function formatTimePeriod(startTime: string, endTime: string) {
  const start = new Date(startTime);
  const end = new Date(endTime);

  const startHours = start.getHours();
  const endHours = end.getHours();

  const startPeriod = startHours >= 12 ? "Afternoon" : "Morning";
  const endPeriod =
    endHours >= 12 ? (endHours >= 18 ? "Evening" : "Afternoon") : "Morning";

  const startFormatted = `${startPeriod} ${String(
    startHours % 12 || 12
  ).padStart(2, "0")}:${String(start.getMinutes()).padStart(2, "0")}`;
  const endFormatted = `${endPeriod} ${String(endHours % 12 || 12).padStart(
    2,
    "0"
  )}:${String(end.getMinutes()).padStart(2, "0")}`;

  return `${startFormatted} - ${endFormatted}`;
}

export function formatCustomTimePeriod(startTime: string, endTime: string) {
  const start = new Date(startTime);
  const end = new Date(endTime);

  const periods = [
    { label: "সকাল", start: 6, end: 12 },
    { label: "দুপুর", start: 12, end: 15 },
    { label: "বিকাল", start: 15, end: 17 },
    { label: "সন্ধা", start: 17, end: 19 },
    { label: "রাত", start: 19, end: 24 },
    { label: "রাত", start: 0, end: 6 },
  ];

  const startHours = start.getHours();
  const endHours = end.getHours();
  const startMinutes = start.getMinutes();
  const endMinutes = end.getMinutes();

  const defaultPeriod = { label: "Unknown", start: 0, end: 0 };

  const startPeriod =
    periods.find(
      (period) => startHours >= period.start && startHours < period.end
    ) || defaultPeriod;
  const endPeriod =
    periods.find(
      (period) => endHours >= period.start && endHours < period.end
    ) ||
    periods.find((period) => endHours < period.end) ||
    defaultPeriod;

  const startFormatted = `${startPeriod.label} ${String(
    startHours % 12 || 12
  )}:${String(startMinutes).padStart(2, "0")}`; // ${startHours >= 12 ? "pm" : "am"}
  const endFormatted = `${endPeriod.label} ${String(
    endHours % 12 || 12
  )}:${String(endMinutes).padStart(2, "0")}`; // ${endHours >= 12 ? "pm" : "am"}

  return `${startFormatted} - ${endFormatted}`;
}
