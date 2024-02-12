// Top 10 City: { state: NV, city: Incline Village, price: 76,000,000 }
// Top 10 City: { state: MT, city: Dayton, price: 72,000,000 }
// Top 10 City: { state: TN, city: Franklin, price: 65,000,000 }
// Top 10 City: { state: TX, city: Houston, price: 65,000,000 }
// Top 10 City: { state: NV, city: Crystal Bay, price: 49,500,000 }
// Top 10 City: { state: TN, city: Nashville, price: 40,000,000 }
// Top 10 City: { state: WY, city: Wilson, price: 37,500,000 }
// Top 10 City: { state: MD, city: Potomac, price: 34,900,000 }
// Top 10 City: { state: WY, city: Jackson, price: 32,750,000 }
// Top 10 City: { state: MA, city: Boston, price: 31,000,000 }

// const cityPricesMap = new Map();

// // Populate the hashmap
// for (let i = 0; i < chartData.length; i++) {
//   const state = chartData[i].State;
//   const city = chartData[i].City;
//   const price = parseFloat(chartData[i].ListedPrice);

//   console.log(`State: ${state}, City: ${city}, Price: ${price}`);

//   const key = state + '-' + city; // Use a unique key combining state and city

//   if (!cityPricesMap.has(key)) {
//     cityPricesMap.set(key, { price });
//   } else {
//     const currentPrice = cityPricesMap.get(key).price;
//     if (price > currentPrice) {
//       cityPricesMap.set(key, { price });
//     }
//   }

//   console.log(`In Map Value: ${cityPricesMap.get(key)}`);
// }

// // ...

// // Sort cities by listed price
// const sortedCities = Array.from(cityPricesMap.entries()).sort((a, b) => b[1].price - a[1].price);

// // Take the top 10 cities
// const top10Cities = sortedCities.slice(0, 10);

// // Format for BarChart component
// const chartDataForBarChart = {
//   date: "Top 10 Cities by Listed Price",
//   series: top10Cities.map(([key, { price }]) => {
//     const [state, city] = key.split('-');
//     const formattedPrice = parseFloat(price).toLocaleString();
//     console.log(`Top 10 City: { state: ${state}, city: ${city}, price: ${formattedPrice} }`);

//     return {
//       name: `${state} - ${city}`,
//       value: formattedPrice,
//     };
//   }),
// };



export const cityhighestprice = [
    {
       state: "Incline Village, NV",
       "Listed Price": 76000000,
    },
    {
        state: "Dayton, MT",
       "Listed Price": 72000000,

    },
    {
        state: "Franklin, TN",
        "Listed Price": 65000000,
    }, 
    {
        state: "Houston, TX",
        "Listed Price": 65000000 ,
    },
    {
        state: "Crystal Bay, NV",
        "Listed Price": 49500000,
    },
    {
        state: "Nashville, TN",
        "Listed Price": 40000000,
    },
    {   
        state: "Wilson, WY",
        "Listed Price": 37500000,

    }, 
    {
        state: "Potomac, MD",
        "Listed Price": 34900000 ,
        
    },
    {
        state: "Jackson, WY",
        "Listed Price": 32750000,

    },
    {
        state: "Boston, MA",
        "Listed Price": 30000000,

    }
];