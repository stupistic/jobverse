import "./Items.css";
import { useEffect, useState } from "react";
import Item from "./Item";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import CircularProgress from "@mui/material/CircularProgress";

let page = 0;
const fetchData = (setItems, items) => {
  axios
    .get(`https://dummyjson.com/products?skip=${page}&limit=10`)
    .then((res) => {
      setItems([...items, ...res.data.products]);
      page = page + 5;
    });
};

export default function Items() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchData(setItems, items);
  }, []);
  return (
    <InfiniteScroll
      dataLength={items.length} //This is important field to render the next data
      next={() => {
        fetchData(setItems, items);
      }}
      hasMore={true}
      loader={
        <h2 style={{ textAlign: "center" }}>
          <CircularProgress />
        </h2>
      }
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div className="container">
        <div className="child">
          {items.map((item) => {
            return <Item product={item} key={Math.random()} />;
          })}
        </div>
      </div>
    </InfiniteScroll>
  );
}
