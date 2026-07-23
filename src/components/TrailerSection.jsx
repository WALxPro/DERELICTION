import { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal"; // apne path ke mutabiq adjust kar lo
import "./TrailerSection.css";

const shorts = [
  {
    id: "1212436023",
    hash: "", // unlisted video ho to yahan hash daalo
    title: "Official Short Film",
    desc: "The story behind the sentence.",
  },
  // aur videos aise hi add karte jao
];

function VimeoFrame({ id, hash, title }) {
  const [ratio, setRatio] = useState(16 / 9); // load hone tak fallback

  useEffect(() => {
    let alive = true;
    const pageUrl = `https://vimeo.com/${id}${hash ? `/${hash}` : ""}`;

    fetch(`https://vimeo.com/api/oembed.json?url=${encodeURIComponent(pageUrl)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (alive && d?.width && d?.height) setRatio(d.width / d.height);
      })
      .catch(() => {});

    return () => {
      alive = false;
    };
  }, [id, hash]);

  const src =
    `https://player.vimeo.com/video/${id}` +
    (hash ? `?h=${hash}&` : "?") +
    "title=0&byline=0&portrait=0&badge=0&autopause=0&dnt=1";

  return (
    <div
      className={`short-frame ${ratio < 1 ? "is-portrait" : ""}`}
      style={{ aspectRatio: ratio }}
    >
      <iframe
        src={src}
        title={title}
        loading="lazy"
        frameBorder="0"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        allowFullScreen
      />
    </div>
  );
}

export default function TrailerSection() {
  return (
    <section className="section shorts-section">
      <div className="container">
        <ScrollReveal direction="up">
          <div className="shorts-head">
            <div className="shorts-eyebrow">
              <span />
              Watch
              <span />
            </div>

            <h2 className="section-heading">
              Official <span className="gold">Short Film</span>
            </h2>

            <p className="shorts-sub">
              A glimpse into the world of Dereliction the story behind the
              sentence.
            </p>
          </div>
        </ScrollReveal>

        <div className="shorts-grid">
          {shorts.map((item, i) => (
            <ScrollReveal key={item.id} delay={100 + i * 90} direction="up">
              <figure className="short-card">
                <VimeoFrame id={item.id} hash={item.hash} title={item.title} />

                <figcaption className="short-meta">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}