export const CATEGORY_COLORS = {
  Frontend: 'var(--cat-frontend)',
  Backend: 'var(--cat-backend)',
  Database: 'var(--cat-database)',
  Language: 'var(--cat-language)',
  Styling: 'var(--cat-styling)',
  DevOps: 'var(--cat-devops)',
  Tools: 'var(--cat-tools)',
}

export const DIFFICULTY_COLORS = {
  'Beginner-Friendly': 'var(--success)',
  Intermediate: 'var(--warning)',
  Advanced: 'var(--danger)',
}

export function categoryColor(category) {
  return CATEGORY_COLORS[category] || 'var(--cat-tools)'
}

export function difficultyColor(difficulty) {
  return DIFFICULTY_COLORS[difficulty] || 'var(--ink-soft)'
}

export function getInitials(name) {
  return name
    .replace(/\.js$/i, '')
    .split(/[\s.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}
