import { services } from "@/config";

// Scrolling gold band made from your service names
export default function Marquee() {
  const items = [...services.map((s) => s.name), "Walk-ins welcome"];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {items.map((t) => (
              <span key={t + k} className="flex items-center whitespace-nowrap text-sm">
                <span className="mx-6">{t}</span><span>✂</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}