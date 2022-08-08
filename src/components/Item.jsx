import "./Item.css";
export default function Item({ product }) {
  return (
    <>
      <div className="sus">
        <img src={product.thumbnail} alt="#" />
        <figcaption style={{ fontWeight: "Bold" }}>{product.title}</figcaption>
      </div>
    </>
  );
}
