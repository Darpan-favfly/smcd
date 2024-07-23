"use client";
import useOrderStore from "@/store/orderStore";
import { userProfileStore } from "@/store/userStore";
import Link from "next/link";
import { useEffect, useState } from "react";

const OrdersSection = () => {
  const getUserOrders = useOrderStore((state) => state.getUserOrders);
  const orders = useOrderStore((state) => state.orders);
  const uid = userProfileStore((state) => state.userProfile?.uid);
  const [loading, setLoading] = useState(true);
  console.log(uid);
  const products = orders?.map((order) => order.products);
  console.log(products);

  useEffect(() => {
    const fetchOrders = async () => {
      if (uid) {
        await getUserOrders(uid);
      }
      setLoading(false);
    };
    fetchOrders();
  }, [uid]);

  return (
    <div className="col-lg-9">
      <div className="page-content my-account__orders-list">
        {loading ? (
          <p>Loading orders...</p>
        ) : orders?.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((item, index) => (
                <>
                  {item.length > 1 &&
                    item.map((product, index) => (
                      <tr key={index}>
                        <td>{product?.title}</td>
                        <td>
                          {new Date(product.orderDate).toLocaleDateString()}
                        </td>
                        <td>{product.orderStatus}</td>
                        <td>{`$${product.totalPrice * product?.quantity} for ${product?.quantity} items`}</td>
                        <td>
                          <Link
                            href={`/${product?.id}`}
                            className="btn btn-primary"
                            style={{ borderRadius: 15 }}
                          >
                            VIEW
                          </Link>
                        </td>
                      </tr>
                    ))}
                  <tr key={index}>
                    <td>{item?.title}</td>
                    <td>{new Date(item.orderDate).toLocaleDateString()}</td>
                    <td>{item.orderStatus}</td>
                    <td>{`$${item.totalPrice * item?.quantity} for ${item?.quantity} items`}</td>
                    <td>
                      <Link
                        href={`/${item?.id}`}
                        className="btn btn-primary"
                        style={{ borderRadius: 15 }}
                      >
                        VIEW
                      </Link>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default OrdersSection;
