import React from "react";
import "./style.css";
import { FaShoppingCart } from "react-icons/fa";
import { AppStateContext } from "./AppState";

interface Props {}

interface State {
  isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log(e.target);
    if ((e.target as HTMLElement).nodeName === "SPAN") {
      e.target as HTMLSpanElement;
    }
    this.setState((prepState) => ({ isOpen: !prepState.isOpen }));
  }

  render() {
    return (
      <AppStateContext.Consumer>
        {(state) => {
          return (
            <div className="cartContainer">
              <button
                type="button"
                className="cartButton"
                onClick={this.handleClick}
              >
                <FaShoppingCart />
                <span>{state.cart.items.length} book(s)</span>
              </button>
              <div
                className="cartDropDown"
                style={{
                  display: this.state.isOpen === true ? "block" : "none",
                }}
              >
                <ul>
                  {state.cart.items.map((item) => {
                    return (
                      <li key={item.id}>
                        {item.name} &times; {item.quantity}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        }}
      </AppStateContext.Consumer>
    );
  }
}

export default Cart;
