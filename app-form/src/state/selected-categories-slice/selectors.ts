import { useSelector } from "react-redux"
import { RootState } from "../store"

export const useIsDisabledSubmitState = () => {
  return useSelector(
    (state: RootState) => state.categories.isDisabledSabmitState
  )
}

export const useIsDisabledCitiesStates = () => {
  return useSelector(
    (state: RootState) => state.categories.isDisabledCitiesState
  )
}

export const useIsDisabledUniversityTypeState = () => {
  return useSelector(
    (state: RootState) => state.categories.isDisabledUniversityTypeState
  )
}

export const useIsDisabledAccommodationPreferenceState = () => {
  return useSelector(
    (state: RootState) =>
      state.categories.isDisabledAccommodationPreferenceState
  )
}

export const useCountryListState = () => {
  return useSelector((state: RootState) => state.categories.CountryListState)
}

export const useCitiesListState = () => {
  return useSelector((state: RootState) => state.categories.citiesListState)
}

export const useUniversityTypeListState = () => {
  return useSelector(
    (state: RootState) => state.categories.universityTypeListState
  )
}

export const useAccommodationPreferenceListState = () => {
  return useSelector(
    (state: RootState) => state.categories.accommodationPreferenceListState
  )
}
