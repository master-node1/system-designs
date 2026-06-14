import Link from 'next/link'
import { BLOG_POSTS } from '@/lib/blogs'

export default function BlogListingPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-8">
      <section className="space-y-4">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500">Blog</p>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100">Technical blog posts</h1>
        <p className="max-w-3xl text-zinc-400 leading-relaxed">
          Read more in-depth articles on architecture, observability, and system performance.
        </p>
      </section>

      <div className="grid gap-4">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="group block rounded-3xl border border-zinc-800 bg-surface/30 p-6 transition hover:border-brand"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-zinc-100 group-hover:text-brand">{post.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{post.excerpt}</p>
              </div>
              <span className="text-sm font-mono uppercase tracking-[0.25em] text-zinc-500">{post.date}</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-mono text-zinc-400">
              <span>{post.category}</span>
              <span>{post.readTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
