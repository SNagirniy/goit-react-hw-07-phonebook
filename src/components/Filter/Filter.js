import React from 'react';
import s from './Filter.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from 'Redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter.filter);
  return (
    <label className={s.filter_label}>
      Find contacts by name
      <input
        className={s.filter}
        type="text"
        value={value}
        onChange={e => dispatch(updateFilter(e.currentTarget.value))}
      />
    </label>
  );
};

export default Filter;
