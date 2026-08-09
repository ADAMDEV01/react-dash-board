// ══════════════════════════════════════════════════
//  types/index.ts
//  هنا بنعرف كل الـ TypeScript types بتاعت المشروع
//  الفكرة: بدل ما نكتب { name: string, value: number }
//  في كل مكان، بنعرف Type مرة واحدة ونستخدمه في كل حتة
// ══════════════════════════════════════════════════

// ── KPI Card ──────────────────────────────────────
// ده الـ type بتاع كل كارت في الـ KPI section
export interface KpiCard {
  id: number;
  title: string;
  value: string;
  change: number;      // موجب = زيادة، سالب = نقصان
  icon: string;
  color: string;       // لون الـ icon background
}

// ── Chart Data ────────────────────────────────────
// بيانات الـ charts - كل شهر فيه اسم + revenue + users
export interface ChartDataPoint {
  month: string;
  revenue: number;
  users: number;
}

// ── Order ─────────────────────────────────────────
export interface Order {
  id: string;
  customer: string;
  product: string;
  amount: number;
  status: OrderStatus;  // مش string عادي — enum محدد
  date: string;
}

// Union Type: الـ status لازم يكون واحد من دول بس
export type OrderStatus = "Delivered" | "Pending" | "Shipped" | "Cancelled" | "Processing";

// ── User ──────────────────────────────────────────
export interface User {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "Editor" | "Viewer";   // Union type كمان
  status: "Active" | "Inactive";
  avatar: string;
  joined: string;
}

// ── Nav Item ──────────────────────────────────────
export interface NavItem {
  id: string;
  label: string;
  icon: string;
}

// ── Props Types ───────────────────────────────────
// كل component بياخد props، بنحدد شكلها هنا

export interface KpiCardProps {
  card: KpiCard;
}

export interface SidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export interface OrdersTableProps {
  orders: Order[];
}

export interface UsersTableProps {
  users: User[];
}
