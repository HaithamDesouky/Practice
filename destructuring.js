//ES6 destructuring - 

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  
  //here is the pre ES6

  const today = HIGH_TEMPERATURES.today;
  const tomorrow = HIGH_TEMPERATURES.tomorrow;

  //Here is the ES6 way
  const {today, tomorrow} = HIGH_TEMPERATURES


  //assigning a velue to a variable while extractiong

  const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  //new way
  const {today:highToday, tomorrow:highTomorrow} = HIGH_TEMPERATURES 
  //old way
  const highToday = HIGH_TEMPERATURES.today;
  const highTomorrow = HIGH_TEMPERATURES.tomorrow; 
  
  
  // renaming nested variables
  
  const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // today is nested therefore needs bracket, further bracket for nested properties
  
  //much nicer and quicker 
  const {today: {low: lowToday, high: highToday }}= LOCAL_FORECAST

  // than this
    
  const lowToday = LOCAL_FORECAST.today.low;
  const highToday = LOCAL_FORECAST.today.high;
  


