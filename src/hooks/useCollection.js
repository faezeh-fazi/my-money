import { useEffect, useRef, useState } from "react";
import { projectFirestore } from "../firebase/config";

export const useCollection = (collection, _query, _orederBy) => {
  const [documents, setDocuments] = useState([]);
  const [error, setError] = useState(null);

  const query = useRef(_query).current;
  const order = useRef(_orederBy).current;

  useEffect(() => {
    let reference = projectFirestore.collection(collection);

    if (query) {
      reference = reference.where(...query);
    }
    if(order) {
      reference = reference.orderBy(...order);
    }

    const unsub = reference.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        setDocuments(results);
        setError(null);
      },
      (err) => {
        console.log(err.message);
        setError("Could not fetch data");
      }
    );

    return () => unsub();
  }, [collection, query, order]);

  return { documents, error };
};
