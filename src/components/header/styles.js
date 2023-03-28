import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #222222;
  display: flex;
  justify-content: space-between;
  color: #eee;
  padding: 20px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
`;

export const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;

  div {
    font-weight: 500;

    &:hover {
      cursor: pointer;
    }

    &:nth-child(1) {
      margin-right: 40px;
    }
  }
  .cart {
    position: relative;
    span {
      position: absolute;
      bottom: 15px;
      right: -15px;
      background: red;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      font-size: 12px
    }
  }
`;
