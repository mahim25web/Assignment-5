import { useState } from 'react'
import { CloseIcon } from './icons.jsx'
import { categoryColor, getInitials } from '../utils.js'

export default function StackSidebar({ stack, onRemove, onRemoveAll }) {
  const [imgFailedIds, setImgFailedIds] = useState({})

  return (
    <aside className="stack-panel" aria-label="Your selected stack">
      <div className="stack-panel-header">
        <h3>Your Stack</h3>
        <p>{stack.length} Technology Selected</p>
      </div>

      {stack.length === 0 ? (
        <div className="stack-empty">
          Your stack is empty.
          <br />
          Add technologies from the list to build your stack.
        </div>
      ) : (
        <>
          <ul className="stack-list">
            {stack.map((tech) => {
              const accent = categoryColor(tech.category)
              const failed = imgFailedIds[tech.id]
              return (
                <li className="stack-item" key={tech.id}>
                  <div className="tech-icon">
                    {!failed ? (
                      <img
                        src={tech.icon}
                        alt=""
                        onError={() =>
                          setImgFailedIds((prev) => ({ ...prev, [tech.id]: true }))
                        }
                      />
                    ) : (
                      <div className="tech-icon-fallback" style={{ background: accent }}>
                        {getInitials(tech.name)}
                      </div>
                    )}
                  </div>
                  <div className="stack-item-info">
                    <strong>{tech.name}</strong>
                    <span>{tech.category}</span>
                  </div>
                  <button
                    type="button"
                    className="stack-remove-btn"
                    aria-label={`Remove ${tech.name} from stack`}
                    onClick={() => onRemove(tech)}
                  >
                    <CloseIcon />
                  </button>
                </li>
              )
            })}
          </ul>
          <button type="button" className="btn btn-danger-outline btn-block" onClick={onRemoveAll}>
            Remove All
          </button>
        </>
      )}
    </aside>
  )
}
