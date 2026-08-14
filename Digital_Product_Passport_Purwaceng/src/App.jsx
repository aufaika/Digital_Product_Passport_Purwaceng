function App() {
  const noWhatsApp = "6285325044407"; // Ganti dengan nomor asli BFF
  const pesanTeks =
    "Halo Best Friend Forever (BFF), saya melihat Digital Product Passport. Saya ingin repeat order Purwaceng. Apakah stok Serbuk/Akarnya masih ada?";
  const linkWA = `https://api.whatsapp.com/send?phone=${noWhatsApp}&text=${encodeURIComponent(pesanTeks)}`;

  return (
    <div className="app-container">
      {/* Hero Section */}
      <header className="hero">
        <h1>Digital Product Passport</h1>
        <p>Purwaceng Khas Sikunang - Dieng</p>
      </header>

      {/* Konten Utama */}
      <main className="main-content">
        {/* Identitas Produsen */}
        <section className="section">
          <h2 className="section-title">Produsen UMKM</h2>
          <div className="profile-content">
            <p>
              Diproduksi oleh <strong>Best Friend Forever (BFF)</strong>. Diolah
              langsung dari tanaman Purwaceng endemik dataran tinggi Desa
              Sikunang. Kami menyediakan varian{" "}
              <strong>Serbuk Instan (Purwatan)</strong> dan{" "}
              <strong>Akar/Daun Kering Asli</strong> untuk kepuasan Anda.
            </p>
          </div>
        </section>

        {/* Cara Penyeduhan (Serbuk & Akar) */}
        <section className="section">
          <h2 className="section-title">Cara Penyeduhan Optimal</h2>

          {/* Varian 1: Serbuk */}
          <div className="variant-block">
            <h3 className="variant-title">
              Varian 1: Serbuk Instan (Purwatan)
            </h3>
            <div className="brewing-grid">
              <div className="step-card">
                <div className="step-num">1</div>
                <div className="step-text">
                  <h4>Takaran Pas</h4>
                  <p>
                    Ambil 1/2 sendok teh serbuk Purwatan, masukkan ke dalam
                    cangkir kosong.
                  </p>
                </div>
              </div>
              <div className="step-card">
                <div className="step-num">2</div>
                <div className="step-text">
                  <h4>Seduh & Aduk</h4>
                  <p>
                    Tuangkan 150ml air mendidih. Aduk hingga serbuk larut
                    merata.
                  </p>
                </div>
              </div>
              <div className="step-card">
                <div className="step-num">3</div>
                <div className="step-text">
                  <h4>Siap Dinikmati</h4>
                  <p>
                    Tambahkan gula atau madu jika suka. Nikmati selagi hangat
                    untuk stamina ekstra.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="divider-light" />

          {/* Varian 2: Akar / Daun Kering */}
          <div className="variant-block">
            <h3 className="variant-title">
              Varian 2: Akar & Daun Kering (Purwaceng Dieng)
            </h3>
            <div className="brewing-grid">
              <div className="step-card">
                <div className="step-num">1</div>
                <div className="step-text">
                  <h4>Cuci Bersih</h4>
                  <p>
                    Ambil secukupnya akar/daun kering Purwaceng, lalu cuci
                    bersih dengan air mengalir.
                  </p>
                </div>
              </div>
              <div className="step-card">
                <div className="step-num">2</div>
                <div className="step-text">
                  <h4>Proses Perebusan</h4>
                  <p>
                    Rebus dengan 2-3 gelas air matang. Biarkan mendidih hingga
                    air berubah warna.
                  </p>
                </div>
              </div>
              <div className="step-card">
                <div className="step-num">3</div>
                <div className="step-text">
                  <h4>Saring & Sajikan</h4>
                  <p>
                    Saring air rebusan ke dalam gelas. Anda bisa mencampurnya
                    dengan pemanis atau rempah lain dan siap disajikan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inovasi Penyajian (Baru) */}
        <section className="section bg-soft">
          <h2 className="section-title">Inovasi Sajian Purwaceng</h2>
          <p className="section-subtitle">
            Bosan dengan seduhan biasa? Coba kreasi minuman berikut:
          </p>

          <div className="innovation-grid">
            <div className="innovation-card">
              <h4>🌿 Purwaceng Rempah (Wedang)</h4>
              <p>
                Saat merebus Purwaceng kering, tambahkan bahan lain yang senyawa
                dengan purwaceng. Efek menghangatkan badan akan berkali-lipat!
              </p>
            </div>
            <div className="innovation-card">
              <h4>🥛 Purwaceng Latte</h4>
              <p>
                Seduh Purwaceng dengan sedikit air panas, lalu tambahkan susu
                cair hangat (steamed milk) dan taburan bubuk kayu manis di
                atasnya.
              </p>
            </div>
            <div className="innovation-card">
              <h4>☕ Kopi Purwaceng</h4>
              <p>
                Campurkan 1/2 sdt serbuk Purwaceng atau air rebusan akar ke
                dalam secangkir Kopi Hitam (Robusta/Arabica). Cocok untuk
                anti-ngantuk.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Responsif */}
      <footer className="footer-section">
        {/* Kolom Kiri: Lokasi */}
        <div className="footer-col">
          <h3>Lokasi Kami</h3>
          <h4>Warung BFF Basecamp Gunung Bismo</h4>
          <p className="text-gray">
            Desa Sikunang, Kecamatan Kejajar
            <br />
            Kabupaten Wonosobo, Jawa Tengah
          </p>
          <a
            href="https://maps.google.com/?q=Desa+Sikunang+Kejajar+Wonosobo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline mt-auto"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            Lihat di Google Maps
          </a>
        </div>

        {/* Kolom Tengah: Peta */}
        <div className="map-image-container">
          <img
            src="/peta-bismo.jpg"
            alt="Peta Lokasi Basecamp Gunung Bismo"
            className="map-placeholder"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "250px",
              borderRadius: "8px",
            }}
          />
        </div>

        {/* Kolom Kanan: Kontak & WA */}
        <div className="footer-col">
          <h3>Hubungi Kami</h3>
          <p className="text-gray mb-2">Telepon: 085325044407</p>

          <a
            href={linkWA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark mt-auto"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Pesan via WhatsApp
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
