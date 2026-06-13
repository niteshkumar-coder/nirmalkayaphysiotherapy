import { Link } from 'react-router-dom';
import { BLOGS_DATA } from '../data/seoData';
import SEOHead from './SEOHead';
import { getBreadcrumbSchema } from '../utils/schemaGenerator';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

export default function BlogIndex() {
  const fullUrl = 'https://nirmalkaya.online/blog';
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://nirmalkaya.online/' },
    { name: 'Blog', url: fullUrl }
  ]);

  return (
    <>
      <SEOHead
        title="Physiotherapy & Spine Care Blog Patna | Dr. Kundan Kumar"
        description="Read clinical advice, home fitness exercises, neck pain ergonomics, post-surgical timelines, and stroke recovery guides authored by BCCI Bihar Senior Physio."
        canonicalUrl={fullUrl}
        schemas={[breadcrumbSchema]}
      />

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-clinic-red/10 text-clinic-red text-[10px] px-3 py-1 bg-red-100 rounded-full font-black tracking-widest uppercase mb-4 inline-block">Recovery Library</span>
            <h1 className="text-3xl md:text-5xl font-display font-extrabold text-clinic-blue leading-tight mb-4">
              Nirmal Kaya Clinical Health & Rehab Blog
            </h1>
            <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed">
              Discover professional medical advice, step-by-step postural guides, and injury-reduction guidelines to accelerate your wellness journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOGS_DATA.map((blog) => (
              <article 
                key={blog.slug}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-clinic-blue/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden select-none">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-4 left-4 bg-clinic-blue text-white text-[9px] px-2.5 py-1 rounded font-black tracking-wider uppercase">
                      {blog.category}
                    </span>
                  </div>

                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-4 text-[10px] text-slate-400 font-bold mb-3">
                      <span className="flex items-center gap-1"><User size={12} className="text-clinic-red" /> {blog.author}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {blog.readTime}</span>
                    </div>

                    <h2 className="text-lg md:text-xl font-display font-black text-clinic-blue leading-tight mb-3 group-hover:text-clinic-red transition-colors line-clamp-2">
                      {blog.title.split('|')[0]}
                    </h2>
                    <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-4 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400">{blog.date}</span>
                  <Link 
                    to={`/blog/${blog.slug}`}
                    className="text-xs font-black text-clinic-blue group-hover:text-clinic-red transition-colors uppercase tracking-widest flex items-center gap-1.5"
                  >
                    Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
