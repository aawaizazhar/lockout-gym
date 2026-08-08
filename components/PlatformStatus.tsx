"use client";

import { useEffect, useState } from "react";

export default function PlatformStatus() {
  const [clock, setClock] = useState("14:32 EST");
  const [liftCount, setLiftCount] = useState(47);

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

  return (
    <aside className="hero-right" aria-label="Live platform status">
      <div className="ps-header">
        <span className="ps-live">
          <span className="ps-dot" /> PLATFORM STATUS
        </span>
        <span>// LIVE</span>
      </div>
      <div className="ps-grid">
        <div className="ps-row active">
          <span className="plat">PLT-01</span>
          <span className="lift">Squat · Block B</span>
          <span className="value">405 LBS</span>
        </div>
        <div className="ps-row active">
          <span className="plat">PLT-02</span>
          <span className="lift">Deadlift · Top Set</span>
          <span className="value">495 LBS</span>
        </div>
        <div className="ps-row">
          <span className="plat">PLT-03</span>
          <span className="lift">Press · Volume</span>
          <span className="value">185 LBS</span>
        </div>
        <div className="ps-row idle">
          <span className="plat">PLT-04</span>
          <span className="lift">— open —</span>
          <span className="value">LOADING</span>
        </div>
        <div className="ps-row">
          <span className="plat">PLT-05</span>
          <span className="lift">Row · Accessory</span>
          <span className="value">135 LBS</span>
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