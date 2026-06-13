import { useParams, Link } from 'react-router-dom';
import { BLOGS_DATA } from '../data/seoData';
import SEOHead from './SEOHead';
import { getBreadcrumbSchema } from '../utils/schemaGenerator';
import { Calendar, User, Clock, ArrowLeft, Send, Phone, MessageCircle } from 'lucide-react';

export default function BlogPostDetail() {
  const { slug } = useParams<{ slug: string }>();

  const blog = BLOGS_DATA.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-display font-extrabold text-clinic-blue mb-4">Article Not Found</h2>
        <p className="text-slate-500 mb-8 font-medium">The requested blog post could not be retrieved.</p>
        <Link to="/blog" className="btn-primary inline-flex">View All Articles</Link>
      </div>
    );
  }

  // Compile Google Article and Breadcrumb schemas
  const fullUrl = `https://nirmalkaya.online/blog/${blog.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": blog.title,
    "description": blog.metaDescription,
    "url": fullUrl,
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "cssSelector": "article"
    },
    "author": {
      "@type": "Person",
      "name": blog.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nirmal Kaya Physiotherapy Clinic",
      "logo": {
        "@type": "ImageObject",
        "url": "https://i.ibb.co/8LPgDvJm/9c74e7a6-9f4d-45a0-a03c-ec692c643647-removebg-preview.png"
      }
    },
    "datePublished": "2026-06-10",
    "image": blog.image
  };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://nirmalkaya.online/' },
    { name: 'Blog', url: 'https://nirmalkaya.online/blog' },
    { name: blog.h1.slice(0, 30) + '...', url: fullUrl }
  ]);

  const recommendedBlogs = BLOGS_DATA.filter((b) => b.slug !== slug).slice(0, 3);

  return (
    <>
      <SEOHead
        title={blog.title}
        description={blog.metaDescription}
        canonicalUrl={fullUrl}
        ogImage={blog.image}
        ogType="article"
        schemas={[articleSchema, breadcrumbSchema]}
      />

      <article className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          
          {/* Back Button */}
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-clinic-blue font-bold text-xs uppercase tracking-widest mb-8 transition-colors"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          {/* Article Header Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-10 overflow-hidden mb-12">
            <span className="bg-clinic-blue/15 text-clinic-blue text-[10px] px-3 py-1.5 rounded-full font-black tracking-widest uppercase">
              {blog.category}
            </span>
            
            <h1 className="text-2xl md:text-4xl font-display font-extrabold text-clinic-blue leading-tight mt-4 mb-6">
              {blog.h1}
            </h1>

            {/* Author Profile and Metadata */}
            <div className="flex flex-wrap items-center gap-6 border-y border-slate-100 py-4 text-slate-500 text-xs font-semibold">
              <div className="flex items-center gap-1.5">
                <User size={14} className="text-clinic-red" />
                <span>By <strong className="text-slate-800 font-extrabold">{blog.author}</strong> (BCCI Bihar Senior Physio)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar size={14} />
                <span>Published: {blog.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={14} />
                <span>{blog.readTime}</span>
              </div>
            </div>

            {/* Main Article Image */}
            <div className="mt-8 overflow-hidden rounded-xl border border-slate-100 max-h-[400px]">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-full object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Article Content */}
            <div className="mt-10 font-sans text-slate-600 text-base md:text-lg leading-relaxed space-y-6">
              <p className="font-extrabold italic text-clinic-blue text-lg border-l-4 border-clinic-yellow pl-4 mb-8">
                {blog.excerpt}
              </p>

              {blog.paragraphs.map((para, paraIdx) => {
                // If it starts with a causes list number like "1.", style it uniquely
                const isListItem = /^[0-9]+\.\s/.test(para);
                if (isListItem) {
                  const [num, ...rest] = para.split(':');
                  return (
                    <div key={paraIdx} className="bg-blue-50/50 p-5 rounded-xl border border-blue-100/50 my-6">
                      <h3 className="font-black text-clinic-blue flex gap-2 items-start text-sm md:text-base uppercase tracking-tight mb-2">
                        <span className="bg-clinic-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-xs text-center shrink-0">
                          {num[0]}
                        </span>
                        {num.replace(/^[0-9]+\.\s/, '').trim()}
                      </h3>
                      <p className="text-xs md:text-sm text-slate-500 font-medium pl-8 leading-relaxed">
                        {rest.join(':').trim()}
                      </p>
                    </div>
                  );
                }
                return (
                  <p key={paraIdx}>
                    {para}
                  </p>
                );
              })}

              {/* Medical Disclaimer */}
              <div className="p-5 bg-amber-50 rounded-xl border border-amber-200/50 text-xs text-amber-800 font-medium font-sans leading-relaxed mt-12 select-none">
                <strong>Medical Notice & Disclaimer:</strong> The patient care and recovery details outlined in this article are authored for general health-awareness guidelines only. It does not replace professional clinical consultations or diagnostics. Please schedule an online evaluation session with Dr. Kundan Kumar at Nirmal Kaya for customized medical guidelines.
              </div>
            </div>
          </div>

          {/* Inline Action Card CTA */}
          <div className="bg-clinic-red rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full shrink-0" />
            <div className="relative z-10 max-w-lg">
              <h3 className="text-xl md:text-2xl font-black uppercase mb-2">Consult BCCI Bihar Physio</h3>
              <p className="text-red-100 font-bold text-xs md:text-sm uppercase tracking-wide leading-relaxed">
                Receive the exact high-grade manual therapy and recovery treatments given to elite cricket athletes.
              </p>
            </div>
            <Link 
              to="/book" 
              className="px-6 py-4 rounded bg-clinic-yellow text-clinic-blue hover:text-white hover:bg-clinic-blue text-xs tracking-widest font-black uppercase shadow-xl transition-all self-stretch md:self-auto text-center shrink-0"
            >
              Book Appointment Now
            </Link>
          </div>

          {/* Recommended Posts */}
          <div className="mt-16">
            <h3 className="font-display font-black text-clinic-blue text-xl md:text-2xl mb-8 uppercase tracking-tight text-center md:text-left">Recommended Medical Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {recommendedBlogs.map((item) => (
                <Link
                  key={item.slug}
                  to={`/blog/${item.slug}`}
                  className="bg-white border border-slate-200 hover:border-clinic-blue p-5 rounded-xl hover:shadow transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[9px] font-black text-clinic-red uppercase tracking-wider">{item.category}</span>
                    <h4 className="font-extrabold text-clinic-blue text-sm md:text-base leading-tight mt-1 mb-3 hover:text-clinic-red transition-colors line-clamp-2">{item.title.split('|')[0]}</h4>
                  </div>
                  <span className="text-clinic-blue text-xs font-black uppercase tracking-widest flex items-center gap-1.5 mt-2">
                    Read Article <Send size={10} />
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </article>
    </>
  );
}
