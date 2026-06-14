import { notFound } from 'next/navigation'
import Link from 'next/link'
import { BLOG_POSTS } from '@/lib/blogs'

interface BlogPageProps {
  params: {
    id: string
  }
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ id: post.id }))
}

export default function BlogPostPage({ params }: BlogPageProps) {
  const post = BLOG_POSTS.find((entry) => entry.id === params.id)

  if (!post) {
    return notFound()
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-8">
      <div className="space-y-3">
        <Link href="/blog" className="text-sm font-mono uppercase tracking-[0.3em] text-zinc-500 hover:text-white">
          ← Back to blogs
        </Link>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100">{post.title}</h1>
        <div className="flex flex-wrap gap-3 text-sm font-mono text-zinc-500">
          <span>{post.category}</span>
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
      </div>

      <article className="prose prose-invert max-w-none text-zinc-300">
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </article>
    </div>
  )
}
