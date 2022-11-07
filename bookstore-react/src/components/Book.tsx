import React from "react";
import { useSetState } from "./AppState";
import "../components/style.css";

interface Book_Detail {
  id: number;
  title: string;
  price: number;
}

interface Props {
  book: Book_Detail;
}

const Book: React.FC<Props> = ({ book }) => {
  const setState = useSetState();
  const handleAddToCartClick = () => {
    setState((state: any) => {
      const itemExists = state.cart.items.find(
        (item: any) => item.id === book.id
      );
      return {
        ...state,
        cart: {
          ...state.cart,
          items: itemExists
            ? state.cart.items.map((item: any) => {
                if (item.id === book.id) {
                  return { ...item, quantity: item.quantity + 1 };
                }
                return item;
              })
            : [
                ...state.cart.items,
                {
                  id: book.id,
                  name: book.title,
                  price: book.price,
                  quantity: 1,
                },
              ],
        },
      };
    });
  };

  return (
    <li className="bookContainer">
      <h4>{book.title}</h4>
      <p>
        {book.price.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")} VNĐ
      </p>
      <button type="button" onClick={handleAddToCartClick}>
        Add to cart
      </button>
    </li>
  );
};

export default Book;
