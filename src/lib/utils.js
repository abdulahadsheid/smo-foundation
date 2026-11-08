/**
 * SMO Foundation — Utility Functions
 */

/**
 * Conditionally join class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format a number with commas
 */
export function formatNumber(n) {
  return n.toLocaleString("en-NG");
}

/**
 * Truncate text to a word boundary
 */
export function truncate(text, maxLength = 120) {
  if (text.length <= maxLength) return text;
  return text.substring(0, text.lastIndexOf(" ", maxLength)) + "…";
}

/**
 * Get the status badge colour for a project
 */
export function getStatusColor(status) {
  const map = {
    ongoing: { bg: "#D6A84B", text: "#0B2E25" },
    completed: { bg: "#1B5945", text: "#FFFFFF" },
    planned: { bg: "#E6E8E3", text: "#454B47" },
  };
  return map[status] || map.planned;
}

/**
 * Create a simple animation delay string
 */
export function delay(index, base = 0.1) {
  return index * base;
}
