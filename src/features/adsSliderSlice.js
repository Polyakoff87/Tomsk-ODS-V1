import { createSlice } from "@reduxjs/toolkit";

export const adsSliderSlice = createSlice({
    name: 'adsSlider',
    initialState:[
        { id: 0, text: `Следите за 
          объявлениями на нашем сайте.` },
        
     
      ],
      reducers: {
        reducer: (state) => state,
      },
})

export const { reducer } = adsSliderSlice.actions;

export default adsSliderSlice.reducer;