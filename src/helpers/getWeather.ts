import axios from 'axios'

const WEATHER_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=14.8347&longitude=-91.5181&current=temperature_2m&forecast_days=1'

export const getTemperature = async (): Promise<number> => {
  const response = await axios.get(WEATHER_URL)
  const newTemperature = response.data.current.temperature_2m
  return newTemperature
}
