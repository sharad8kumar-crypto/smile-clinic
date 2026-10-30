"use client";

import { useSyncExternalStore } from "react";

function checkOpen() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    hour: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date());

  const weekday = parts.find((p) => p.type === "weekday")?.value;
  const hour = Number(parts.find((p) => p.type === "hour")?.value);
  return weekday !== "Sun" && hour >= 10 && hour < 20;
}

// Har minute browser se pooch ke badge refresh hota hai
function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 60_000);
  return () => clearInterval(id);
}

export default function OpenStatus() {
  // Server pe null milta hai, browser pe asli value. Isse hydration error nahi aata.
  const open = useSyncExternalStore(subscribe, checkOpen, () => null);

  if (open === null) return <span className="inline-block h-8" />;

  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium shadow-sm">
      <span className="relative flex h-2.5 w-2.5">
        {open && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />}
        <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${open ? "bg-green-500" : "bg-red-500"}`} />
      </span>
      {open ? "Open now · until 8:00 PM" : "Closed now · opens 10:00 AM"}
    </span>
  );
}