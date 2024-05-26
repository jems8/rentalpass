import React, { useState } from 'react';
import FilterDetails from '../../filterdetails/FilterDetails';

const Category = () => {
  const [showFilterDetails, setShowFilterDetails] = useState(false);

  const handleFilterClick = () => {
    setShowFilterDetails(!showFilterDetails);
  };

  return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <CategoryContainer borderWidth={1} text="All" />
          <CategoryContainer borderWidth={1} text="Wedding" />
          <CategoryContainer borderWidth={1} text="Party wear" />
          <CategoryContainer borderWidth={1} text="Club" />
          <CategoryContainer borderWidth={1} text="Casual wear" />
          <CategoryContainer borderWidth={1} text="Formal wear" />
          <CategoryContainer borderWidth={1} text="Workwear" />
          <CategoryContainer borderWidth={1} text="Vacation/Travel" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FilterContainer onClick={handleFilterClick} />
        </div>
      </div>
      {showFilterDetails && <FilterDetails />}
    </div>
  );
};

const CategoryContainer = ({ borderWidth, text }) => {
  return (
    <div
      style={{
        width:'auto',
        padding: '12px 24px',
        backgroundColor: 'white',
        borderRadius: '100px',
        border: `${borderWidth}px solid ${borderWidth === 2 ? 'black' : 'rgba(0, 0, 0, 0.15)'}`,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <span style={{ color: 'black', fontSize: 14, fontFamily: 'Public Sans', fontWeight: 400 }}>
          {text}
        </span>
      </div>
    </div>
  );
};

const FilterContainer = ({ onClick }) => {
  return (
    <div onClick={onClick} style={{ padding: '12px 24px', backgroundColor: 'white', borderRadius: '100px', border: '1px solid rgba(0, 0, 0, 0.15)' ,cursor: 'pointer',}}>
      <div style={{ display: 'flex',gap:'12px'}}>
        <span style={{ color: 'black', fontSize: 14, fontFamily: 'Public Sans', fontWeight: 400 }}>Filter</span>
        <img src="carbon_filter.jpg" alt="filter" />
      </div>
    </div>
  );
};

export default Category;
