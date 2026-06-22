import React from "react";

const LandingPage = ({ onGetStarted }) => {
  return (
    <main className="landing-container">
      <section className="hero-section">
        <div className="hero-copy">
          <div className="hero-badge">Smart link management</div>
          <h1 className="hero-title">Short links that look sharp and work harder.</h1>
          <p className="hero-subtitle">
            Create clean branded links, keep your campaigns organized, and understand what gets clicked without the clutter.
          </p>
          <div className="hero-actions">
            <button className="get-started-btn" onClick={onGetStarted}>Get Started Free</button>
            <span className="hero-note">No setup drama. Just paste, shorten, share.</span>
          </div>
        </div>

        <div className="hero-demo" aria-label="Slink dashboard preview">
          <div className="demo-topbar">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="demo-url-card">
            <span className="demo-label">Live campaign</span>
            <strong>slink.io/product-launch</strong>
            <small>https://your-brand.com/products/summer-launch</small>
          </div>
          <div className="demo-metrics">
            <div>
              <strong>18.4k</strong>
              <span>Total clicks</span>
            </div>
            <div>
              <strong>32%</strong>
              <span>Higher reach</span>
            </div>
            <div>
              <strong>4.9</strong>
              <span>Avg. rating</span>
            </div>
          </div>
        </div>
      </section>

      <section className="features-grid" aria-label="Slink features">
        <article className="feature-card">
          <div className="feature-icon">01</div>
          <h3>Fast shortening</h3>
          <p>Turn long URLs into polished links in seconds, ready for social posts, campaigns, and customer messages.</p>
        </article>
        <article className="feature-card featured">
          <div className="feature-icon">02</div>
          <h3>Useful analytics</h3>
          <p>Track clicks and recent activity so you can see which links are actually getting attention.</p>
        </article>
        <article className="feature-card">
          <div className="feature-icon">03</div>
          <h3>Secure access</h3>
          <p>Keep your links tied to your account with a focused dashboard built for everyday use.</p>
        </article>
      </section>
    </main>
  );
};

export default LandingPage;
