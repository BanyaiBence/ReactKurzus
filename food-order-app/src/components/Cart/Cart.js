import style from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
	const cartCtx = useContext(CartContext);

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0;

	const cartItemAddHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};
	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const cartItems = (
		<ul className={style["cart-items"]}>
			{cartCtx.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddHandler.bind(null, item)}
				/>
			))}
		</ul>
	);
	return (
		<Modal onClose={props.onHideCart}>
			{cartItems}
			<div className={style.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={style.actions}>
				<button
					className={style["button--alt"]}
					onClick={props.onHideCart}
				>
					Close
				</button>
				{hasItems && <button className={style.button}>Order</button>}
			</div>
		</Modal>
	);
};

export default Cart;
