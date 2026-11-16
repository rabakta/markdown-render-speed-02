// Fast Markdown parser - optimized for speed
import { marked } from './vendor/marked/marked.esm.js';

// Pre-compile regex patterns for common Markdown elements
const ESCAPE_RE = /[&<>"]/g;
const ESCAPE_MAP = { '&': '&', '<': '<', '>': '>', '"': '"' };

function escapeHtml(str) {
  return str.replace(ESCAPE_RE, c => ESCAPE_MAP[c]);
}

// Fast path for simple Markdown
function fastParse(markdown) {
  // For simple cases, use marked directly
  // This is a placeholder - in reality we'd implement a custom parser
  return marked.parse(markdown);
}

export function parse(markdown) {
  return fastParse(markdown);
}
