import "./HeroSection.css";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";

const nodes = [
  [112, 204], [158, 136], [205, 255], [238, 187], [280, 106], [302, 307],
  [335, 224], [360, 151], [390, 85], [414, 275], [447, 194], [475, 126],
  [500, 60], [520, 327], [544, 229], [571, 165], [598, 101], [625, 277],
  [650, 201], [677, 134], [704, 71], [727, 322], [752, 237], [779, 176],
  [804, 115], [836, 267], [863, 206], [220, 372], [348, 405], [490, 390],
  [642, 407], [790, 379],
];
const connections = [
  [0, 1], [0, 2], [0, 3], [1, 3], [1, 4], [2, 3], [2, 5], [2, 6],
  [3, 4], [3, 6], [3, 7], [4, 7], [4, 8], [5, 6], [5, 9], [5, 27],
  [6, 7], [6, 9], [6, 10], [7, 8], [7, 10], [7, 11], [8, 11], [8, 12],
  [9, 10], [9, 13], [9, 14], [10, 11], [10, 14], [10, 15], [11, 12],
  [11, 15], [11, 16], [12, 16], [13, 14], [13, 17], [13, 28], [14, 15],
  [14, 17], [14, 18], [15, 16], [15, 18], [15, 19], [16, 19], [16, 20],
  [17, 18], [17, 21], [17, 22], [18, 19], [18, 22], [18, 23], [19, 20],
  [19, 23], [19, 24], [20, 24], [21, 22], [21, 30], [22, 23], [22, 25],
  [22, 30], [23, 24], [23, 25], [23, 26], [24, 26], [25, 26], [25, 31],
  [27, 28], [28, 29], [29, 30], [30, 31], [6, 27], [13, 29], [17, 30],
  [22, 31],
];

const navigation = [
  { label: "Intro", href: "#home", icon: "›" },
  { label: "About Me", href: "#about", icon: "▤" },
  { label: "Projects", href: "#Project", icon: "⑂" },
  { label: "Skills", href: "#skills", icon: "♧" },
  { label: "Contact", href: "#contact", icon: "✉" },
];

function NeuralNetwork() {
  return (
    <svg
      className="hero-section__network"
      viewBox="0 0 1000 500"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <filter id="hero-node-glow" x="-300%" y="-300%" width="700%" height="700%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g className="hero-section__connections">
        {connections.map(([from, to]) => (
          <line
            key={`${from}-${to}`}
            x1={nodes[from][0]}
            y1={nodes[from][1]}
            x2={nodes[to][0]}
            y2={nodes[to][1]}
          />
        ))}
      </g>
      <g filter="url(#hero-node-glow)">
        {nodes.map(([cx, cy], index) => (
          <circle
            className="hero-section__node"
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r={index % 5 === 0 ? 5 : 3.5}
            style={{ animationDelay: `${(index % 9) * -0.31}s` }}
          />
        ))}
      </g>
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="hero-section" id="home" aria-label="Introduction">
      <Image
        className="hero-section__photograph"
        src="/hero.jpeg"
        alt=""
        fill
        priority
        sizes="100vw"
      />
      <div className="hero-section__shade" aria-hidden="true" />
      <NeuralNetwork />

      <p className="hero-section__status">
        <span aria-hidden="true" />
        BUILDING IN THE OPEN
      </p>
      <p className="hero-section__focus">BACKEND / SYSTEMS / COMMUNITY</p>

      <nav className="hero-section__nav" aria-label="Main navigation">
        {navigation.map((item, index) => (
          <a
            className={index === 0 ? "is-current" : ""}
            href={item.href}
            key={item.label}
          >
            <span className="hero-section__nav-icon" aria-hidden="true">
              {item.icon}
            </span>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="hero-section__content">
        <p className="hero-section__eyebrow">SOFTWARE ENGINEER &amp; CURIOUS HUMAN</p>
        <h1 className="hero-section__name">
          <span>JAPNEET</span>
          <span className="hero-section__surname">
            SINGH<span className="hero-section__period">.</span>
          </span>
        </h1>
        <p className="hero-section__description">
          I build reliable backends, share what I learn,
          <br />
          and make things a little better in the open.
        </p>
        <div className="hero-section__actions">
          <a className="hero-section__button hero-section__button--primary" href="#Project">
            Explore my work <span aria-hidden="true">↗</span>
          </a>
          <a className="hero-section__button" href="#about">
            About Me <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <aside className="hero-section__connect" aria-label="Connect">
        <h2>CONNECT</h2>
        <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
        <a href={`mailto:${personalInfo.socialLinks.email}`}>
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </aside>

      <aside className="hero-section__interests" aria-label="Currently into">
        <h2>Contact</h2>
        <p>Distributed systems</p>
        <p>Go &amp; PostgreSQL</p>
        <p>Good documentation</p>
      </aside>

      <div className="hero-section__bottom">
        <span><b aria-hidden="true">›_</b> MORE THAN JUST CODE</span>
        <a href="#about">SCROLL TO EXPLORE <b aria-hidden="true">↓</b></a>
        <span><b aria-hidden="true">⑂</b> ALWAYS A WORK IN PROGRESS</span>
      </div>
    </section>
  );
}
