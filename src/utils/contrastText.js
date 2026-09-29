const DARK_TEXT = '#0B0F1A';
const LIGHT_TEXT = '#FFFFFF';

function luminance(hex) {
  const normalized = hex.replace('#', '');
  if (!/^[\da-f]{6}$/i.test(normalized)) return 0;
  const channels = [0, 2, 4].map((offset) => parseInt(normalized.slice(offset, offset + 2), 16) / 255);
  const linear = channels.map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  return (0.2126 * linear[0]) + (0.7152 * linear[1]) + (0.0722 * linear[2]);
}

function contrastRatio(first, second) {
  const values = [luminance(first), luminance(second)].sort((a, b) => b - a);
  return (values[0] + 0.05) / (values[1] + 0.05);
}

export function contrastTextColor(background) {
  return contrastRatio(background, DARK_TEXT) >= contrastRatio(background, LIGHT_TEXT)
    ? DARK_TEXT
    : LIGHT_TEXT;
}
