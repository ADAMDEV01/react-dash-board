// ══════════════════════════════════════════════════
//  components/Sidebar.tsx
//
//  TypeScript concepts هنا:
//  - SidebarProps: بيحدد إن activePage لازم string
//    وonNavigate لازم function بتاخد string وترجع void
//  - navItems.map: TypeScript عارف إن كل item من نوع NavItem
// ══════════════════════════════════════════════════

import type { SidebarProps } from "../types";
import { navItems } from "../data/mockData";

const Sidebar = ({ activePage, onNavigate, isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/* Overlay للموبايل — بيظهر لما الـ sidebar مفتوح */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* Logo */}
        <div className="sidebar-logo">
          <span>📊</span> AdminPro
        </div>

        {/* Navigation Links */}
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              // لو الـ id بتاعه = activePage نحط active class
              className={`nav-item ${activePage === item.id ? "active" : ""}`}
              onClick={() => {
                onNavigate(item.id);   // بنبعت الـ id للـ parent
                onClose();             // بنقفل الـ sidebar على موبايل
              }}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* User Info في الأسفل */}
        <div className="sidebar-user">
          <div className="user-avatar">AG</div>
          <div>
            <p className="user-name">Adam Gomaa</p>
            <p className="user-role">Administrator</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
