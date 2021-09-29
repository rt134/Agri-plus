import React, { useState, useEffect } from "react";
// react plugin for creating charts
// import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
// import Warning from "@material-ui/icons/Warning";
// import DateRange from "@material-ui/icons/DateRange";
// import LocalOffer from "@material-ui/icons/LocalOffer";
// import Update from "@material-ui/icons/Update";
// import ArrowUpward from "@material-ui/icons/ArrowUpward";
// import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
// import BugReport from "@material-ui/icons/BugReport";
// import Code from "@material-ui/icons/Code";
// import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Table from "../../components/Table/Table.js";
// import Tasks from "../../components/Tasks/Tasks.js";
// import CustomTabs from "../../components/CustomTabs/CustomTabs.js";
// import Danger from "../../components/Typography/Danger.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

// import { bugs, website, server } from "../../variables/general.js";

// import {
//   dailySalesChart,
//   emailsSubscriptionChart,
//   completedTasksChart,
// } from "../../variables/charts.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();

  const [query, setQuery] = useState("Delhi");
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [temp, setTemp] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [description, setDescription] = useState("");
  const [place, setPlace] = useState("Delhi");
  const [five, setFive] = useState([]);

  const search = (evt) => {
    if (evt.key === "Enter") {
      async function fetchMyApi() {
        await fetch(
          `http://api.openweathermap.org/data/2.5/weather?&units=metric&q=${query}&units=metric&APPID=c19c5316b1cb31da538b4a42aa7a6e6a`
        )
          .then((res) => res.json())
          .then((result) => {
            setWeather(result);
            console.log(weather);
            setQuery("");
            setTemp(Math.round(result.main.temp));
            setMaxTemp(result.main.temp_max);
            setMinTemp(result.main.temp_min);
            setHumidity(result.main.humidity);
            setPlace(query);
            setPlace(query[0].toUpperCase() + query.substring(1));
            setDescription(
              result.weather[0].description[0].toUpperCase() +
                result.weather[0].description.substring(1)
            );
          })
          .catch((e) => console.error(e));

        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${query},us&appid=c19c5316b1cb31da538b4a42aa7a6e6a`
        )
          .then((res) => res.json())
          .then((result) => {
            setFive(result.list);
            console.log(five);
          })
          .catch((e) => console.error(e));
      }
      fetchMyApi();
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      const dt = new Date();
      const time = dt.toLocaleTimeString();
      setTime(time);
    }, 1000);
    return () => clearTimeout(timer);
  }, [time]);
  useEffect(() => {
    async function fetchMyApi() {
      await fetch(
        `http://api.openweathermap.org/data/2.5/weather?&units=metric&q=${query}&units=metric&APPID=c19c5316b1cb31da538b4a42aa7a6e6a`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          console.log(weather);

          setQuery("");
          setTemp(Math.round(result.main.temp));
          setMaxTemp(result.main.temp_max);
          setMinTemp(result.main.temp_min);
          setHumidity(result.main.humidity);
          setPlace(query);
          setPlace(query[0].toUpperCase() + query.substring(1));
          setDescription(
            result.weather[0].description[0].toUpperCase() +
              result.weather[0].description.substring(1)
          );
        })
        .catch((e) => console.error(e));
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${query},us&appid=c19c5316b1cb31da538b4a42aa7a6e6a`
      )
        .then((res) => res.json())
        .then((result) => {
          setFive(result.list);
          console.log(five);
        })
        .catch((e) => console.error(e));
    }
    fetchMyApi();
  }, [place]);
  const dateBuilder = (d) => {
    let months = [
      "January",
      "Feburary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    console.log(new Date());

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div>
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Enter city name to get forecast..."
          onChange={(event) => setQuery(event.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <AttachMoneyIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Place</p>
              <h3 className={classes.cardTitle}>{place}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                {/* <DateRange /> */}
                {/* Last 24 Hours */}
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Temperature</p>
              <h3 className={classes.cardTitle}>{temp}°C</h3>
            </CardHeader>
            <CardFooter stats>
              {/* <div className={classes.stats}>
                <Update />
                Just Updated
              </div> */}
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Maximum Temperature</p>
              <h3 className={classes.cardTitle}>{maxTemp}°C </h3>
            </CardHeader>
            <CardFooter stats>
              {/* <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Get more space
                </a>
              </div> */}
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <AttachMoneyIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Humidity</p>
              <h3 className={classes.cardTitle}>{humidity}%</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                {/* <DateRange /> */}
                {/* Last 24 Hours */}
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Date and time</p>
              <h4 className={classes.cardTitle}>{dateBuilder(new Date())} </h4>
              <h4 className={classes.cardTitle}>{time} </h4>
            </CardHeader>
            <CardFooter stats>
              {/* <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Get more space
                </a>
              </div> */}
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <AttachMoneyIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Description</p>
              <h3 className={classes.cardTitle}>{description}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                {/* <DateRange /> */}
                {/* Last 24 Hours */}
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      {/* <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Sales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Email Subscriptions</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Completed Tasks</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer> */}
      <GridContainer>
        {/* <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Tasks:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Bugs",
                tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs}
                  />
                ),
              },
              {
                tabName: "Website",
                tabIcon: Code,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={website}
                  />
                ),
              },
              {
                tabName: "Server",
                tabIcon: Cloud,
                tabContent: (
                  <Tasks
                    checkedIndexes={[1]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={server}
                  />
                ),
              },
            ]}
          />
        </GridItem> */}
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>Forecast</h4>
            </CardHeader>
            <CardBody>
              {five && five.length > 0 && (
                <Table
                  tableHeaderColor="warning"
                  tableHead={["S.No", "Date", "Temperature", "Description"]}
                  tableData={[
                    [
                      "1",
                      five[0].dt_txt.substring(0, 10),
                      (five[0].main.temp / 10).toFixed(1) + "°C",
                      five[0].weather[0].description,
                    ],
                    [
                      "2",
                      five[6].dt_txt.substring(0, 10),
                      (five[6].main.temp / 10).toFixed(1) + "°C",
                      five[6].weather[0].description,
                    ],
                    [
                      "3",
                      five[11].dt_txt.substring(0, 10),
                      (five[11].main.temp / 10).toFixed(1) + "°C",
                      five[11].weather[0].description,
                    ],
                    [
                      "4",
                      five[21].dt_txt.substring(0, 10),
                      (five[21].main.temp / 10).toFixed(1) + "°C",
                      five[21].weather[0].description,
                    ],
                  ]}
                />
              )}
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
