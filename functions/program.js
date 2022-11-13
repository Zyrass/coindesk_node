// dependancies
import { bold, cyan, greenBright, gray } from "colorette";
import axios from "axios";
import boxen from "boxen";
import logSymbols from "log-symbols";

import myQrCode from "./qrCode.js";

/**
 * API Coindesk permettant de récuperer 3 devises (eur, usd et gbp)
 * @returns data
 */
async function coindeskAPI() {
  try {
    const response = await axios.get(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Programme principal utilisant async et await..
 */
function program(devise = "usd", lang = "en") {
  try {
    coindeskAPI().then((coindesk) => {
      // Si il n'y a pas d'argument, l'euro sera sélectionné par défaut auquel cas
      // la variable code prendra en paramètre l'argument passé.
      !process.argv[2] ? devise.toUpperCase() : "devise inconnu";

      // récupération de la valeur et de la description.
      const rate = parseFloat(
        coindesk.data.bpi[devise.toUpperCase()].rate
      ).toFixed(2);
      const description = coindesk.data.bpi[devise.toUpperCase()].description;

      console.log(
        boxen(
          // message de succès à afficher
          lang === "en" || lang === undefined
            ? `${logSymbols.success} The current value of bitcoin in ${bold(
                cyan(description.toLowerCase())
              )} is ${greenBright(rate)} ${
                devise.toUpperCase() === "EUR"
                  ? "€."
                  : devise.toUpperCase() === "USD"
                  ? "$."
                  : devise.toUpperCase() === "GBP"
                  ? "£."
                  : "?"
              }`
            : lang === "fr"
            ? `${logSymbols.success} La valeur actuel du bitcoin en ${bold(
                cyan(description.toLowerCase())
              )} est de ${greenBright(rate)} ${
                devise.toUpperCase() === "EUR"
                  ? "€."
                  : devise.toUpperCase() === "USD"
                  ? "$."
                  : devise.toUpperCase() === "GBP"
                  ? "£."
                  : "?"
              }`
            : lang === "es"
            ? `${logSymbols.success} El valor actual del bitcoin en ${bold(
                cyan(description.toLowerCase())
              )} estadounidenses es de ${greenBright(rate)} ${
                devise.toUpperCase() === "EUR"
                  ? "€."
                  : devise.toUpperCase() === "USD"
                  ? "$."
                  : devise.toUpperCase() === "GBP"
                  ? "£."
                  : "?"
              }`
            : lang === "de"
            ? `${logSymbols.success} Der aktuelle Wert von Bitcoin in ${bold(
                cyan(description.toLowerCase())
              )} beträgt ${greenBright(rate)} ${
                devise.toUpperCase() === "EUR"
                  ? "€."
                  : devise.toUpperCase() === "USD"
                  ? "$."
                  : devise.toUpperCase() === "GBP"
                  ? "£."
                  : "?"
              }`
            : lang === "it"
            ? `${logSymbols.success} Il valore attuale del bitcoin in ${bold(
                cyan(description.toLowerCase())
              )} è di ${greenBright(rate)} ${
                devise.toUpperCase() === "EUR"
                  ? "€."
                  : devise.toUpperCase() === "USD"
                  ? "$."
                  : devise.toUpperCase() === "GBP"
                  ? "£."
                  : "?"
              }`
            : lang === "jp"
            ? `${
                logSymbols.success
              } 現在のビットコインの米ドルでの価値は ${bold(
                cyan(description.toLowerCase())
              )} ドルです。 ${greenBright(rate)} ${
                devise.toUpperCase() === "EUR"
                  ? "€."
                  : devise.toUpperCase() === "USD"
                  ? "$."
                  : devise.toUpperCase() === "GBP"
                  ? "£."
                  : "?"
              }`
            : null,
          // options utilisés pour boxen
          {
            padding: 1,
            margin: {
              top: 2,
              bottom: 2,
            },
            width: 50,
            float: "center",
            borderStyle: "round",
            borderColor: "gray",
            title: `${bold(gray(description))}`,
            titleAlignment: "left",
          }
        )
      );

      myQrCode.coindesk();
    });
  } catch (err) {
    console.error(err);
  }
}

export default program;
