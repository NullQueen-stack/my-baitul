import { useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiCalendar, FiTag } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import BlogCard from '../components/BlogCard'
import { blogPosts } from '../data/misc'

export default function BlogDetail() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      <PageHero
        title={post.title}
        image={post.cover}
        crumbs={[{ label: 'Blog', to: '/blog' }, { label: post.title }]}
      />

      <section className="py-20 bg-white">
        <div className="container-x max-w-3xl flex flex-col gap-8">
          <div className="flex items-center gap-5 text-sm text-ink/50">
            <span className="flex items-center gap-1"><FiCalendar /> {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span className="flex items-center gap-1"><FiTag /> {post.category}</span>
          </div>

          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            src={post.cover}
            alt={post.title}
            className="rounded-3xl w-full h-80 object-cover shadow-card"
          />

          <p className="text-ink/70 leading-relaxed text-lg">{post.content}</p>
        </div>
      </section>

      <section className="py-24 bg-navy-50/40">
        <div className="container-x flex flex-col gap-14">
          <SectionTitle eyebrow="Keep Reading" title="More articles" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p, i) => (
              <BlogCard key={p.slug} post={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
