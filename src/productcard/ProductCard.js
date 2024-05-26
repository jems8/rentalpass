import React from "react";

const ProductCard = ({ product, onClick }) => {
  const handleClick = () => {
    onClick(product.id);
  };

  return (
    <div style={{ width: 336, height: 627 }} onClick={handleClick}>
      {/* Wrap the card content in a clickable element */}
      <div
        style={{
          width: "100%",
          height: 575,
          backgroundColor: "#D9D9D9",
          borderRadius: "6px",
          cursor: "pointer", // Change cursor to indicate clickable element
        }}
         // Add onClick event handler
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-end",
          }}
        ></div>
      </div>
      <div style={{ width: "90%", height: 42, padding: "1rem" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              color: "black",
              fontSize: 14,
              fontFamily: "Public Sans",
              fontWeight: 400,
            }}
          >
            {product.name}
          </span>
          <div style={{ height: 10 }} />
          <div style={{ width: "100%", height: 16 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  color: "black",
                  fontSize: 14,
                  fontFamily: "Public Sans",
                  fontWeight: 700,
                }}
              >
                Rent at RS. {product.rentPrice}/-
              </span>
              <div style={{ width: 12 }} />
              <span
                style={{
                  color: "rgba(0, 0, 0, 0.5)",
                  fontSize: 14,
                  fontFamily: "Public Sans",
                  fontWeight: 400,
                }}
              >
                {product.mprPrice} MPR
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
