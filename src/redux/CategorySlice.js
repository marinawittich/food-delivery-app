import { createSlice } from '@reduxjs/toolkit'

  export const CategorySlice = createSlice({
    name: 'dishes',
    initialState:{
        selectedCategory: 'All'
    },
    reducers: {
    
      FilteredCategory: (state, action) => {
        state.selectedCategory = action.payload;
      },
    }
  })

  export const changeSelectedCategory = state => state.dishes.selectedCategory;
  export const { FilteredCategory } = CategorySlice.actions;
  export default CategorySlice.reducer;