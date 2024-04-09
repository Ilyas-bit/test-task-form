import { useSelector } from "react-redux"
import { RootState } from "../store"

export const useCountriesList = () => {
  return useSelector((state: RootState) => state.categories.selectedCountries)
}
export const useSelectedCountry = () => {
  return useSelector((state: RootState) => state.categories.selectedCountry)
}

export const useCitiesList = () => {
  return useSelector((state: RootState) => state.categories.selectedCities)
}

export const useIsActiveCity = () => {
  return useSelector((state: RootState) => state.categories.isActiveCity)
}

export const useUniversityTypeList = () => {
  return useSelector((state: RootState) => state.categories.universityTypes)
}

export const useIsActiveUniversityTypeList = () => {
  return useSelector(
    (state: RootState) => state.categories.isActiveUniversityType
  )
}

export const useAccommodationOptionList = () => {
  return useSelector(
    (state: RootState) => state.categories.selectedAccommodationOptions
  )
}

export const useIsActiveAccommodationOption = () => {
  return useSelector(
    (state: RootState) => state.categories.isActiveAccommodationOption
  )
}
