import { useSelector } from "react-redux"
import { RootState } from "../store"

export const useSelectedCountry = () => {
  return useSelector((state: RootState) => state.categories.selectedCountry)
}

export const useSelectedCity = () => {
  return useSelector((state: RootState) => state.categories.selectedCity)
}

export const useSelectedUniversity = () => {
  return useSelector((state: RootState) => state.categories.selectedUniversity)
}

export const useSelectedHabitation = () => {
  return useSelector((state: RootState) => state.categories.selectedHabitation)
}
