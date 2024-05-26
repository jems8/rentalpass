import React, { useState } from "react";

const FilterDetails = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
    <div style={{ width: "30%", padding: "20px", }}>
      
      <div
        style={{
          width: "100%",
          height: "100%",
          paddingLeft: 20,
          paddingRight: 20,
          background: "#EFE9DB",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 0,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            width: 145,
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            color: "black",
            fontSize: 16,
            fontFamily: "Public Sans",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          <img src="carbon_filter.jpg" alt="filter" />
          Filter
        </div>
        <div onClick={handleClose}>
          <img src="close_icon.jpg" alt="close_icon" />
        </div>
      </div>
   

      <div
        style={{
          width: "100%",
          height: "100%",
          paddingLeft: 40,
          paddingRight: 40,
          paddingTop: 20,
          paddingBottom: 20,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 20,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            color: "black",
            fontSize: 14,
            fontFamily: "Public Sans",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          Sort by
        </div>
        <div
          style={{
            alignSelf: "stretch",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: 145,
              paddingLeft: 14,
              paddingRight: 14,
              paddingTop: 16,
              paddingBottom: 16,
              borderRadius: 100,
              border: "1px rgba(0, 0, 0, 0.15) solid",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              display: "flex",
              color: "black",
              fontSize: 14,
              fontFamily: "Public Sans",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Price: Low to High
          </div>
          <div
            style={{
              width: 115,
              paddingLeft: 14,
              paddingRight: 14,
              paddingTop: 16,
              paddingBottom: 16,
              borderRadius: 100,
              border: "1px rgba(0, 0, 0, 0.15) solid",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              display: "flex",
              color: "black",
              fontSize: 14,
              fontFamily: "Public Sans",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Most Popular
          </div>
          <div
            style={{
              width: 145,
              paddingLeft: 14,
              paddingRight: 14,
              paddingTop: 16,
              paddingBottom: 16,
              borderRadius: 100,
              border: "1px rgba(0, 0, 0, 0.15) solid",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              display: "flex",
              color: "black",
              fontSize: 14,
              fontFamily: "Public Sans",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Price: High to Low
          </div>
          <div
            style={{
              width: 131,
              paddingLeft: 14,
              paddingRight: 14,
              paddingTop: 16,
              paddingBottom: 16,
              borderRadius: 100,
              border: "1px rgba(0, 0, 0, 0.15) solid",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              color: "black",
              fontSize: 14,
              fontFamily: "Public Sans",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Newest Arrivals
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "100%",
          paddingLeft: 40,
          paddingRight: 40,
          paddingTop: 20,
          paddingBottom: 20,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 20,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            color: "black",
            fontSize: 14,
            fontFamily: "Public Sans",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          Price Range
        </div>
        <div
          style={{
            alignSelf: "stretch",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 20,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              flex: "1 1 0",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 8,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                color: "black",
                fontSize: 12,
                fontFamily: "Public Sans",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Minimum
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: 32,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 10,
                paddingBottom: 10,
                background: "#F5F5F5",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 10,
                display: "inline-flex",
                backgroundColor: "rgba(0, 0, 0, 0.30)",
              }}
            >
              <div
                style={{
                  Color: "rgba(0, 0, 0, 0.30)",
                  fontSize: 14,
                  fontFamily: "Public Sans",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                0.00
              </div>
            </div>
          </div>
          <div
            style={{
              flex: "1 1 0",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 8,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                color: "black",
                fontSize: 12,
                fontFamily: "Public Sans",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Maximum
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: 32,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 10,
                paddingBottom: 10,
                background: "#F5F5F5",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 10,
                display: "inline-flex",
                backgroundColor: "rgba(0, 0, 0, 0.30)",
              }}
            >
              <div
                style={{
                  Color: "rgba(0, 0, 0, 0.30)",
                  fontSize: 14,
                  fontFamily: "Public Sans",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                0.00
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "100%",
          paddingLeft: 40,
          paddingRight: 40,
          paddingTop: 20,
          paddingBottom: 20,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 20,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            color: "black",
            fontSize: 14,
            fontFamily: "Public Sans",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          Size
        </div>
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              height: "auto",
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
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              XS
            </div>
          </div>
          <div
            style={{
              height: "auto",
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
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              S
            </div>
          </div>
          <div
            style={{
              height: "auto",
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
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              M
            </div>
          </div>
          <div
            style={{
              height: "auto",
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
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              L
            </div>
          </div>
          <div
            style={{
              height: "auto",
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
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              XL
            </div>
          </div>
          <div
            style={{
              height: "auto",
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
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              XXL
            </div>
          </div>
          <div
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
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              FREE SIZE
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "100%",
          paddingLeft: 40,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 20,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            color: "black",
            fontSize: 14,
            fontFamily: "Public Sans",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          Color
        </div>
        <div
          style={{
            alignSelf: "stretch",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 10,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: 86,
              padding: 5,
              borderRadius: 100,
              border: "1px rgba(0, 0, 0, 0.15) solid",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              display: "flex",
            }}
          >
            <div
              style={{
                width: 20,
                height: 20,
                background: "black",
                borderRadius: 9999,
              }}
            />
            <div
              style={{
                color: "black",
                fontSize: 14,
                fontFamily: "Public Sans",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Red
            </div>
          </div>
          <div
            style={{
              width: 97,
              padding: 5,
              borderRadius: 100,
              border: "1px rgba(0, 0, 0, 0.15) solid",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              display: "flex",
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                background: "#313335",
                borderRadius: 9999,
              }}
            />
            <div
              style={{
                color: "black",
                fontSize: 14,
                fontFamily: "Public Sans",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Black
            </div>
          </div>
          <div
            style={{
              width: 103,
              padding: 5,
              borderRadius: 100,
              border: "1px rgba(0, 0, 0, 0.15) solid",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              display: "flex",
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                background: "#7653CA",
                borderRadius: 9999,
              }}
            />
            <div
              style={{
                color: "black",
                fontSize: 14,
                fontFamily: "Public Sans",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Purple
            </div>
          </div>
          <div
            style={{
              width: 90,
              padding: 5,
              borderRadius: 100,
              border: "1px rgba(0, 0, 0, 0.15) solid",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              display: "flex",
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                background: "#2C6FCD",
                borderRadius: 9999,
              }}
            />
            <div
              style={{
                color: "black",
                fontSize: 14,
                fontFamily: "Public Sans",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Blue
            </div>
          </div>
          <div
            style={{
              width: 91,
              padding: 5,
              borderRadius: 100,
              border: "1px rgba(0, 0, 0, 0.15) solid",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              display: "flex",
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                background: "#9E9E9E",
                borderRadius: 9999,
              }}
            />
            <div
              style={{
                color: "black",
                fontSize: 14,
                fontFamily: "Public Sans",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Grey
            </div>
          </div>
          <div
            style={{
              width: 108,
              padding: 5,
              borderRadius: 100,
              border: "1px rgba(0, 0, 0, 0.15) solid",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              display: "flex",
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                background: "#F47843",
                borderRadius: 9999,
              }}
            />
            <div
              style={{
                color: "black",
                fontSize: 14,
                fontFamily: "Public Sans",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Orange
            </div>
          </div>
          <div
            style={{
              width: 100,
              padding: 5,
              borderRadius: 100,
              border: "1px rgba(0, 0, 0, 0.15) solid",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              display: "flex",
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                background: "#1F7A1F",
                borderRadius: 9999,
              }}
            />
            <div
              style={{
                color: "black",
                fontSize: 14,
                fontFamily: "Public Sans",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Green
            </div>
          </div>
          <div
            style={{
              width: 99,
              padding: 5,
              borderRadius: 100,
              border: "1px rgba(0, 0, 0, 0.15) solid",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              display: "flex",
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                background: "#F1F1F1",
                borderRadius: 9999,
              }}
            />
            <div
              style={{
                color: "black",
                fontSize: 14,
                fontFamily: "Public Sans",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              White
            </div>
          </div>
          <div
            style={{
              width: 103,
              padding: 5,
              borderRadius: 100,
              border: "1px rgba(0, 0, 0, 0.15) solid",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              display: "flex",
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                background: "#F4B443",
                borderRadius: 9999,
              }}
            />
            <div
              style={{
                color: "black",
                fontSize: 14,
                fontFamily: "Public Sans",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Yellow
            </div>
          </div>
          <div
            style={{
              width: 89,
              padding: 5,
              borderRadius: 100,
              border: "1px rgba(0, 0, 0, 0.15) solid",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              display: "flex",
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                background: "#F24799",
                borderRadius: 9999,
              }}
            />
            <div
              style={{
                color: "black",
                fontSize: 14,
                fontFamily: "Public Sans",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Pink
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "100%",
          paddingTop: 20,
          paddingBottom: 20,
          background: "white",
          borderTop: "1px rgba(0, 0, 0, 0.15) solid",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 61,
          display: "inline-flex",
          marginTop:20,
        }}
      >
        <div
          style={{
            flex: "1 1 0",
            alignSelf: "stretch",
            paddingLeft: 0,
            paddingRight: 20,
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
            width:145
          }}
        >
          <div
            style={{
              width: 145,
              height: 42,
              paddingLeft: 0,
              paddingRight: 20,
              paddingTop: 10,
              paddingBottom: 10,
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
              gap: 40,
              display: "flex",
            }}
          >
            <div
              style={{
                textAlign: "center",
                color: "rgba(0, 0, 0, 0.50)",
                fontSize: 14,
                fontFamily: "Public Sans",
                fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              Clear All
            </div>
          </div>
          <div
            style={{
              width: 117,
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 10,
              paddingBottom: 10,
              background: "black",
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
              gap: 40,
              display: "flex",
            }}
          >
            <div
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 14,
                fontFamily: "Public Sans",
                fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              Apply Filter
            </div>
          </div>
        </div>
      </div>
    </div>
     )
  );
};

export default FilterDetails;
