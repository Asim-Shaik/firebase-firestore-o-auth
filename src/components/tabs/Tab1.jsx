import axios from "axios";
import { useState, useEffect } from "react";
export default function Tab1() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(data.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  // console.log(data);
  const size = 10;
  const items = data.slice(0, size);
  // console.log(items);
  return (
    <div>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <h3>id: {item.id}</h3>
            <h2>title: {item.title}</h2>
            <p>body : {item.body}</p>
          </div>
        );
      })}
    </div>
  );
}
