// ══════════════════════════════════════════════════
//  components/UsersTable.tsx
// ══════════════════════════════════════════════════

import type { UsersTableProps } from "../types";

const UsersTable = ({ users }: UsersTableProps) => {
  return (
    <div className="table-card">
      <div className="table-header">
        <h3>All Users</h3>
        <span className="table-count">{users.length} users</span>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Joined</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  <div className="user-cell">
                    {/* Avatar مكون من أول حرفين من الاسم */}
                    <div className="table-avatar">{user.avatar}</div>
                    <span>{user.name}</span>
                  </div>
                </td>
                <td className="email">{user.email}</td>
                <td>
                  <span className="role-badge">{user.role}</span>
                </td>
                <td>
                  <span className={`badge ${user.status === "Active" ? "badge-success" : "badge-warning"}`}>
                    {user.status}
                  </span>
                </td>
                <td className="date">{user.joined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
