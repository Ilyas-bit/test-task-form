interface City {
  id: string
  name: string
}

interface CitiesData {
  [key: string]: City[]
}

export function findCityById(
  countryCode: string,
  cityId: string,
  citiesData: CitiesData
): City | null {
  if (Object.prototype.hasOwnProperty.call(citiesData, countryCode)) {
    const citiesInCountry = citiesData[countryCode]
    for (let i = 0; i < citiesInCountry.length; i++) {
      if (
        Object.prototype.hasOwnProperty.call(citiesInCountry[i], "id") &&
        citiesInCountry[i].id === cityId
      ) {
        return citiesInCountry[i]
      }
    }
    return null
  } else {
    return null
  }
}

interface HabitationType {
  id: string
  name: string
}

interface HabitationData {
  [key: string]: HabitationType[]
}

export function findHabitationTypeById(
  countryCode: string,
  typeId: string,
  habitationData: HabitationData
): HabitationType | null {
  if (Object.prototype.hasOwnProperty.call(habitationData, countryCode)) {
    const typesInCountry = habitationData[countryCode]
    for (let i = 0; i < typesInCountry.length; i++) {
      if (
        Object.prototype.hasOwnProperty.call(typesInCountry[i], "id") &&
        typesInCountry[i].id === typeId
      ) {
        return typesInCountry[i]
      }
    }
    return null
  } else {
    return null
  }
}
