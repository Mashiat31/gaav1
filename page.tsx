import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Mail,
  MapPin,
  Menu,
  Trophy,
  Users,
} from "lucide-react";

const sports = [
  {
    number: "01",
    title: "Gaelic Football",
    line: "Fast. Physical. Unmistakably Irish.",
    copy: "Men’s and ladies’ teams train and compete across Hong Kong and Asia — with every level welcome.",
    image: "/champions-2.jpeg",
  },
  {
    number: "02",
    title: "Hurling",
    line: "The fastest field game in the world.",
    copy: "Pick up a hurley, learn the game and join a growing community of players in Hong Kong.",
    image: "/nags-2026.jpeg",
  },
  {
    number: "03",
    title: "Camogie",
    line: "Skill, speed and a brilliant team around you.",
    copy: "Whether you grew up playing or have never held a hurley, there is a place here for you.",
    image: "/champions-1.jpeg",
  },
];

const achievements = [
  "Men’s A — Senior Cup · NAGs 2026",
  "Ladies A — Senior Cup · NAGs 2026",
  "Men’s A — Senior Plate · AGGs 2025",
  "Ladies A — Senior Plate · AGGs 2025",
  "Men’s Hurling — Junior Cup · AGGs 2025",
];

const memberships = [
  { title: "Senior player", price: "HK$1,400", note: "Full playing membership" },
  { title: "Student / social", price: "HK$500", note: "Third-level students & supporters" },
  { title: "Family", price: "HK$2,400", note: "Bring the whole crew" },
  { title: "Junior player", price: "HK$600", note: "For our next generation" },
];

function Crest({ compact = false }: { compact?: boolean }) {
  return (
    <a className="crest" href="#top" aria-label="Hong Kong GAA home">
      <img src="/gaa-logo.png" alt="Hong Kong Gaelic Athletic Association" />
      {compact && <span className="footer-mark">HK GAA</span>}
    </a>
  );
}

export default function Home() {
  return (
    <main id="top">
      <div className="announce">
        <p>
          Asian Gaelic Games · Hong Kong · 21–22 November 2026
          <a href="#events">View the weekend <ArrowRight size={14} /></a>
        </p>
      </div>

      <header className="site-header">
        <Crest />
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#play">Play</a>
          <a href="#club">The club</a>
          <a href="#events">Events</a>
          <a href="#membership">Membership</a>
        </nav>
        <a className="nav-cta" href="mailto:info@gaa.hk?subject=I%20want%20to%20join%20Hong%20Kong%20GAA">
          Join the club <ArrowRight size={16} />
        </a>
        <details className="mobile-nav">
          <summary aria-label="Open navigation"><Menu /></summary>
          <nav aria-label="Mobile navigation">
            <a href="#play">Play</a>
            <a href="#club">The club</a>
            <a href="#events">Events</a>
            <a href="#membership">Membership</a>
            <a href="mailto:info@gaa.hk?subject=I%20want%20to%20join%20Hong%20Kong%20GAA">Join the club</a>
          </nav>
        </details>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media">
          <img src="/champions-1.jpeg" alt="Hong Kong GAA players celebrating a tournament win" />
        </div>
        <div className="hero-wash" />
        <div className="hero-grid" />
        <div className="hero-copy">
          <p className="eyebrow light">Hong Kong’s home of Gaelic games</p>
          <h1 id="hero-title">Your game.<br /><span>Your people.</span></h1>
          <p className="hero-intro">
            Football, hurling and camogie in the heart of Hong Kong. Come for a session. Stay for the club.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#play">Find your game <ArrowRight size={18} /></a>
            <a className="button ghost" href="mailto:info@gaa.hk?subject=First%20training%20session">Ask about training</a>
          </div>
        </div>
        <div className="hero-stamp" aria-label="Founded in Hong Kong in 1995">
          <span>Founded</span><strong>1995</strong><span>Hong Kong</span>
        </div>
        <p className="hero-caption">Hong Kong Abú</p>
      </section>

      <section className="welcome" id="club">
        <div>
          <p className="eyebrow">A club that travels with you</p>
          <h2>New to the game?<br />New to Hong Kong?</h2>
        </div>
        <div className="welcome-copy">
          <p>
            Perfect. Hong Kong GAA is a sports club, a social circle and a landing place for people from everywhere. No experience, Irish passport or perfect fitness required.
          </p>
          <a className="text-link" href="mailto:info@gaa.hk?subject=My%20first%20Hong%20Kong%20GAA%20session">
            Come to your first session <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section className="sports" id="play" aria-labelledby="sports-title">
        <div className="section-heading inverse">
          <p className="eyebrow light">Three sports. One club.</p>
          <h2 id="sports-title">Pick your pace.</h2>
        </div>
        <div className="sport-list">
          {sports.map((sport) => (
            <article className="sport-card" key={sport.title}>
              <div className="sport-image"><img src={sport.image} alt="" /></div>
              <span>{sport.number}</span>
              <div>
                <h3>{sport.title}</h3>
                <p className="sport-line">{sport.line}</p>
                <p className="sport-copy">{sport.copy}</p>
              </div>
              <a href="mailto:info@gaa.hk?subject=I%20want%20to%20try%20a%20training%20session" aria-label={`Ask about ${sport.title}`}>
                <ArrowRight />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="event" id="events" aria-labelledby="event-title">
        <div className="event-image">
          <img src="/nags-2026.jpeg" alt="Hong Kong GAA teams at the 2026 North Asian Gaelic Games" />
          <span className="image-label">One club · across Asia</span>
        </div>
        <div className="event-copy">
          <p className="eyebrow">The big one is coming home</p>
          <h2 id="event-title">Asian Gaelic Games 2026</h2>
          <p className="event-lede">Hong Kong hosts Asia’s biggest weekend of Gaelic games.</p>
          <dl>
            <div><dt><CalendarDays /></dt><dd><strong>21–22 November</strong><span>2026</span></dd></div>
            <div><dt><MapPin /></dt><dd><strong>Hong Kong</strong><span>Venue details to follow</span></dd></div>
          </dl>
          <a className="button dark" href="mailto:info@gaa.hk?subject=Asian%20Gaelic%20Games%202026">
            Get event updates <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section className="honours" aria-labelledby="honours-title">
        <div className="honours-intro">
          <Trophy />
          <p className="eyebrow">2025–26 honours</p>
          <h2 id="honours-title">We came.<br />We played.<br /><em>We brought it home.</em></h2>
        </div>
        <ol className="honours-list">
          {achievements.map((item, index) => (
            <li key={item}><span>0{index + 1}</span><p>{item}</p><ChevronRight /></li>
          ))}
        </ol>
      </section>

      <section className="membership" id="membership" aria-labelledby="membership-title">
        <div className="section-heading">
          <p className="eyebrow">Membership</p>
          <h2 id="membership-title">There’s a place for you.</h2>
          <p>Play, support, volunteer or bring the family. Choose the membership that fits.</p>
        </div>
        <div className="membership-grid">
          {memberships.map((item) => (
            <article key={item.title}>
              <Users aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.note}</p>
              <strong>{item.price}<small> / season</small></strong>
            </article>
          ))}
        </div>
        <a className="button primary" href="https://www.gaa.hk/membership" target="_blank" rel="noreferrer">
          View membership options <ArrowRight size={18} />
        </a>
      </section>

      <section className="closing">
        <div>
          <p className="eyebrow light">Your first session starts here</p>
          <h2>Bring boots.<br />We’ll do the rest.</h2>
        </div>
        <a href="mailto:info@gaa.hk?subject=I%20want%20to%20join%20Hong%20Kong%20GAA">
          <Mail />
          <span><small>Say hello</small>info@gaa.hk</span>
          <ArrowRight />
        </a>
      </section>

      <footer>
        <Crest compact />
        <p>Football · Hurling · Camogie · Community</p>
        <p>© 2026 Hong Kong GAA</p>
      </footer>
    </main>
  );
}
