import { useMemo, useState } from 'react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import BlogCard from '../components/BlogCard'
import { FiSearch } from 'react-icons/fi'
import { blogPosts } from '../data/misc'

const categories = ['All', ...new Set(blogPosts.map((p) => p.category))]

export default function Blog() {
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState('All')

  const filtered = useMemo(() => {
    return blogPosts.filter((p) => {
      const matchesCat = cat === 'All' || p.category === cat
      const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase())
      return matchesCat && matchesQuery
    })
  }, [query, cat])

  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Insights on engineering, construction methods and technology from our team."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop"
        crumbs={[{ label: 'Blog' }]}
      />

      <section className="py-24 bg-white">
        <div className="container-x flex flex-col gap-12">
          <SectionTitle eyebrow="Insights" title="Latest articles" />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                    cat === c ? 'bg-navy-900 text-white' : 'bg-navy-50 text-navy-700 hover:bg-navy-100'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-64">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full rounded-full border border-navy-900/12 pl-10 pr-4 py-2.5 text-sm outline-none focus:border-skyline-400"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <BlogCard key={p.slug} post={p} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-ink/50 py-10">No articles match your search.</p>
          )}
        </div>
      </section>
    </>
  )
}
