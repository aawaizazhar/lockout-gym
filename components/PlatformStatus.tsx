"use client";

import { useEffect, useState } from "react";

interface Platform {
  id: string;
  name: string;
  lift: string;
  weight: string;
  status: "active" | "idle" | "loading";
  lifter: string;
}

const initialPlatforms: Platform[] = [
  { id: "PLT-01", name: "Platform 1", lift: "Squat · Block B", weight: "405 LBS", status: "active", lifter: "M. Vance" },
  { id: "PLT-02", name: "Platform 2", lift: "Deadlift · Top Set", weight: "495 LBS", status: "active", lifter: "D. Whitfield" },
  { id: "PLT-03", name: "Platform 3", lift: "Press · Volume", weight: "185 LBS", status: "active", lifter: "T. Vaughn" },
  { id: "PLT-04", name: "Platform 4", lift: "Bench · Warmup", weight: "225 LBS", status: "active", lifter: "J. Reid" },
  { id: "PLT-05", name: "Platform 5", lift: "Row · Accessory", weight: "135 LBS", status: "active", lifter: "P. Raman" },
];

export default function PlatformStatus() {
  const [clock, setClock] = useState("14:32 EST");
  const [liftCount, setLiftCount] = useState(47);
  const [platforms, setPlatforms] = useState<Platform[]>(initialPlatforms);
  const [selectedPlat, setSelectedPlat] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      const h = String(d.getHours()).padStart(2, "0");
      const m = String(d.getMinutes()).padStart(2, "0");
      setClock(`${h}:${m} EST`);
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  // Live simulation: periodic subtle weight/status shifts for dynamic feel
  useEffect(() => {
    const simInterval = setInterval(() => {
      setLiftCount((prev) => prev + (Math.random() > 0.6 ? 1 : 0));
      setPlatforms((prev) =>
        prev.map((p) => {
          if (p.id === "PLT-04" && Math.random() > 0.7) {
            return {
              ...p,
              lift: "Bench · Warmup",
              weight: "225 LBS",
              status: "active",
              lifter: "J. Reid",
            };
          }
          return p;
        })
      );
    }, 8000);

    return () => clearInterval(simInterval);
  }, []);

  return (
    <aside className="hero-right" aria-label="Live platform status">
      <div className="ps-header">
        <span className="ps-live">
          <span className="ps-dot" /> PLATFORM STATUS
        </span>
        <span className="ps-tag">// LIVE TELEMETRY</span>
      </div>

      <div className="ps-main-body">
        {/* Live Platform Rows */}
        <div className="ps-section">
          <div className="ps-subhead">
            <span>RACK TELEMETRY</span>
            <span>5 PLATFORMS ONLINE</span>
          </div>
          <div className="ps-grid">
            {platforms.map((p) => {
              const isSelected = selectedPlat === p.id;
              return (
                <div
                  key={p.id}
                  onClick={() => setSelectedPlat(isSelected ? null : p.id)}
                  className={`ps-row ${p.status === "active" ? "active" : "idle"} ${
                    isSelected ? "selected" : ""
                  }`}
                  title="Click to view platform details"
                >
                  <span className="plat">{p.id}</span>
                  <span className="lift">
                    {p.lift}
                    {isSelected && <small className="lifter-tag"> · {p.lifter}</small>}
                  </span>
                  <span className="value">{p.weight}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Facility Environment & Equipment Standards */}
        <div className="ps-middle-block">
          <div className="ps-subhead">
            <span>FACILITY STANDARDS & ENVIRONMENT</span>
            <span className="ps-status-pill">CALIBRATED</span>
          </div>
          <div className="ps-spec-grid">
            <div className="ps-spec-card">
              <span className="ps-spec-label">EQUIPMENT SPEC</span>
              <span className="ps-spec-val">ELEIKO STEEL DISCS + RACKS</span>
            </div>
            <div className="ps-spec-card">
              <span className="ps-spec-label">COACHING RATIO</span>
              <span className="ps-spec-val">1 : 4 MAX ATHLETE CAP</span>
            </div>
            <div className="ps-spec-card">
              <span className="ps-spec-label">AIR METRICS</span>
              <span className="ps-spec-val">68°F · 42% HUM · HEPA AIR</span>
            </div>
            <div className="ps-spec-card">
              <span className="ps-spec-label">ACCESS MANDATE</span>
              <span className="ps-spec-val">100 CAPPED · 0 DROP-INS</span>
            </div>
          </div>
        </div>

        {/* Upcoming Reserved Rack Sessions */}
        <div className="ps-middle-block">
          <div className="ps-subhead">
            <span>UPCOMING RESERVED RACK BLOCKS</span>
            <span>MORNING BLOCK</span>
          </div>
          <div className="ps-schedule-list">
            <div className="ps-schedule-item">
              <span className="ps-time">06:00 AM</span>
              <span className="ps-detail">RACK 01 · SQUAT TOP SINGLES</span>
              <span className="ps-lifter">M. VANCE</span>
            </div>
            <div className="ps-schedule-item">
              <span className="ps-time">06:45 AM</span>
              <span className="ps-detail">RACK 03 · BENCH VELOCITY</span>
              <span className="ps-lifter">A. KOVACS</span>
            </div>
            <div className="ps-schedule-item">
              <span className="ps-time">07:30 AM</span>
              <span className="ps-detail">RACK 02 · DEADLIFT OVERLOAD</span>
              <span className="ps-lifter">D. WHITFIELD</span>
            </div>
          </div>
        </div>

        {/* Roster Capacity Gauge */}
        <div className="ps-capacity-card">
          <div className="ps-cap-header">
            <span>FACILITY ROSTER CAPACITY</span>
            <span className="ps-cap-num">93 / 100 FILLED</span>
          </div>
          <div className="ps-cap-bar-wrap">
            <div className="ps-cap-bar-fill" style={{ width: "93%" }} />
          </div>
          <div className="ps-cap-meta">
            <span>7 OPEN SEATS REMAINING</span>
            <span className="ps-cap-notice">APPLICATIONS OPEN</span>
          </div>
        </div>
      </div>

      <div className="ps-footer">
        <div>
          <b id="liftCount">{liftCount}</b>LIFTERS TRACKED TODAY
        </div>
        <div>
          <b>6 / 8</b>SPOTS FILLED · 6AM
        </div>
        <div>
          <b id="clockTime">{clock}</b>LOCAL TIME
        </div>
      </div>
    </aside>
  );
}
