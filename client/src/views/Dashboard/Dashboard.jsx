import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import PlaceIcon from '@material-ui/icons/Place';
import CloudIcon from '@material-ui/icons/Cloud';
// import Accessibility from "@material-ui/icons/Accessibility";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Table from "../../components/Table/Table.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();

  const [query, setQuery] = useState("Delhi");
  const [weather, setWeather] = useState({});
  // const [forecast, setForecast] = useState({});
  const [time, setTime] = useState("");
  // const [date, setDate] = useState("");
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
  });


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
                <PlaceIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Place</p>
              <h3 className={classes.cardTitle}>{place}</h3>
            </CardHeader>
            <CardFooter stats>
              {"India"}
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <WatchLaterIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Date Time</p>
              <h4 className={classes.cardTitle}>{dateBuilder(new Date())} </h4>
            </CardHeader>
            <CardFooter stats>
            {time}
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <CloudIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Temperature</p>
              <h3 className={classes.cardTitle}>{temp} °C</h3>
            </CardHeader>
            <CardFooter stats>
             {minTemp} - {maxTemp+2} °C
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <WhatshotIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Humidity</p>
              <h3 className={classes.cardTitle}>{humidity}%</h3>
            </CardHeader>
            <CardFooter stats>
                {description}
            </CardFooter>
          </Card>
        </GridItem>
      
      </GridContainer>
      <GridContainer>
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
                      five[0].weather[0].description[0].toUpperCase() +
                        five[0].weather[0].description.substring(1),
                    ],
                    [
                      "2",
                      five[6].dt_txt.substring(0, 10),
                      (five[6].main.temp / 10).toFixed(1) + "°C",
                      five[6].weather[0].description[0].toUpperCase() +
                        five[6].weather[0].description.substring(1),
                    ],
                    [
                      "3",
                      five[11].dt_txt.substring(0, 10),
                      (five[11].main.temp / 10).toFixed(1) + "°C",
                      five[11].weather[0].description[0].toUpperCase() +
                        five[11].weather[0].description.substring(1),
                    ],
                    [
                      "4",
                      five[21].dt_txt.substring(0, 10),
                      (five[21].main.temp / 10).toFixed(1) + "°C",
                      five[21].weather[0].description[0].toUpperCase() +
                        five[21].weather[0].description.substring(1),
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
