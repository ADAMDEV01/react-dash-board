// ══════════════════════════════════════════════════
//  components/OrdersTable.tsx
//
//  TypeScript concepts هنا:
//  - Record<OrderStatus, string>: object بيـ map
//    كل OrderStatus لـ class name معينة
//    ده بيضمن إننا مش بنسيب أي status من غير style
// ══════════════════════════════════════════════════

import type { OrdersTableProps, OrderStatus } from "../types";

// Record<K, V> = object كل key من نوع K وكل value من نوع V
// بيضمن إن كل status عنده badge class — لو فاتنا واحد TypeScript بيقولنا
const badgeClass: Record<OrderStatus, string> = {
  Delivered:  "badge-success",
  Shipped:    "badge-info",
  Processing: "badge-info",
  Pending:    "badge-warning",
  Cancelled:  "badge-danger",
};

const OrdersTable = ({ orders }: OrdersTableProps) => {
  return (
    <div className="table-card">
      <div className="table-header">
        <h3>Recent Orders</h3>
        <span className="table-count">{orders.length} orders</span>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="order-id">{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.product}</td>
                {/* toLocaleString بتحول الرقم لـ $1,299 */}
                <td className="amount">${order.amount.toLocaleString()}</td>
                <td>
                  {/* بنجيب الـ class من الـ Record فوق */}
                  <span className={`badge ${badgeClass[order.status]}`}>
                    {order.status}
                  </span>
                </td>
                <td className="date">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;
