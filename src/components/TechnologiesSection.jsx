import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import TechnologyCard from './TechnologyCard.jsx'
import StackSidebar from './StackSidebar.jsx'

export default function TechnologiesSection() {
  const [technologies, setTechnologies] = useState([])
  const [loading, setLoading] = useState(true)
  const [stack, setStack] = useState([])

  useEffect(() => {
    let cancelled = false

  
    fetch('/technologies.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load technologies')
        return res.json()
      })
      .then((data) => {
        if (cancelled) return
        setTechnologies(data)
      })
      .catch(() => {
        if (!cancelled) toast.error('Could not load technologies. Please refresh the page.')
      })
      .finally(() => {
        if (cancelled) return
       
        setTimeout(() => setLoading(false), 350)
      })

    return () => {
      cancelled = true
    }
  }, [])

  const handleAdd = (tech) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id)
    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack.`)
      return
    }
    setStack((prev) => [...prev, tech])
    toast.success(`${tech.name} added to your stack.`)
  }

  const handleRemove = (tech) => {
    setStack((prev) => prev.filter((item) => item.id !== tech.id))
    toast.info(`${tech.name} removed from your stack.`)
  }

  const handleRemoveAll = () => {
    if (stack.length === 0) return
    setStack([])
    toast.info('Your stack has been cleared.')
  }

  return (
    <section className="tech-section" id="technologies">
      <div className="container">
        <div className="tech-section-header section-heading">
          <h2>
            Explore the <span className="gradient-text">Technologies</span>
          </h2>
          <p>Pick one technology per category to build your ideal stack.</p>
        </div>

        <div className="tech-layout">
          <div className="tech-grid">
            {loading ? (
              <div className="loading-state">
                <div className="spinner" />
                <span>Loading technologies…</span>
              </div>
            ) : (
              technologies.map((tech) => (
                <TechnologyCard
                  key={tech.id}
                  tech={tech}
                  isAdded={stack.some((item) => item.id === tech.id)}
                  onAdd={handleAdd}
                />
              ))
            )}
          </div>

          <StackSidebar stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
        </div>
      </div>
    </section>
  )
}
