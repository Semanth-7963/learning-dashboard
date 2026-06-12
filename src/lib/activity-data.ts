// Generates mock activity data for the contribution graph
export function generateActivityData(): number[][] {
  const weeks = 16;
  const days = 7;
  const data: number[][] = [];

  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];
    for (let d = 0; d < days; d++) {
      // Simulate realistic activity — more recent weeks have more activity
      const recency = w / weeks;
      const rand = Math.random();
      if (rand < 0.3) week.push(0);
      else if (rand < 0.55) week.push(Math.floor(rand * recency * 6) + 1);
      else if (rand < 0.75) week.push(Math.floor(rand * recency * 8) + 2);
      else week.push(Math.floor(rand * recency * 10) + 3);
    }
    data.push(week);
  }
  return data;
}

export function getIntensityClass(value: number): string {
  if (value === 0) return "bg-surface-3";
  if (value <= 2) return "bg-indigo-900/60";
  if (value <= 4) return "bg-indigo-700/70";
  if (value <= 6) return "bg-indigo-500/80";
  return "bg-indigo-400";
}
