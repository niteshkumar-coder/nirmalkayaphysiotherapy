/* Using placeholder patterns for the gallery */
export default function Gallery() {
  const images = [
    { title: 'Advanced Treatment Center', url: 'https://i.ibb.co/nMGKc1rv/2025-03-01.jpg' },
    { title: 'Rehabilitation Area', url: 'https://i.ibb.co/mQDhzsR/unnamed.jpg' },
    { title: 'Physiotherapy Center', url: 'https://i.ibb.co/zhXdpKxh/2025-10-04.jpg' },
    { title: 'Modern Clinic Setup', url: 'https://i.ibb.co/NkRWWNs/e59df081-96b2-4305-814e-abd9d5f07b05.jpg' },
    { title: 'Patient Recovery Focus', url: 'https://i.ibb.co/kVxryv5s/22ec166f-9cbc-4fda-b4d8-be6287a277e9.jpg' },
    { title: 'Expert Care Facility', url: 'https://i.ibb.co/2pSSdYb/b7bb90f6-a1f4-4154-bc45-eddf726e8113.jpg' },
    { title: 'Specialized Recovery Room', url: 'https://i.ibb.co/7J9VDw9X/fab8d148-1b36-4d58-ab3c-1f892dbf43b0.jpg' },
    { title: 'Recovery Technology', url: 'https://i.ibb.co/PGQQHz5P/41bddbe6-c324-4d90-ac91-e9506337271d.jpg' },
    { title: 'Clinical Setting', url: 'https://i.ibb.co/vxLJt1L5/b781c382-0f00-4706-a48f-8057e9232f71.jpg' },
    { title: 'Wellness Zone', url: 'https://i.ibb.co/vv1qYWk9/2022-07-15.jpg' },
    { title: 'Center Facilities', url: 'https://i.ibb.co/8L1dX9Qf/2026-04-25.jpg' },
    { title: 'Patient Lounge', url: 'https://i.ibb.co/8LZmkC66/2022-06-22.jpg' },
    { title: 'Therapy Room', url: 'https://i.ibb.co/jX31rYJ/2022-06-22.jpg' },
    { title: 'Modern Rehab Equipment', url: 'https://i.ibb.co/HDp4288Y/2024-01-31.jpg' },
    { title: 'Safe Recovery Floor', url: 'https://i.ibb.co/G3fv3N5W/2023-01-27.jpg' },
    { title: 'Consultation Room', url: 'https://i.ibb.co/qM9Gqnt6/2025-03-01.jpg' },
    { title: 'Physiotherapy Suite', url: 'https://i.ibb.co/whJX31Lp/2026-04-25.jpg' },
    { title: 'Healthy Living Care', url: 'https://i.ibb.co/3ZwsfGd/2023-03-04.jpg' },
    { title: 'Clinic Excellence', url: 'https://i.ibb.co/MkxRT43h/fd2330f7-1579-4c4c-8d77-fe64f2d48edf.jpg' },
    { title: 'Comprehensive Care', url: 'https://i.ibb.co/4nQd1FDn/2022-07-15.jpg' },
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-clinic-red font-bold uppercase tracking-widest text-sm mb-4">Inside the Center</p>
            <h2 className="section-title">Clinic Gallery</h2>
            <p className="text-gray-500 text-lg">A look into our professional environment and high-end rehabilitation facilities in Rajendra Nagar, Patna.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="relative overflow-hidden rounded-[1.5rem] group shadow-sm border border-slate-100"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-clinic-blue/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-bold text-xs">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
