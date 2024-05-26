import React from "react";
import { useParams } from "react-router-dom";
import { Grid, Box, Typography } from "@mui/material";
import ProductCard from "../productcard/ProductCard";
import ProductList from "../products/ProductList";

const Row = ({ children, style }) => (
  <div style={{ display: "flex", flexDirection: "row", ...style }}>
    {children}
  </div>
);

const Column = ({ children, style }) => (
  <div style={{ display: "flex", flexDirection: "column", ...style }}>
    {children}
  </div>
);

const SizedBox = ({ width, height }) => <div style={{ width, height }} />;

const ProductDetails = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Grid container spacing={2} style={{ padding: "5rem" }}>
        <Grid item xs={6}>
          <Row>
            <Column>
              <Box
                width={130}
                height={170}
                style={{ backgroundColor: "#D9D9D9" }}
              />
              <SizedBox height={10} />
              <Box
                width={130}
                height={170}
                style={{ backgroundColor: "#D9D9D9" }}
              />
              <SizedBox height={10} />
              <Box
                width={130}
                height={170}
                style={{ backgroundColor: "#D9D9D9" }}
              />
            </Column>
            <SizedBox width={20} />
            <Box
              width={491}
              height={675}
              style={{ backgroundColor: "#D9D9D9" }}
            />
          </Row>
        </Grid>

        <Grid item xs={4}>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 4,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "black",
                    fontSize: 24,
                    fontFamily: "Public Sans",
                    fontWeight: 700,
                    wordWrap: "break-word",
                  }}
                >
                  {product.name}
                </div>
                <div
                  style={{
                    color: "rgba(0, 0, 0, 0.50)",
                    fontSize: 20,
                    fontFamily: "Public Sans",
                    fontWeight: 400,
                    wordWrap: "break-word",
                  }}
                >
                  Casual wear
                </div>
              </div>

              <div style={{ width: 25.6, height: 22.4 }}>
                <img src="fluent_heart.jpg" />
              </div>
            </div>
          </div>

          <div style={{ marginTop: "2rem" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginTop: "2rem",
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
            <div style={{ display: "flex", gap: "8px" }}>
              <span
                style={{
                  color: "rgba(0, 0, 0, 0.50)",
                  fontSize: 14,
                  fontFamily: "Public Sans",
                  fontWeight: 400,
                  wordWrap: "break-word",
                }}
              >
                Security deposit
              </span>
              <span
                style={{
                  color: "black",
                  fontSize: 14,
                  fontFamily: "Public Sans",
                  fontWeight: 700,
                  wordWrap: "break-word",
                }}
              >
                Rs. 1500/-
              </span>
              <span
                style={{
                  color: "rgba(0, 0, 0, 0.50)",
                  fontSize: 14,
                  fontFamily: "Public Sans",
                  fontWeight: 400,
                  wordWrap: "break-word",
                }}
              >
                (Refundable within 7 days)
              </span>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 16,
              paddingBottom: 16,
              background: "#EFE9DB",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              display: "inline-flex",
              marginTop: "2rem",
            }}
          >
            <div
              style={{
                width: 304,
                textAlign: "center",
                color: "black",
                fontSize: 14,
                fontFamily: "Public Sans",
                fontWeight: 400,
                wordWrap: "break-word",
              }}
            >
              We recommend choosing a delivery date 2 days before your event.
            </div>
          </div>

          <div
            style={{
              width: "100%",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 10,
              display: "inline-flex",
              marginTop: "2rem",
            }}
          >
            <div
              style={{
                width: 31,
                alignSelf: "stretch",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 10,
                display: "flex",
              }}
            >
              <div
                style={{
                  color: "rgba(0, 0, 0, 0.50)",
                  fontSize: 14,
                  fontFamily: "Public Sans",
                  fontWeight: 400,
                  wordWrap: "break-word",
                }}
              >
                Size:
              </div>
            </div>
            <div
              style={{
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 10,
                display: "flex",
              }}
            >
              {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                <div
                  key={size}
                  style={{
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 16,
                    paddingBottom: 16,
                    border: "1px rgba(0, 0, 0, 0.15) solid",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 85,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      color: "black",
                      fontSize: 14,
                      fontFamily: "Public Sans",
                      fontWeight: 400,
                      wordWrap: "break-word",
                    }}
                  >
                    {size}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              width: "100%",
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 16,
              paddingBottom: 16,
              background: "black",
              justifyContent: "center",
              alignItems: "center",
              gap: 85,
              display: "inline-flex",
              marginTop: "2rem",
            }}
          >
            <div
              style={{
                color: "white",
                fontSize: 16,
                fontFamily: "Public Sans",
                fontWeight: 600,
                wordWrap: "break-word",
              }}
            >
              Add to Bag
            </div>
          </div>

          <div
            style={{
              width: "100%",
              color: "rgba(0, 0, 0, 0.50)",
              fontSize: 14,
              fontFamily: "Public Sans",
              fontWeight: 400,
              wordWrap: "break-word",
              marginTop: "2rem",
            }}
          >
            <span
              style={{
                color: "black",
                fontSize: 14,
                fontFamily: "Public Sans",
                fontWeight: 400,
                lineHeight: "16px",
                wordWrap: "break-word",
              }}
            >
              Green three-piece suit featuring a shawl lapel, paired with
              matching pants. See size chart for length and fit.
              <br />
              <br />
            </span>
            <span
              style={{
                color: "black",
                fontSize: 14,
                fontFamily: "Public Sans",
                fontWeight: 700,
                lineHeight: "16px",
                wordWrap: "break-word",
              }}
            >
              SKU:{" "}
            </span>
            <span
              style={{
                color: "black",
                fontSize: 14,
                fontFamily: "Public Sans",
                fontWeight: 400,
                lineHeight: "16px",
                wordWrap: "break-word",
              }}
            >
              FLYS069-3
              <br />
            </span>
            <span
              style={{
                color: "black",
                fontSize: 14,
                fontFamily: "Public Sans",
                fontWeight: 700,
                lineHeight: "16px",
                wordWrap: "break-word",
              }}
            >
              Color:{" "}
            </span>
            <span
              style={{
                color: "black",
                fontSize: 14,
                fontFamily: "Public Sans",
                fontWeight: 400,
                lineHeight: "16px",
                wordWrap: "break-word",
              }}
            >
              Pastel Green
              <br />
            </span>
            <span
              style={{
                color: "black",
                fontSize: 14,
                fontFamily: "Public Sans",
                fontWeight: 700,
                lineHeight: "16px",
                wordWrap: "break-word",
              }}
            >
              Material:{" "}
            </span>
            <span
              style={{
                color: "black",
                fontSize: 14,
                fontFamily: "Public Sans",
                fontWeight: 400,
                lineHeight: "16px",
                wordWrap: "break-word",
              }}
            >
              Imported Fabric
            </span>
          </div>
        </Grid>
      </Grid>
      <Typography variant="h6" style={{ padding: "20px" }}>
        You may also like
      </Typography>
      <ProductList products={products} />
    </>
  );
};

export default ProductDetails;
