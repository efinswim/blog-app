import React from 'react';
import {TextField} from "@mui/material";

const FilterCard = ({value, onChange}) => {
  return (
    <div>
      <TextField
        id="filled-search"
        label="Поиск"
        type="search"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FilterCard;