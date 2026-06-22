import React, { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

function Nav() {
  return (
    <nav className="nav">
      <div className="brand">Astonish</div>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a className="cta" href="#contact">Get Started</a>
    </nav>
  )
}

function Hero({ onCTAClick }) {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1 className="title">Beautiful, fast, and production-ready</h1>
        <p className="subtitle">MERN-powered web experiences crafted with performance and design in mind.</p>
        <div className="hero-actions">
          <button className="primary" onClick={onCTAClick}>Start Free</button>
          <a className="ghost" href="#features">Learn more</a>
        </div>
      </div>
      <div className="hero-media">
        <img src={heroImg} alt="Product screenshot" />
      </div>
    </header>
  )
}

function Features() {
  const items = [
    {title: 'Performance', desc: 'Optimized React UI, server-side APIs, and fast DB queries.'},
    {title: 'Design', desc: 'Pixel-perfect components and responsive layouts.'},
    {title: 'Scalable', desc: 'Built with Express and MongoDB for easy scaling.'}
  ]
  return (
    <section id="features" className="features">
      {items.map((it) => (
        <div className="feature" key={it.title}>
          <h3>{it.title}</h3>
          <p>{it.desc}</p>
        </div>
      ))}
    </section>
  )
}

function Contact() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState(null);

  async function submit(e) {
    e.preventDefault();
    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, body })
      });
      if (!res.ok) throw new Error('failed');
      setStatus('Thanks — we received your message.');
      setTitle(''); setBody('');
    } catch (err) {
      setStatus('Could not send message.');
    }
  }

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <form onSubmit={submit} className="contact-form">
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Subject" required />
        <textarea value={body} onChange={e=>setBody(e.target.value)} placeholder="Message" rows={6} required />
        <div className="form-actions">
          <button className="primary" type="submit">Send</button>
          <span className="status">{status}</span>
        </div>
      </form>
    </section>
  )
}

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/posts');
        if (res.ok) setPosts(await res.json());
      } catch (err) {}
    }
    load();
  }, []);

  function handleCTAClick() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="app-root">
      <Nav />
      <Hero onCTAClick={handleCTAClick} />
      <main>
        <Features />
        <section className="posts">
          <h2>Latest messages</h2>
          {posts.length === 0 ? <p>No messages yet.</p> : (
            <ul>
              {posts.map(p => (
                <li key={p._id}>
                  <strong>{p.title}</strong>
                  <p>{p.body}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
        <Contact />
      </main>
      <footer className="footer">© {new Date().getFullYear()} Astonish — Built with MERN</footer>
    </div>
  )
}

export default App
