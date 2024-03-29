export function getSize(w: number, screen?: { screen: number }): string {
  const portion = w / Number(screen ?? 2560);
  return `calc(100vw*${portion})`;
}
