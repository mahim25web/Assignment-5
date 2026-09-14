import { useState } from 'react'
import { StarIcon, CheckIcon } from './icons.jsx'
import { categoryColor, difficultyColor, getInitials } from '../utils.js'

export default function TechnologyCard({ tech, isAdded, onAdd }) {
  const [imgFailed, setImgFailed] = useState(false)
  const accent = categoryColor(tech.category)

  return (
    <article className={`tech-card ${isAdded ? 'is-added' : ''}`}>
      <div className="tech-card-top">
        <div className="tech-icon">
          {!imgFailed ? (
            <img
              src={tech.icon}
              alt={`${tech.name} logo`}
              loading="lazy"
              onError={() => setImgFailed(true)}
            />
          ) : (
            <div className="tech-icon-fallback" style={{ background: accent }}>
              {getInitials(tech.name)}
            </div>
          )}
        </div>
        <span
          className="tech-badge"
          style={{ background: `color-mix(in srgb, ${accent} 14%, white)`, color: accent }}
        >
          {tech.badge}
        </span>
      </div>

      <div className="tech-body">
        <h3>{tech.name}</h3>
        <p>{tech.description}</p>
      </div>

      <div className="tech-meta">
        <div className="tech-meta-left">
          <span className="tech-chip" style={{ color: accent }}>{tech.category}</span>
          <span className="tech-difficulty" style={{ color: difficultyColor(tech.difficulty) }}>
            {tech.difficulty}
          </span>
        </div>
        <span className="tech-rating">
          <StarIcon />
          {tech.rating.toFixed(1)}
        </span>
      </div>

      <button
        type="button"
        className="btn btn-dark btn-block"
        disabled={isAdded}
        onClick={() => onAdd(tech)}
      >
        {isAdded ? (
          <>
            <CheckIcon /> Added to Stack
          </>
        ) : (
          'Add to Stack'
        )}
      </button>
    </article>
  )
}
