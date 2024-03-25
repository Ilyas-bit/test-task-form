import React, { useState, useEffect } from "react"
import {
  selectAccommodationPreference,
  selectCities,
  selectCountry,
  selectUniversityType,
} from "../../state/selected-categories-slice/selected-categories-slice"
import { useDispatch } from "react-redux"
import "./style.css"

interface CustomSelectProps {
  options: string[]
  type: "country" | "city" | "universityType" | "accommodationPreference"
  isDisabled?: boolean
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  type,
  isDisabled,
}) => {
  const [selectedOption, setSelectedOption] = useState("")
  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value
    setSelectedOption(selectedValue)
    if (type === "country") {
      dispatch(selectCountry(selectedValue))
    }
    if (type === "city") {
      dispatch(selectCities(selectedValue))
    }
    if (type === "universityType") {
      dispatch(selectUniversityType(selectedValue))
    }
    if (type === "accommodationPreference") {
      dispatch(selectAccommodationPreference(selectedValue))
    }
  }

  useEffect(() => {
    if (isDisabled) {
      setSelectedOption("")
    }
  }, [isDisabled])

  return (
    <div className="custom-select">
      <select
        value={selectedOption}
        onChange={handleChange}
        disabled={isDisabled}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
