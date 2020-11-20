## IP Address Tracker [(Live Version)](https://agitated-panini-ec0fd6.netlify.app)

React.js project that tracks location of user provided IP address.

![IP Address Tracker](https://i.imgur.com/FDTaDy4.png)


## Getting Started

Following section will provide steps on how to setup the project locally

### Prerequisites

To run this project you need to have node.js

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo

```sh
git clone https://github.com/Tadynas/ip-address-tracker.git
```

2. Navigate to project directory

```sh
cd ip-address-tracker
```

3. Install dependencies

```sh
yarn install
```

4.  Start project

```sh
yarn start
```

It will run the app in the development mode.
Open [http://localhost:3000](http://localhost:3000/) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## Tools

1. React.js
2. Leaflet.js
3. Axios
4. Chart.js
5. Moment.js
6. SASS



## API

1. [Fetching User IP](https://api.ipify.org)

2. [Fetching IP Geo Information](https://geo.ipify.org)

## Keys

Ipify requires additional API KEY:
1. Create [ipify](https://geo.ipify.org) account
2. Create your personal ipify [API KEY](https://geo.ipify.org/statistics)
3. Create .env file in project root directory
4. Add following line of code
```
REACT_APP_IPIFY_KEY=PERSONAL_API_KEY
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
