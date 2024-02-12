"use client";
import { StatusOnlineIcon } from "@heroicons/react/outline";
import { ArrowCircleUpIcon } from "@heroicons/react/solid";
import { HomeIcon } from "@heroicons/react/solid";
import { areapersquare } from "./areapersquare";
import { marketvslisting } from "./marketvslisting";
import { averagecityhigh } from "./averagecityhigh";
import { midcityprice } from "./midcityprice";
import { stateaverageprice } from "./stateaverageprice";
import { meanmediandev } from "./meanmediandev";
//import houseImage from "../../public/house.jpeg";
import Image from "next/image";
//import {ScatterChartExample2} from "./bedandBath.js"
import "./page.css"; // Importing the CSS file
import {
  AreaChart,
  BarChart,
  Card,
  LineChart,
  Flex,
  Button,
  List,
  ListItem,
  Switch,
  Title,
  Metric,
  Subtitle,
  ScatterChart,
  Bold,
  Icon,
  Italic,
  Text,
} from "@tremor/react";

import {
  Badge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import { chartData } from "./chartdata.js";
import { stateaverage } from "./stateaverage.js";
import { bedandBath } from "./bedandBath.js";
import { cityhighestprice } from "./cityhighestprice.js";
import { useState } from "react";

const AreaCard = () => (
  <Card id="Area" className="stateprice-card ">
    <Metric className="title">
      What is the relationship between the total area of a house and its price
      per square foot?
    </Metric>
    <p className="indent">
      Figure 5: Compares total area and price per square foot in each state,
      revealing factors beyond location and features that contribute to home
      prices. Ultimately, it illuminates factors influencing home prices beyond
      location and features, including land availability, construction costs,
      and market demand for larger homes.
    </p>
  </Card>
);
const TotalArea = () => (
  <Card style={{ marginBottom: "20px", marginTop: "20px" }}>
    <Title>
      {" "}
      Fig 5: Relationship Between Total Area and Price Per Square Foot
    </Title>
    <Subtitle>At the end of the Area Chart there's a total average</Subtitle>
    <AreaChart
      className="h-72 mt-4"
      data={areapersquare}
      index="state"
      yAxisWidth={65}
      categories={["avgArea", "avgPPsq"]}
      colors={["emerald", "amber"]} // You can customize colors as needed
    />
  </Card>
);

const CardArea = () => (
  <Card style={{ marginBottom: "20px", marginTop: "20px" }}>
    <Subtitle>
      Total Area Average Across 50 States and Price Per Square Foot
    </Subtitle>
    <Text>= 2127 x 224</Text>
    <Metric>$ 476,448</Metric>
  </Card>
);

export const MarketListing = () => {
  const [value, setValue] = useState(null);
  return (
    <>
      <Card style={{ marginBottom: "20px", marginTop: "20px" }}>
        <Title>Fig 8: Market Estimate Vs. Listing Price per State </Title>
        <LineChart
          className="h-72 mt-4"
          data={marketvslisting}
          index="state"
          categories={["market", "listing"]}
          colors={["emerald", "amber"]}
          yAxisWidth={60}
          onValueChange={(v) => setValue(v)}
          connectNulls={true}
        />
      </Card>
    </>
  );
};
export const TableStats = () => (
  <Card
    style={{
      marginBottom: "20px",
      marginTop: "20px",
      maxHeight: "400px",
      overflowY: "auto",
    }}
  >
    <Title>
      {" "}
      Fig 9: Descriptive Statistics: Market Estimate vs. Listing Price per State{" "}
    </Title>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>State</TableHeaderCell>
          <TableHeaderCell>Market Mean</TableHeaderCell>
          <TableHeaderCell>Market Median</TableHeaderCell>
          <TableHeaderCell>Market Deviation</TableHeaderCell>
          <TableHeaderCell>Average Listing Mean</TableHeaderCell>
          <TableHeaderCell>Average Listing Median</TableHeaderCell>
          <TableHeaderCell>Average Listing Deviation</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {meanmediandev.map((item) => (
          <TableRow key={item.State}>
            <TableCell>{item.State}</TableCell>
            <TableCell>{item.MarketMean}</TableCell>
            <TableCell>{item.MarketMedian}</TableCell>
            <TableCell>{item.MarketDeviation}</TableCell>
            <TableCell>{item.AverageListingMean}</TableCell>
            <TableCell>{item.AverageListingMedian}</TableCell>
            <TableCell>{item.AverageListingDeviation}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
);

const Code = () => (
  <Card id="Code" className="code">
    <Metric className="transformation">Code Transformations</Metric>
    <p className="indent">
      In the next section, I'll briefly outline the transformations I had to
      make to the dataset to ensure it was in the right format for
      visualization.
    </p>
    <p className="indent">
      Initially, I used Python to filter the data and make it compatible with
      the Tremor Next JS format (JS Objects). This involved adjusting the
      initial CSV file to match the preferred layout on the Tremor website.
      However, I encountered issues with value formatting in Tremor Next JS,
      especially with large numbers that required commas. Unfortunately, these
      discrepancies caused significant errors during the visualization process.
      Ultimately, I processed the refined dataset to create distinct JavaScript
      files addressing inquiries such as the influence of state, listing price,
      market estimate price, city, home features, total area, and price per
      square foot on housing prices for potential homebuyers.
    </p>

    <div
      id="code-div"
      style={{
        fontFamily: "monospace",
        textAlign: "left",
        backgroundColor: "rgba(255,255,255,.5)",
        border: "3px solid green",
      }}
    >
      <p>//Example - Python Transformation</p>
      <p>import json</p>
      <p>data = []</p>
      <p>with open('Cleaned_Housing_Data.csv', 'r') as file:</p>
      <p className="codeindent"> counter = 0;</p>
      <p className="codeindent"> for line in file:</p>
      <p className="tripleindent"> if counter == 0 or counter == 1:</p>
      <p className="tripleindent"> counter += 1</p>
      <p className="tripleindent"> continue</p>
      <p className="tripleindent"> line = line.split(',')</p>
      <p className="tripleindent"> dataEntry = </p>
      <p className="tripleindent">
        {" "}
        "State": line[0], "City": line[1], "Street": line[2], "Zipcode":
        line[3],
      </p>
      <p className="tripleindent">
        {" "}
        "Bedroom": line[4], "Bathroom": line[5], "Area": line[6], "PPSq":
        line[7],
      </p>
      <p className="tripleindent">
        {" "}
        "LotArea": line[8], "MarketEstimate": line[9], "RentEstimate": line[10],
      </p>
      <p className="tripleindent">
        {" "}
        "Latitude": line[11], "Longitude": line[12],
      </p>
      <p className="tripleindent"> "ListedPrice": line[13].rstrip('\n')</p>
      <p className="tripleindent">data.append(dataEntry)</p>
      <p className="tripleindent">counter += 1</p>
      <p>with open('clean_data', 'w') as file:</p>
      <p className="doubleindent"> json_string = json.dumps(data, indent=2)</p>
      <p className="doubleindent"> file.write(json_string)</p>
    </div>
  </Card>
);
export const TwoCityAverage = () => {
  return (
    <>
      <Card style={{ marginBottom: "20px", marginTop: "20px" }}>
        <Title>
          Fig 3: Average Median Listing Price per City vs. Higher Average
          Listing Price per City{" "}
        </Title>
        <LineChart
          className="h-72 mt-4"
          data={midcityprice}
          index="city"
          categories={["avgMediumListedPrice", "avgHighPrice"]}
          colors={["emerald", "amber"]}
          yAxisWidth={100}
        />
      </Card>
    </>
  );
};

//State and Average Prices Bar Chart
const CityHighPrice = () => (
  <Card style={{ marginBottom: "20px", marginTop: "20px" }}>
    <Title>
      {" "}
      Fig 4: Top 10 Cities with their Highest Listing Prices and their States
    </Title>

    <BarChart
      className="mt-6"
      data={cityhighestprice}
      index="state"
      categories={["Listed Price"]}
      colors={["emerald"]}
      yAxisWidth={80}
    />
  </Card>
);

//State and Average Prices Bar Chart
const BarChartComponent = () => (
  <Card style={{ marginBottom: "20px", marginTop: "20px" }}>
    <Title> Fig 2:Top 10 States and their Average Listing Prices</Title>

    <BarChart
      className="mt-6"
      data={stateaverage}
      index="state"
      categories={["Average Listing Price"]}
      colors={["emerald"]}
      yAxisWidth={60}
    />
  </Card>
);
//State and Average Prices Bar Chart
const AverageState = () => (
  <Card style={{ marginBottom: "20px", marginTop: "20px" }}>
    <Title> Fig 1: All States and their Average Listing Prices</Title>

    <BarChart
      className="mt-6"
      data={stateaverageprice}
      index="state"
      categories={["Average Listing Price"]}
      colors={["emerald"]}
      yAxisWidth={60}
    />
  </Card>
);

const StatePrice = () => (
  <Card id="Average-state" className="stateprice-card">
    <Metric className="title">
      How Does Housing Prices Vary Across Different States?
    </Metric>
    <h3 className="indent">
      Figure 1: Offers a national perspective on average listing prices across
      all 50 states, highlighting the diverse real estate landscape and setting
      the stage for exploring regional pricing differences. It can inform the
      audience about regional differences in housing prices, potentially
      influenced by factors such as local economies, population density, and
      housing demand.
    </h3>
    <h3 className="indent">
      Figure 2: Focuses on the top 10 states with the highest average listing
      prices, providing insights into leading markets and potential influencers
      on broader housing trends. These may include factors such as high demand
      in desirable locations, limited housing supply, and strong local
      economies.
    </h3>
  </Card>
);

const CityTopPrice = () => (
  <Card
    id="Average-city"
    className="stateprice-card "
    style={{ backgroundColor: "darkseagreen" }}
  >
    <Metric className="title">
      What is the Average Housing Price in Various Cities or Specific Areas
      within a City?
    </Metric>
    <p className="indent">
      Figure 3: Utilizes a line chart to illustrate median average listing
      prices per state, revealing general trends and outliers in specific
      cities. This visualization offers insight to regional pricing dynamics
      influenced by factors such as urbanization, proximity to amenities, and
      neighborhood desirability.
    </p>
    <p className="indent">
      Figure 4: Zooms in on the highest listed prices and their corresponding
      cities and states, offering clarity on outliers and factors driving
      extreme pricing. While providing insights into luxury real estate markets
      influenced by factors such as prestige, exclusivity, and unique property
      features.
    </p>
  </Card>
);

const MarketCard = () => (
  <Card
    id="Market"
    className="stateprice-card "
    style={{ marginTop: "20px", backgroundColor: "darkseagreen" }}
  >
    <Metric className="title">
      How closely do market estimates align with listed prices in the dataset?
    </Metric>
    <p className="indent">
      Figure 8: Compares Zillow's Market Estimate with final listing price
      averages, uncovering variations in real estate transactions and potential
      factors influencing pricing discrepancies. This figure can elucidate the
      accuracy of market predictions and the impact of factors such as market
      volatility, buyer/seller behavior, and economic trends on home prices.
    </p>
    <p className="indent">
      Figure 9: Addresses data spread concerns through a detailed examination of
      Market Estimate and Final Listing Price, highlighting pricing diversity
      within states and potential influences. It highlights factors contributing
      to pricing variability such as housing market conditions, property
      condition, and seller motivations.
    </p>
  </Card>
);

const Introduction = () => (
  <div id="Introduction" className="centered-container">
    <Card className="introduction-card">
      <Metric className="introduction">Introduction</Metric>
      <div className="text-content">
        <p className="indent">
          In recent years, the issue of housing insecurity has escalated, with
          mortgage rates reaching unprecedented highs during the COVID pandemic.
          Consequently, homeowners have been reluctant to sell their properties,
          as the advantages of holding onto their homes outweigh the uncertainty
          in moving. However, as we enter 2024, there is newfound hope on the
          horizon, with indications that mortgage rates are stabilizing and the
          housing market is seeing an increase in available properties.
        </p>
        <p className="indent">
          As someone whose family is deeply rooted in the real estate industry
          with a mortgage loan officer for a dad and a realtor sister. I've
          witnessed firsthand the challenges and complexities that homeowners
          and prospective buyers navigate daily.
        </p>
        <p className="indent">
          In my search for data, I sifted through numerous false datasets on
          Kaggle before stumbling upon the genuine one provided by Zillow. This
          dataset encompasses details on approximately 100 million homes
          throughout the United States, striving for diversity by including a
          wide range of housing characteristics across different states, cities,
          and neighborhoods. It provides valuable insights into real estate
          trends, including detailed information on location, property features,
          market estimates, and more.
        </p>
        <p className="indent">
          At first, I was mainly focused on predicting future housing prices
          using data from 2023. But as I dug into the dataset, I realized there
          was a lot more to explore. I started looking into various factors like
          features, cities, states, and outliers, and how they affect the data.
          I questioned why some averages seemed off and if fewer listings in
          certain states impacted the overall picture. I also delved into how
          factors such as area and price per square foot play a role in
          determining home prices. It became clear that there's more to selling
          a home than just finding one, and I wanted to share this insight with
          my audience.
        </p>
        <p className="indent">
          Visualizing this data proved challenging, as chose an unfamiliar
          software utilize. Despite this hurdle, I opted to utilize bar charts,
          area charts, line charts, scatter plots, and a table illustrating the
          median listings versus market estimates. These visuals were chosen to
          emphasize the inherent variability in the data and the need to
          consider it carefully.
        </p>
        <p className="indent">
          Examining the potential drawbacks of this visualization, I observed
          significant outliers in price when comparing different cities,
          particularly evident in the highest listing prices. This observation
          led me to include a line chart illustrating the average median price
          alongside the average high price. While location remains a crucial
          factor, it's essential to recognize that other variables contribute to
          the variability in home prices. Given the extensive nature of the
          dataset, I opted to focus on median prices to provide a more accurate
          representation of the averages, especially when dealing with
          exceptionally high-priced homes, some of which reached $76 million.
        </p>
      </div>
    </Card>
  </div>
);

const FeaturesCard = () => (
  <Card
    id="Features"
    className="stateprice-card"
    style={{ backgroundColor: "darkseagreen" }}
  >
    <Metric className="title">
      How does the number of bedrooms and bathrooms correlate with housing
      prices?
    </Metric>
    <h3 className="indent">
      Figure 6: Illustrates a scatterplot correlating Median Listing Price with
      bedrooms and bathrooms, emphasizing location's crucial role in housing
      affordability and variations in pricing. Furthermore, this information
      emphasizes the importance of property features in determining home values,
      influenced by factors such as housing preferences, family size, and
      lifestyle choices.
    </h3>
    <h3 className="indent">
      Figure 7: Explores the correlation between bedrooms and bathrooms,
      providing deeper insights into their importance in the housing market
      beyond what a clustered scatterplot may reveal. Moreover, it deepens the
      audience's understanding of how specific property features influence home
      prices, driven by factors such as market demand, property size, and buyer
      preferences.
    </h3>
  </Card>
);

const CardScatter = () => (
  <Card style={{ marginTop: "20px" }}>
    <Title style={{ color: "black" }}>
      Fig 6: How the Number of Bedroom and Bathrooms Affect Listing Price
    </Title>
    <Subtitle>
      Listing Price Painted Across the X-Axis Better Visualizes the Differences
      in Size Because There's Not a Huge Difference in the Number of Bedrooms
      and Bathrooms (Refer to Figure 7){" "}
    </Subtitle>
  </Card>
);

export const BedroomPrice = () => {
  return (
    <>
      <Card style={{ marginBottom: "20px" }}>
        <ScatterChart
          className="h-80 mt-6 -ml-2"
          colors={[
            "indigo-200",
            "rose-200",
            "#ffcc33",
            "teal-200",
            "indigo-200",
            "rose-200",
            "#ffcc33",
            "teal-200",
            "indigo-200",
            "rose-200",
            "#ffcc33",
            "teal-200",
            "indigo-200",
            "rose-200",
            "#ffcc33",
            "teal-200",
            "indigo-200",
            "rose-200",
            "#ffcc33",
            "teal-200",
            "indigo-200",
            "rose-200",
            "#ffcc33",
            "teal-200",
            "indigo-200",
            "rose-200",
            "#ffcc33",
            "teal-200",
            "indigo-200",
            "rose-200",
            "#ffcc33",
            "teal-200",
            "indigo-200",
            "rose-200",
            "#ffcc33",
            "teal-200",
            "indigo-200",
            "rose-200",
            "#ffcc33",
            "teal-200",
            "indigo-200",
            "rose-200",
            "#ffcc33",
            "teal-200",
            "indigo-200",
            "rose-200",
            "#ffcc33",
            "teal-200",
            "indigo-200",
            "rose-200",
            "#ffcc33",
            "teal-200",
          ]}
          yAxisWidth={50}
          data={bedandBath}
          category="State"
          x="MedianListedPrice"
          y="MedianBedrooms"
          size="MedianBathrooms"
          showLegend={false}
        />
      </Card>
    </>
  );
};

const BedandBathChart = () => (
  <Card>
    <Title>Relationship Between Median Bathrooms and Bedrooms per State</Title>
    <Subtitle>Closer Look From the ScatterPlot, Close Correlation</Subtitle>
    <AreaChart
      className="h-72 mt-4"
      data={bedandBath}
      index="State"
      yAxisWidth={65}
      categories={["MedianBedrooms", "MedianBathrooms"]}
      colors={["emerald", "stone"]} // You can customize colors as needed
    />
  </Card>
);

const FinalThoughts = () => (
  <div id="FinalThoughts" className="centered-container">
    <Card className="introduction-card">
      
      <Metric className="introduction">Final Thoughts</Metric>
      <div className="text-content">
        <p className="indent">
          The series of visualizations offer a comprehensive view of the factors
          shaping the housing market. Figure 1 sets the stage with a national
          perspective on average listing prices across states, highlighting
          regional differences influenced by factors like local economies and
          housing demand. Building on this, Figure 2 zooms in on the top 10
          states with the highest prices, offering insights into leading markets
          driven by factors such as demand in desirable locations and limited
          housing supply. Figure 3 delves deeper into regional pricing dynamics,
          revealing trends and outliers influenced by urbanization, amenities,
          and neighborhood desirability. Figure 4 provides clarity on extreme
          pricing, shedding light on luxury markets shaped by prestige and
          unique features. Figure 5 uncovers variations in real estate
          transactions, elucidating the accuracy of market predictions and the
          impact of market volatility. Figure 6 addresses data spread concerns,
          highlighting factors contributing to pricing variability within
          states. Figure 7 reveals additional factors influencing home prices
          beyond location and features, such as land availability and
          construction costs. Figure 8 emphasizes location's crucial role in
          housing affordability and variations in pricing, while Figure 9
          explores the correlation between bedrooms and bathrooms, providing
          deeper insights into their importance in the housing market. Together,
          these visualizations offer a multifaceted understanding of the complex
          factors driving home prices and market dynamics, empowering viewers to
          make informed decisions in navigating the real estate landscape.
        </p>
        <p className="indent">
          When delving into my method and visualization approach, I encountered
          a few learning curves. Understanding the unique structure demanded by
          Tremor and Next JS sometimes made presenting the data a bit tricky. If
          the data setup seemed off, I had to manually adjust it, which added to
          the challenge. One stumbling block was getting commas to display
          correctly due to a bug with the value formatter. After spending
          considerable time trying to fix it, I decided to focus on other graphs
          to convey the data more effectively. Despite some issues, I found
          working with area charts and scatterplots particularly enjoyable. Even
          though I couldn't get the legend to show up in the scatterplot due to
          issues, I appreciated its visual appeal. Similarly, the area chart
          depicting total area and price per square foot had the aesthetic I
          aimed for. To enhance my storytelling, I'd seek out software that
          handles commas smoothly and offers user-friendly features like
          scrolling or toggling. With more experience and time, I believe the
          final outcome would better capture my narrative. In reflecting on my
          data storytelling, I don't believe I overlooked any crucial details
          that could have altered the story's direction. However, I might have
          underestimated the impact of excluded factors on the narrative. While
          adding data points like zip codes or latitude and longitude might have
          seemed redundant, they could have provided valuable insights. What I
          enjoyed most was linking my knowledge of the housing market to the
          trends in the graphs. This process was both gratifying and challenging
          as I navigated a new language and new tools to visualize my data
          narrative.
        </p>
      </div>
    </Card>
  </div>
);

const Head = () => (
  <div className="card flex items-center justify-center p-4">
    <Icon size="xl" color="black" icon={HomeIcon} />
    <div>
      <h1 className="text-center" style={{ fontSize: "2rem" }}>
        Factors that Influence Housing Prices
      </h1>
      <h2 style={{ fontSize: "1.5rem" }}>by Alexandra Coffman</h2>
    </div>
    <Icon size="xl" color="black" icon={HomeIcon} />
  </div>
);

const Picture = () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <Image
      src="/house.jpeg"
      width={1000}
      height={200}
      style={{
        margin: "0 auto",
        marginBottom: "20px",
        border: "3px solid black",
      }} // Center the image horizontally
    />
  </div>
);

const Picture2 = () => (
  <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
    <Image
      src="/bathroom.jpeg"
      width={500}
      height={100}
      style={{
        margin: "0 auto",
        marginBottom: "20px",
        border: "3px solid black",
      }} // Center the image horizontally
    />
    <Image
      src="/bedroom.jpeg"
      width={500}
      height={100}
      style={{
        margin: "0 auto",
        marginBottom: "20px",
        border: "3px solid black",
      }} // Center the image horizontally
    />
  </div>
);
const Picture3 = () => (
  <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
    <Image
      src="/city2.webp"
      width={1000}
      height={200}
      style={{
        margin: "0 auto",
        marginBottom: "20px",
        border: "3px solid black",
      }} // Center the image horizontally
    />
  </div>
);
const Picture4 = () => (
  <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
    <Image
      src="/state1.jpeg"
      width={1000}
      height={200}
      style={{
        margin: "0 auto",
        marginBottom: "20px",
        border: "3px solid black",
      }} // Center the image horizontally
    />
  </div>
);
const Picture5 = () => (
  <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
    <Image
      src="/area1.jpg"
      width={500}
      height={200}
      style={{
        margin: "0 auto",
        marginBottom: "20px",
        border: "3px solid black",
      }} // Center the image horizontally
    />
    <Image
      src="/area2.jpeg"
      width={500}
      height={200}
      style={{
        margin: "0 auto",
        marginBottom: "20px",
        border: "3px solid black",
      }} // Center the image horizontally
    />
  </div>
);

const Picture6 = () => (
  <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
    <Image
      src="/market1.jpeg"
      width={1000}
      height={200}
      style={{
        margin: "0 auto",

        border: "3px solid black",
      }} // Center the image horizontally
    />
  </div>
);

const Picture7 = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      marginTop: "20px",
      marginBottom: "20px",
    }}
  >
    <Image
      src="/final.jpeg"
      width={500}
      height={200}
      style={{
        margin: "0 auto",
        border: "3px solid black",
        borderRadius: "10px", 
      }}
    />
    <Card >
    <Metric
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            marginBottom: "20px",
            color: "black",
          }}
        >
          Thank you for Reading!
        </Metric>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* <div style={{ animation: "rotation 2s infinite linear" }}> */}
          <Image
            src="/cat1.jpeg"
            width={350}
            height={200}
            style={{
              margin: "0 auto",
              border: "3px solid black",
            }}
          />
        {/* </div> */}
        
      </div>
    </Card>
  </div>
);


const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 rounded-lg">
      <ul className="flex justify-center space-x-6">
        <li>
          <a href="#Introduction" className="hover:underline text-sm">
            Introduction
          </a>
        </li>
        <li>
          <a href="#Code" className="hover:underline text-sm">
            Code
          </a>
        </li>
        <li>
          <a href="#Average-state" className="hover:underline text-sm">
            State Prices
          </a>
        </li>
        <li>
          <a href="#Average-city" className="hover:underline text-sm">
            City Prices
          </a>
        </li>
        <li>
          <a href="#Area" className="hover:underline text-sm">
            Area Components
          </a>
        </li>
        <li>
          <a href="#Features" className="hover:underline text-sm">
            Home Features
          </a>
        </li>
        <li>
          <a href="#Market" className="hover:underline text-sm">
            Market and Listing Prices
          </a>
        </li>
        <li>
          <a href="#FinalThoughts" className="hover:underline text-sm">
            Thoughts
          </a>
        </li>
        {/* Add more list items for other sections */}
      </ul>
    </nav>
  );
};
const ScrollTop = () => (
  <Icon
    size="xl"
    color="black"
    style={{
      position: "fixed",
      bottom: "1%",
      right: "1%",
      zIndex: "9999", // Ensure it's above other content
    }}
    icon={ArrowCircleUpIcon}
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  />
);

const Home = () => {
  return (
    <div className="container" style={{ marginTop: "40px" }}>
      <NavBar></NavBar>
      <Head />
      <Picture></Picture>
      <Introduction />
      <Code />
      <StatePrice />
      <Picture4></Picture4>
      <AverageState />

      <BarChartComponent />
      <CityTopPrice />
      <Picture3></Picture3>
      <TwoCityAverage />
      <CityHighPrice />
      <AreaCard></AreaCard>
      <Picture5></Picture5>
      <TotalArea />
      <CardArea />

      <FeaturesCard></FeaturesCard>
      <Picture2></Picture2>
      <CardScatter></CardScatter>
      <BedroomPrice />
      <BedandBathChart />
      <MarketCard></MarketCard>
      <Picture6></Picture6>
      <MarketListing />
      <TableStats />
      <FinalThoughts></FinalThoughts>
      <Picture7></Picture7>
      <ScrollTop></ScrollTop>
    </div>
  );
};
export default Home;
