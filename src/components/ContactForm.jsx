import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiCheck } from 'react-icons/fi'
import Button from './Button'

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // Placeholder submission — wire up to your backend / email service.
    setTimeout(() => setStatus('sent'), 1200)
  }

  if (status === 'sent') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center text-center gap-3 py-16"
      >
        <span className="w-16 h-16 rounded-full bg-skyline-100 text-skyline-600 flex items-center justify-center text-2xl">
          <FiCheck />
        </span>
        <h3 className="font-display font-bold text-xl text-navy-900">Message Sent</h3>
        <p className="text-sm text-ink/60 max-w-sm">
          Thanks for reaching out — our team will get back to you within one business day.
        </p>
      </motion.div>
    )
  }

  const fields = [
    { name: 'name', label: 'Full Name', type: 'text', required: true },
    { name: 'email', label: 'Email Address', type: 'email', required: true },
    { name: 'phone', label: 'Phone Number', type: 'tel', required: false },
    { name: 'subject', label: 'Subject', type: 'text', required: false },
  ]

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        {fields.map((f) => (
          <div key={f.name} className="flex flex-col gap-2">
            <label htmlFor={f.name} className="text-sm font-medium text-navy-900">
              {f.label} {f.required && <span className="text-gold-500">*</span>}
            </label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              required={f.required}
              value={form[f.name]}
              onChange={handleChange}
              className="rounded-xl border border-navy-900/12 px-4 py-3 text-sm focus:border-skyline-400 outline-none transition-colors"
              placeholder={f.label}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-navy-900">
          Message <span className="text-gold-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="rounded-xl border border-navy-900/12 px-4 py-3 text-sm focus:border-skyline-400 outline-none transition-colors resize-none"
          placeholder="Tell us about your project..."
        />
      </div>
      <Button type="submit" variant="primary" icon={FiSend} className="self-start" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
