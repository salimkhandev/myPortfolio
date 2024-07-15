// src/analytics.js
import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-7BF5KLLH2H"); // Replace with your GA4 Measurement ID
};

export const logPageView = () => {
  const pagePath = window.location.pathname + window.location.hash;
  ReactGA.pageview(pagePath);
};
