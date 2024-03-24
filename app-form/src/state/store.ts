import { configureStore } from "@reduxjs/toolkit"

// import dataStructureStateSliceReducer from "./data-structure/data-structure"
import selectedCategoriesStateSliceReducer from "./selected-categories-slice/selected-categories-slice"

export const store = configureStore({
  reducer: {
    // dataStructure: dataStructureStateSliceReducer,
    categories: selectedCategoriesStateSliceReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch
