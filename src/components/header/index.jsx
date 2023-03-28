import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { loginUser, logoutUser } from '../../Redux/user/actions';

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { selectProductsCount } from "../../Redux/cart/cart.selector";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  
  const { currentUser } = useSelector( (rootReducer) => rootReducer.userReducer);
  
  const productsCount = useSelector(selectProductsCount);

  const dispatch = useDispatch();

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch(loginUser({
      name: 'Diego',
      email: 'diego@email.com'
    }));
  };
  const handleLogoutClick = () => {
    dispatch(logoutUser());
  }

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? <div onClick={handleLogoutClick}>Sair</div> :
          <div onClick={handleLoginClick}>Login</div>
        }
        <div className="cart" onClick={handleCartClick}>Carrinho <span>{productsCount}</span></div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
