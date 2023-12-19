import React from "react";
import styles from "./Home.module.css";
import { useFirestore } from "../../hooks/useFirestore";
export default function TransactionList({ transactions }) {
  const { deleteDocument } = useFirestore("transactions");

  return (
    <ul className={styles.transactions}>
      {transactions.map((trans) => (
        <li key={trans.id}>
          <p className={styles.name}>{trans.name}</p>
          <p className={styles.amount}>${trans.amount}</p>
          <button onClick={() => deleteDocument(trans.id)}>x</button>
        </li>
      ))}
    </ul>
  );
}
