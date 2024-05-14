import { createSlice } from "@reduxjs/toolkit";

export const navSlice = createSlice({
  name: "nav",
  initialState: [
    { id: 0, name: "Главная", to: "/" },
    { id: 1, name: "Новости", to: "/news" },
    { id: 2, name: "О нас", to: "/about" },
    { id: 3, name: "Устав", to: "/documents" },
    { id: 4, name: "Программа", to: "/program" },
    { id: 5, name: "Наши проекты", to: "/projects" },
    { id: 6, name: "Галерея", to: "/gallery" },
    { id: 7, name: "Объявления", to: "/ads" },
    { id: 8, name: "Отзывы", to: "/reviews" },
  ],
  reducers: {
    reducer: (state) => state,
  },
});

export const { reducer } = navSlice.actions;

export default navSlice.reducer;
