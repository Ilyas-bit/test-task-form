import { useSelector } from "react-redux"
import { RootState } from "../store"
import { useMemo } from "react"

export const useSelectedCountry = () => {
  return useSelector((state: RootState) => state.categories.selectedCountry)
}

const MemoizedSelectedCountry = () => {
  const selectedCountry = useSelectedCountry()

  return useMemo(() => selectedCountry, [selectedCountry])
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

const MemoizedSelectedCity = () => {
  const selectedCity = useSelectedCity()

  return useMemo(() => selectedCity, [selectedCity])
}

const MemoizedSelectedUniversity = () => {
  const selectedUniversity = useSelectedUniversity()

  return useMemo(() => selectedUniversity, [selectedUniversity])
}

const MemoizedSelectedHabitation = () => {
  const selectedHabitation = useSelectedHabitation()

  return useMemo(() => selectedHabitation, [selectedHabitation])
}

export {
  MemoizedSelectedCountry,
  MemoizedSelectedCity,
  MemoizedSelectedUniversity,
  MemoizedSelectedHabitation,
}
