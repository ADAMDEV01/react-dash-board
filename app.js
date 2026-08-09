// ══════════════════════════════════════════════════
//  AdminPro Dashboard — app.js
//  بيستخدم Chart.js للرسوم البيانية
//  والـ data كلها simulated عشان مفيش backend
// ══════════════════════════════════════════════════

// ── Fake Data ─────────────────────────────────────
const DATA = {
  kpi: {
    revenue: "$124,530",
    users: "8,249",
    orders: "1,832",
  },

  // بيانات الـ Revenue chart لكل شهر
  monthlyRevenue: [38000, 42000, 35000, 56000, 47000, 61000, 58000, 72000, 65000, 80000, 74000, 90000],

  // بيانات الـ Traffic sources (Pie chart)
  traffic: {
    labels: ["Organic", "Social", "Email", "Direct", "Referral"],
    data: [35, 25, 20, 12, 8],
  },

  // جدول الـ orders
  orders: [
    { id: "#ORD-001", customer: "Sarah Johnson", product: "MacBook Pro", amount: "$1,299", status: "Delivered", date: "Jan 12, 2025" },
    { id: "#ORD-002", customer: "Mike Chen",     product: "iPhone 15",   amount: "$899",  status: "Pending",   date: "Jan 13, 2025" },
    { id: "#ORD-003", customer: "Emma Davis",    product: "AirPods Pro", amount: "$249",  status: "Shipped",   date: "Jan 14, 2025" },
    { id: "#ORD-004", customer: "James Wilson",  product: "iPad Air",    amount: "$599",  status: "Cancelled", date: "Jan 14, 2025" },
    { id: "#ORD-005", customer: "Olivia Brown",  product: "Apple Watch", amount: "$399",  status: "Delivered", date: "Jan 15, 2025" },
    { id: "#ORD-006", customer: "Liam Martinez", product: "iMac 24",     amount: "$1,699","status": "Processing","date": "Jan 15, 2025" },
  ],

  // جدول الـ users
  users: [
    { name: "Sarah Johnson", email: "sarah@example.com",  role: "Admin",    status: "Active",   joined: "Mar 2023" },
    { name: "Mike Chen",     email: "mike@example.com",   role: "Editor",   status: "Active",   joined: "Jun 2023" },
    { name: "Emma Davis",    email: "emma@example.com",   role: "Viewer",   status: "Inactive", joined: "Sep 2023" },
    { name: "James Wilson",  email: "james@example.com",  role: "Editor",   status: "Active",   joined: "Nov 2023" },
    { name: "Olivia Brown",  email: "olivia@example.com", role: "Admin",    status: "Active",   joined: "Jan 2024" },
  ],
};

// ── Status Badge Helper ───────────────────────────
// بترجع HTML string للـ badge بالـ color المناسب
function getBadge(status) {
  const map = {
    Delivered:  "success",
    Active:     "success",
    Shipped:    "info",
    Processing: "info",
    Pending:    "warning",
    Inactive:   "warning",
    Cancelled:  "danger",
  };
  const cls = map[status] || "info";
  return `<span class="badge badge-${cls}">${status}</span>`;
}

// ── Init ──────────────────────────────────────────
window.addEventListener("DOMContentLoaded", () => {
  fillKPIs();
  renderOrdersTable();
  renderUsersTable();
  renderRevenueChart();
  renderTrafficChart();
  renderAnalyticsChart();
  initNavigation();
  initSidebar();
});

// ── Fill KPI Cards ────────────────────────────────
function fillKPIs() {
  // نستخدم counter animation عشان يبان أجمل
  animateCounter("kpiRevenue", DATA.kpi.revenue);
  animateCounter("kpiUsers",   DATA.kpi.users);
  animateCounter("kpiOrders",  DATA.kpi.orders);
}

// بتحرك الـ number من 0 للقيمة الحقيقية
function animateCounter(id, finalValue) {
  const el = document.getElementById(id);
  el.textContent = finalValue; // بسيط — في مشروع أكبر ممكن تعمل animation حقيقية
}

// ── Render Orders Table ───────────────────────────
function renderOrdersTable() {
  const tbody = document.getElementById("ordersTableBody");

  tbody.innerHTML = DATA.orders
    .map(
      (order) => `
      <tr>
        <td style="font-weight:600;color:var(--accent)">${order.id}</td>
        <td>${order.customer}</td>
        <td>${order.product}</td>
        <td style="font-weight:600">${order.amount}</td>
        <td>${getBadge(order.status)}</td>
        <td style="color:var(--muted)">${order.date}</td>
      </tr>
    `
    )
    .join("");
}

// ── Render Users Table ────────────────────────────
function renderUsersTable() {
  const tbody = document.getElementById("usersTableBody");

  tbody.innerHTML = DATA.users
    .map(
      (user) => `
      <tr>
        <td style="font-weight:600">${user.name}</td>
        <td style="color:var(--muted)">${user.email}</td>
        <td>${user.role}</td>
        <td>${getBadge(user.status)}</td>
        <td style="color:var(--muted)">${user.joined}</td>
      </tr>
    `
    )
    .join("");
}

// ── Revenue Chart (Line) ──────────────────────────
function renderRevenueChart() {
  const ctx = document.getElementById("revenueChart").getContext("2d");

  const labels = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [{
        label: "Revenue ($)",
        data: DATA.monthlyRevenue,
        borderColor: "#6366f1",
        backgroundColor: "rgba(99,102,241,0.1)",
        borderWidth: 2.5,
        fill: true,
        tension: 0.4,  // منحنى ناعم
        pointBackgroundColor: "#6366f1",
        pointRadius: 4,
      }],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: { mode: "index", intersect: false },
      },
      scales: {
        y: {
          beginAtZero: false,
          grid: { color: "#f1f5f9" },
          ticks: {
            callback: (val) => `$${(val / 1000).toFixed(0)}k`,
          },
        },
        x: { grid: { display: false } },
      },
    },
  });
}

// ── Traffic Chart (Doughnut) ──────────────────────
function renderTrafficChart() {
  const ctx = document.getElementById("trafficChart").getContext("2d");

  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: DATA.traffic.labels,
      datasets: [{
        data: DATA.traffic.data,
        backgroundColor: ["#6366f1","#22c55e","#f59e0b","#ef4444","#06b6d4"],
        borderWidth: 0,
        hoverOffset: 6,
      }],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "bottom", labels: { padding: 16, font: { size: 12 } } },
      },
      cutout: "65%",
    },
  });
}

// ── Analytics Chart (Bar) ─────────────────────────
function renderAnalyticsChart() {
  const ctx = document.getElementById("analyticsChart").getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
      datasets: [
        {
          label: "New Users",
          data: [320, 450, 380, 520, 410, 590, 560, 680, 610, 740, 700, 820],
          backgroundColor: "#6366f1",
          borderRadius: 6,
        },
        {
          label: "Returning Users",
          data: [200, 280, 240, 310, 260, 370, 340, 430, 390, 470, 450, 530],
          backgroundColor: "#a5b4fc",
          borderRadius: 6,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "top" },
      },
      scales: {
        y: { beginAtZero: true, grid: { color: "#f1f5f9" } },
        x: { grid: { display: false } },
      },
    },
  });
}

// ── Navigation Between Pages ──────────────────────
function initNavigation() {
  const navItems   = document.querySelectorAll(".nav-item");
  const pages      = document.querySelectorAll(".page");
  const pageTitle  = document.getElementById("pageTitle");

  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const targetPage = item.getAttribute("data-page");

      // نشيل active من كل nav items وpages
      navItems.forEach((n) => n.classList.remove("active"));
      pages.forEach((p) => p.classList.remove("active"));

      // نضيف active على اللي اتضغط
      item.classList.add("active");
      document.getElementById(`page-${targetPage}`).classList.add("active");

      // نحدث الـ title في الـ topbar
      pageTitle.textContent = item.textContent.trim();

      // نقفل الـ sidebar على موبايل
      document.getElementById("sidebar").classList.remove("open");
    });
  });
}

// ── Mobile Sidebar Toggle ─────────────────────────
function initSidebar() {
  const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.getElementById("sidebar");

  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
}
