// ══════════════════════════════════════════════════
//  data/mockData.ts
//  بيانات وهمية بتمثل الـ dashboard data
//  في مشروع حقيقي ده هيجي من API
//  لاحظ إننا بنستخدم الـ types اللي عرفناها
// ══════════════════════════════════════════════════

import type { KpiCard, ChartDataPoint, Order, User, NavItem } from "../types";

// ── KPI Cards ─────────────────────────────────────
export const kpiCards: KpiCard[] = [
  { id: 1, title: "Total Revenue",  value: "$124,530", change: 12.5,  icon: "💰", color: "#dbeafe" },
  { id: 2, title: "Total Users",    value: "8,249",    change: 8.2,   icon: "👥", color: "#dcfce7" },
  { id: 3, title: "Total Orders",   value: "1,832",    change: -3.1,  icon: "📦", color: "#fef9c3" },
  { id: 4, title: "Satisfaction",   value: "94.3%",    change: 1.8,   icon: "😊", color: "#fce7f3" },
];

// ── Chart Data ────────────────────────────────────
export const chartData: ChartDataPoint[] = [
  { month: "Jan", revenue: 38000, users: 320 },
  { month: "Feb", revenue: 42000, users: 450 },
  { month: "Mar", revenue: 35000, users: 380 },
  { month: "Apr", revenue: 56000, users: 520 },
  { month: "May", revenue: 47000, users: 410 },
  { month: "Jun", revenue: 61000, users: 590 },
  { month: "Jul", revenue: 58000, users: 560 },
  { month: "Aug", revenue: 72000, users: 680 },
  { month: "Sep", revenue: 65000, users: 610 },
  { month: "Oct", revenue: 80000, users: 740 },
  { month: "Nov", revenue: 74000, users: 700 },
  { month: "Dec", revenue: 90000, users: 820 },
];

// ── Orders ────────────────────────────────────────
export const orders: Order[] = [
  { id: "#ORD-001", customer: "Sarah Johnson", product: "MacBook Pro",  amount: 1299, status: "Delivered",  date: "Jan 12, 2025" },
  { id: "#ORD-002", customer: "Mike Chen",     product: "iPhone 15",    amount: 899,  status: "Pending",    date: "Jan 13, 2025" },
  { id: "#ORD-003", customer: "Emma Davis",    product: "AirPods Pro",  amount: 249,  status: "Shipped",    date: "Jan 14, 2025" },
  { id: "#ORD-004", customer: "James Wilson",  product: "iPad Air",     amount: 599,  status: "Cancelled",  date: "Jan 14, 2025" },
  { id: "#ORD-005", customer: "Olivia Brown",  product: "Apple Watch",  amount: 399,  status: "Delivered",  date: "Jan 15, 2025" },
  { id: "#ORD-006", customer: "Liam Martinez", product: "iMac 24",      amount: 1699, status: "Processing", date: "Jan 15, 2025" },
];

// ── Users ─────────────────────────────────────────
export const users: User[] = [
  { id: 1, name: "Sarah Johnson", email: "sarah@example.com",  role: "Admin",  status: "Active",   avatar: "SJ", joined: "Mar 2023" },
  { id: 2, name: "Mike Chen",     email: "mike@example.com",   role: "Editor", status: "Active",   avatar: "MC", joined: "Jun 2023" },
  { id: 3, name: "Emma Davis",    email: "emma@example.com",   role: "Viewer", status: "Inactive", avatar: "ED", joined: "Sep 2023" },
  { id: 4, name: "James Wilson",  email: "james@example.com",  role: "Editor", status: "Active",   avatar: "JW", joined: "Nov 2023" },
  { id: 5, name: "Olivia Brown",  email: "olivia@example.com", role: "Admin",  status: "Active",   avatar: "OB", joined: "Jan 2024" },
];

// ── Nav Items ─────────────────────────────────────
export const navItems: NavItem[] = [
  { id: "overview",   label: "Overview",   icon: "🏠" },
  { id: "analytics",  label: "Analytics",  icon: "📈" },
  { id: "orders",     label: "Orders",     icon: "📦" },
  { id: "users",      label: "Users",      icon: "👥" },
  { id: "settings",   label: "Settings",   icon: "⚙️"  },
];
