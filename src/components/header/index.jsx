import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { login, logout } from '../../Redux/user/slice';
import { selectProductsCount } from "../../Redux/cart/cart.selector";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  
  const { currentUser } = useSelector( (rootReducer) => rootReducer.userReducer);
  //console.log(currentUser)
  const productsCount = useSelector(selectProductsCount);

  const dispatch = useDispatch();

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch(login({
      name: 'Diego',
      email: 'diego@email.com'
    }));
  };
  const handleLogoutClick = () => {
    dispatch(logout());
  }

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? <div>Bem vindo! {currentUser.name}</div> : null}
        
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
