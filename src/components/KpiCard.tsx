// ══════════════════════════════════════════════════
//  components/KpiCard.tsx
//
//  TypeScript concepts هنا:
//  - Props interface: بنحدد شكل الـ props بدقة
//  - لو غلطت وبعتش card صح، TypeScript يصرخ فورًا
// ══════════════════════════════════════════════════

import type { KpiCardProps } from "../types";

// الـ Component بياخد props من نوع KpiCardProps
// ده بيضمن إن card لازم يكون فيه id, title, value, change, icon, color
const KpiCard = ({ card }: KpiCardProps) => {
  // نحدد لو الـ change موجب أو سالب عشان نغير اللون
  const isPositive = card.change >= 0;

  return (
    <div className="kpi-card">
      {/* Icon background بياخد اللون من الـ data */}
      <div className="kpi-icon" style={{ background: card.color }}>
        {card.icon}
      </div>

      <div className="kpi-info">
        <p className="kpi-label">{card.title}</p>
        <h3 className="kpi-value">{card.value}</h3>

        {/* لون الـ change بيتغير حسب إذا كان موجب أو سالب */}
        <p className={`kpi-change ${isPositive ? "positive" : "negative"}`}>
          {isPositive ? "▲" : "▼"} {Math.abs(card.change)}% this month
        </p>
      </div>
    </div>
  );
};

export default KpiCard;
