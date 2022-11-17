// dependancies
import { bold } from "colorette";
import qrcode from "qrcode-terminal";
import boxen from "boxen";

// langages
import language from "../lang/texts.json" assert { type: "json" };

/**
 * Génère un QR Code qui permettra une redirection vers l'API de Coindesk.
 */
function coindesk() {
  qrcode.generate(
    "https://old.coindesk.com/coindesk-api",
    { small: true },
    (currentQrCode) =>
      console.log(
        boxen(currentQrCode, {
          title: bold("Powered by CoinDesk"),
          titleAlignment: "center",
          margin: {
            top: 0,
            bottom: 2,
          },
          padding: 1,
          borderStyle: "double",
          borderColor: "gray",
          backgroundColor: "black",
          float: "center",
        })
      )
  );
}

/**
 * Génère un QR Code qui permettra une redirection vers la formation qui m'a inspiré pour ce projet.
 * @params {string}
 */
function udemyBorisFlesch(lang = "en") {
  qrcode.generate(
    "https://www.udemy.com/course/maitriser-nodejs-et-son-ecosysteme-npm-express-mongo/",
    { small: true },
    (currentQrCode) =>
      console.log(
        boxen(currentQrCode, {
          title:
            lang === "en" || lang === undefined
              ? language.texts.en.qrcode.boris.content
              : lang === "fr"
              ? language.texts.fr.qrcode.boris.content
              : lang === "es"
              ? language.texts.es.qrcode.boris.content
              : lang === "de"
              ? language.texts.de.qrcode.boris.content
              : lang === "it"
              ? language.texts.it.qrcode.boris.content
              : lang === "jp"
              ? language.texts.jp.qrcode.boris.content
              : null,
          titleAlignment: "center",
          margin: {
            top: 0,
            bottom: 2,
          },
          padding: 1,
          borderStyle: "double",
          borderColor: "yellowBright",
          backgroundColor: "black",
          float: "center",
        })
      )
  );
}

/**
 * Génère un QR Code qui permettra une redirection vers mon lien d'affiliation pour la plateforme de Dyma.fr que j'affectionne grandement.
 * Par défaut la langue utilisé est l'anglais.
 * @param {string} "en"
 */
function affiliationDyma(lang = "en") {
  qrcode.generate(
    "https://dyma.fr/r/5d52bd274e7aec730eb90fde",
    { small: true },
    (currentQrCode) =>
      console.log(
        boxen(currentQrCode, {
          title:
            lang === "en"
              ? bold(language.texts.en.qrcode.dyma.content)
              : lang === "fr"
              ? bold(language.texts.fr.qrcode.dyma.content)
              : lang === "es"
              ? bold(language.texts.es.qrcode.dyma.content)
              : lang === "de"
              ? bold(language.texts.de.qrcode.dyma.content)
              : lang === "it"
              ? bold(language.texts.it.qrcode.dyma.content)
              : lang === "jp"
              ? bold(language.texts.jp.qrcode.dyma.content)
              : null,
          titleAlignment: "left",
          margin: {
            top: 2,
            bottom: 2,
          },
          textAlignment: "center",
          padding: 1,
          borderStyle: "double",
          borderColor: "white",
          backgroundColor: "black",
          float: "center",
        })
      )
  );
}

export default {
  coindesk,
  udemyBorisFlesch,
  affiliationDyma,
};
