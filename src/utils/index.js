const parseUnixTime = unixTime => new Date(unixTime * 1000);

const getWeekdayLabel = date => date.toString().slice(0, 3);

const buildDailyForecast = apiData => {
  const nextDays = apiData.daily.data.splice(0, 5);
  return nextDays.map(dayData => ({
    id: dayData.time,
    label: getWeekdayLabel(parseUnixTime(dayData.time)),
    icon: dayData.icon,
    summary: dayData.summary,
    minTemp: Math.round(dayData.temperatureLow),
    maxTemp: Math.round(dayData.temperatureHigh),
    apparentMinTemp: Math.round(dayData.apparentTemperatureLow),
    apparentMaxTemp: Math.round(dayData.apparentTemperatureHigh),
    precipType: dayData.precipType,
    precipProbability: `${dayData.precipProbability * 100}%`,
    humidity: `${dayData.humidity * 100}%`,
  }));
};

export default buildDailyForecast;
