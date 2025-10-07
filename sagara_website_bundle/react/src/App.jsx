import React from 'react';
import './index.css';

const logo = "https://i.ibb.co.com/pj9QX2kq/Gemini-Generated-Image-dq72tydq72tydq72.png";
const heroImg = "https://i.ibb.co.com/TDhNj2T8/pengertian-website.webp";
const whatsappImg = "https://i.ibb.co.com/SwL4XzGq/q67pnz2eye22fpx.jpg";
const instagramLogo = "https://i.ibb.co.com/RGQvVRFT/Instagram-logo-2022-svg.webp";
const tiktokLogo = "https://i.ibb.co.com/HfLs1g7c/Tik-Tok-Logo.webp";

const pricing = [
  { title: "Landing Page", price: "Rp 750K", desc: "1 Halaman Profesional", features: ["Gratis Domain .com","1 Halaman Landing Page","Hosting Space 250Mb","Terima Beres","Pertahun 500K"] },
  { title: "Web Starter", price: "Rp 1,5Jt", desc: "Dp 50% - Khusus Pemula", features: ["Gratis Domain .com","Max 5 Halaman Utama","Hosting 500Mb","Terima Beres","Tahunan 600K"] },
  { title: "Web Standart", price: "Rp 2,5Jt", desc: "Dp 50% - Khusus Pemula", features: ["Gratis Domain .com","Max 10 Halaman Utama","Hosting 1GB","Terima Beres","Tahunan 800K"] },
  { title: "Web Pro", price: "Rp 3,5Jt", desc: "Dp 50% - Khusus Pemula", features: ["Gratis Domain .com","Max 20 Halaman Utama","Hosting 2GB","Hosting Beres","Tahunan 900K"] },
];

const testimonials = Array.from({length:10}).map((_,i)=>({
  name:`Pelanggan ${i+1}`,
  text:"Layanan cepat, hasil memuaskan.",
  stars: 5 - (i%2)
}));

export default function App(){
  return (
    <div className="min-h-screen bg-[#0b1220] text-slate-100">
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={logo} alt="logo" className="w-14 h-14 rounded-2xl" />
          <div>
            <h1 className="text-2xl font-bold">Sagara Joki Website</h1>
            <p className="text-sm text-slate-300">Jasa pembuatan website — cepat, rapi</p>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#pricing">Harga</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#contact" className="bg-emerald-400 text-black px-4 py-2 rounded">Hubungi</a>
        </nav>
      </header>

      <main>
        <section className="relative">
          <img src={heroImg} alt="hero" className="w-full h-64 object-cover opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl font-extrabold">Buat Website Profesional & Murah</h2>
              <p className="mt-2 text-slate-300">Tampilan hacker, keamanan & performa.</p>
            </div>
          </div>
        </section>

        <section id="pricing" className="max-w-7xl mx-auto px-6 py-12">
          <h3 className="text-3xl font-bold text-center">Daftar Harga</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            {pricing.map(p=>(
              <div key={p.title} className="bg-slate-800 rounded-2xl p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-xl font-semibold">{p.title}</h4>
                    <p className="text-sm text-slate-400">{p.desc}</p>
                  </div>
                  <div className="text-2xl font-extrabold">{p.price}</div>
                </div>
                <ul className="mt-4 text-sm text-slate-300">
                  {p.features.map(f=><li key={f}>{f}</li>)}
                </ul>
                <div className="mt-4 flex gap-2">
                  <a className="flex-1 bg-cyan-500 text-black py-2 rounded text-center" href={`https://wa.me/6285211080404?text=Saya%20mau%20ambil%20paket%20${encodeURIComponent(p.title)}`} target="_blank" rel="noreferrer">Pesan via WA</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="portfolio" className="max-w-7xl mx-auto px-6 py-12">
          <h3 className="text-2xl font-bold">Portfolio</h3>
          <div className="mt-4 flex gap-6 overflow-x-auto no-scrollbar">
            <div className="min-w-[320px] bg-slate-800 p-4 rounded"><img src="https://i.ibb.co.com/WNdzVbDv/270.jpg" alt="" className="rounded"/></div>
            <div className="min-w-[320px] bg-slate-800 p-4 rounded"><img src="https://i.ibb.co.com/Mxx4hV19/Rainforest-Guardians-540x329.png" alt="" className="rounded"/></div>
            <div className="min-w-[320px] bg-slate-800 p-4 rounded"><img src="https://i.ibb.co.com/fh23g00/tampilan-peserta-lolos-snbt-2024-169.jpg" alt="" className="rounded"/></div>
            <div className="min-w-[320px] bg-slate-800 p-4 rounded"><img src="https://i.ibb.co.com/23SSjHmr/9.png" alt="" className="rounded"/></div>
          </div>
        </section>

        <section id="about" className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-bold">About</h3>
            <p className="text-slate-300 mt-2">Kami membuat website profesional dan desain grafis (JDS) dengan harga terjangkau.</p>
          </div>
          <div>
            <h4 className="font-semibold">Klien Kami</h4>
            <div className="flex gap-4 mt-3">
              <img src="https://i.ibb.co.com/QFxGsZks/logo-perusahaan-percetakan-427757-45168.jpg" alt="" className="h-16 object-contain"/>
              <img src="https://i.ibb.co.com/TxxmdYQ4/logo-desain-percetakan-pgma-tes-warna.jpg" alt="" className="h-16 object-contain"/>
              <img src="https://i.ibb.co.com/twLb5kD5/5e6cb0c755d7a7b7a7f899f28c90327d.jpg" alt="" className="h-16 object-contain"/>
            </div>
          </div>
        </section>

        <section id="contact" className="max-w-4xl mx-auto px-6 py-12">
          <h3 className="text-2xl font-bold">Order / Konsultasi</h3>
          <form action="https://formspree.io/f/{your_form_id}" method="POST" className="mt-4 bg-slate-800 p-4 rounded">
            <input name="name" placeholder="Nama" className="w-full p-2 rounded mb-2 bg-slate-900"/>
            <input name="phone" placeholder="No WhatsApp" className="w-full p-2 rounded mb-2 bg-slate-900"/>
            <textarea name="message" placeholder="Keterangan" className="w-full p-2 rounded bg-slate-900"></textarea>
            <div className="mt-3 flex gap-2">
              <button className="bg-emerald-400 text-black px-4 py-2 rounded">Kirim Email</button>
              <a className="bg-green-600 text-black px-4 py-2 rounded" href={`https://wa.me/6285211080404?text=Halo%20Sagara%20Joki`}>Chat WA</a>
            </div>
          </form>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-12">
          <h4 className="text-xl font-semibold">Testimoni</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
            {testimonials.map((t,i)=>(
              <div key={i} className="bg-slate-800 p-4 rounded">
                <div className="font-semibold">{t.name}</div>
                <div className="text-amber-400">{'★'.repeat(t.stars)}</div>
                <p className="text-sm text-slate-300 mt-2">{t.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 mt-8 py-6">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt="logo" className="w-12 h-12 rounded"/>
            <div>
              <div className="font-bold">Sagara Joki Website</div>
              <div className="text-sm text-slate-400">Jasa pembuatan website</div>
            </div>
          </div>
          <div>
            <a href="https://www.instagram.com/ryzky_arya/" target="_blank" rel="noreferrer"><img src={instagramLogo} alt="ig" className="inline-block w-6 h-6 mr-2"/></a>
            <a href="https://www.tiktok.com/@sagara_petrov" target="_blank" rel="noreferrer"><img src={tiktokLogo} alt="tt" className="inline-block w-6 h-6"/></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
