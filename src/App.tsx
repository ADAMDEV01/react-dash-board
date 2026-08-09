// ══════════════════════════════════════════════════
//  App.tsx — الـ Root Component
//
//  TypeScript concepts هنا:
//  - useState<string>: بنحدد إن الـ state هتكون string
//  - useState<boolean>: state من نوع boolean
// ══════════════════════════════════════════════════

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import KpiCard from "./components/KpiCard";
import RevenueChart from "./components/RevenueChart";
import OrdersTable from "./components/OrdersTable";
import UsersTable from "./components/UsersTable";
import { kpiCards, chartData, orders, users } from "./data/mockData";
import "./App.css";

type ChartType = "line" | "bar";

const App = () => {
  const [activePage, setActivePage] = useState<string>("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [chartType, setChartType] = useState<ChartType>("line");

  const pageTitles: Record<string, string> = {
    overview:  "Dashboard Overview",
    analytics: "Analytics",
    orders:    "Orders",
    users:     "Users",
    settings:  "Settings",
  };

  const renderPage = () => {
    switch (activePage) {
      case "overview":
        return (
          <div className="page">
            <div className="kpi-grid">
              {kpiCards.map((card) => (
                <KpiCard key={card.id} card={card} />
              ))}
            </div>
            <div className="chart-card">
              <div className="chart-header">
                <h3>Revenue Overview</h3>
                <div className="chart-toggle">
                  <button className={chartType === "line" ? "active" : ""} onClick={() => setChartType("line")}>Line</button>
                  <button className={chartType === "bar" ? "active" : ""} onClick={() => setChartType("bar")}>Bar</button>
                </div>
              </div>
              <RevenueChart data={chartData} type={chartType} />
            </div>
            <OrdersTable orders={orders.slice(0, 5)} />
          </div>
        );
      case "analytics":
        return (
          <div className="page">
            <div className="chart-card">
              <div className="chart-header"><h3>Revenue — Full Year</h3></div>
              <RevenueChart data={chartData} type="bar" />
            </div>
            <div className="chart-card" style={{ marginTop: "1rem" }}>
              <div className="chart-header"><h3>Revenue Trend</h3></div>
              <RevenueChart data={chartData} type="line" />
            </div>
          </div>
        );
      case "orders":
        return <div className="page"><OrdersTable orders={orders} /></div>;
      case "users":
        return <div className="page"><UsersTable users={users} /></div>;
      case "settings":
        return <div className="page"><div className="empty-state"><p>⚙️ Settings panel coming soon.</p></div></div>;
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <Sidebar
        activePage={activePage}
        onNavigate={setActivePage}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <div className="main-wrapper">
        <header className="topbar">
          <button className="menu-btn" onClick={() => setIsSidebarOpen(true)}>☰</button>
          <h1 className="page-title">{pageTitles[activePage]}</h1>
          <div className="topbar-right">
            <button className="notif-btn">🔔 <span className="notif-badge">3</span></button>
            <div className="topbar-avatar">AG</div>
          </div>
        </header>
        <main className="content">{renderPage()}</main>
      </div>
    </div>
  );
};

export default App;
