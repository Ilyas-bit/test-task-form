import { configureStore } from "@reduxjs/toolkit"

import selectedCategoriesStateSliceReducer from "./selected-categories-slice/selected-categories-slice"

export const store = configureStore({
  reducer: {
    categories: selectedCategoriesStateSliceReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch
