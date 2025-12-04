import { useEffect, useState } from "react";

function StatsBar() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/home/stats")
      .then((res) => res.json())
      .then(setStats)
      .catch((err) => console.error("Failed to load stats", err));
  }, []);

  return (
    <section
      className="stats-bar"
      role="region"
      aria-label="Company statistics"
    >
      <img
        src="/images/image1.jpeg"
        alt=""
        className="stats-bg"
        aria-hidden="true"
        loading="lazy"
      />
      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.id} className="stat">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsBar;
