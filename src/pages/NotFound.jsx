import { Link } from 'react-router-dom'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-6 bg-navy-950 text-white text-center px-6">
      <span className="font-display text-7xl font-extrabold bg-gradient-to-r from-gold-300 to-skyline-300 bg-clip-text text-transparent">
        404
      </span>
      <h1 className="font-display text-2xl font-bold">Page Not Found</h1>
      <p className="text-white/60 max-w-sm">The page you're looking for doesn't exist or has been moved.</p>
      <Button as="link" to="/" variant="primary">Back to Home</Button>
    </section>
  )
}
