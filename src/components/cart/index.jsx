import { useSelector } from "react-redux";
import { selectProductsTotalPrice } from '../../Redux/cart/cart.selector.js';

//components
import CartItem from '../cart-item';

// Styles
import * as Styles from "./styles";

const Cart = ({ isVisible, setIsVisible }) => {
  const { products } = useSelector( rootReducer => rootReducer.cartReducer)
  const productsTotalPrice = useSelector(selectProductsTotalPrice);

  const handleEscapeAreaClick = () => setIsVisible(false);

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        {products.map( product => <CartItem key={product.id} product={product}/>)}
        <hr />
        <Styles.CartTotal>
          {products.length === 0 ? <span>Carrinho vazio</span> : `Total: R$${productsTotalPrice}`}
        </Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
