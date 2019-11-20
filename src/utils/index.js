const getWeekdayLabel = unixTime => {
  const parsedTime = new Date(unixTime * 1000);
  return parsedTime.toString().slice(0, 3);
};

const buildDailyForecast = apiData => {
  const nextDays = apiData.splice(0, 5);
  return nextDays.map(dayData => ({
    time: dayData.time,
    label: getWeekdayLabel(dayData.time),
    icon: dayData.icon,
    summary: dayData.summary,
    minTemp: Math.round(dayData.temperatureLow),
    maxTemp: Math.round(dayData.temperatureHigh),
  }));
};

export default buildDailyForecast;
