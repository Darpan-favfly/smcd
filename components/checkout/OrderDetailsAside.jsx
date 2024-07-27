import { cad } from "@/lib/converter/priceConverter";
import { cartStore } from "@/storage/cartStore";
import Button from "../ui/button/Button";

const OrderDetailsAside = ({ loading }) => {
  // ===== INITIALIZING STORES =====
  const { cart } = cartStore();

  return (
    <div className="checkout__totals-wrapper">
      <div className="sticky-content">
        <div className="checkout__totals">
          <h3>Your Order</h3>
          <CartItems />
        </div>

        {/* // ===== PAYMENT METHODS ===== */}
        <CODFooter />

        {/* // ===== PAYMENT BUTTON ===== */}
        <Button
          full={true}
          type="submit"
          loading={loading}
          disabled={cart.length === 0}
          label="Place order"
        />
      </div>
    </div>
  );
};

const CODFooter = () => {
  return (
    <div className="checkout__payment-methods">
      <div className="form-check">
        <input
          className="form-check-input form-check-input_fill"
          type="radio"
          checked
        />
        <label className="form-check-label">Cash on delivery</label>
      </div>

      <div className="policy-text">
        Your personal data will be used to process your order, support your
        experience throughout this website, and for other purposes described in
        our{" "}
        <a href="./terms.html" target="_blank">
          privacy policy
        </a>
        .
      </div>
    </div>
  );
};

const CartItems = () => {
  // ===== INITIALIZING STORES =====
  const { cart } = cartStore();

  return (
    <table className="checkout-cart-items">
      {/* // ===== CART LIST HEADER ===== */}
      <thead>
        <tr>
          <th>PRODUCT</th>
          <th className="text-end">SUBTOTAL</th>
        </tr>
      </thead>

      {/* // ===== CART LIST BODY ===== */}
      <tbody>
        {cart.map((item, index) => (
          <tr key={index}>
            <td>{item.title}</td>
            <td className="text-end">
              {cad(item.min_price)} - {cad(item.max_price)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderDetailsAside;
