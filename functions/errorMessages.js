// dependancies
import { bold, redBright } from "colorette";
import boxen from "boxen";

/**
 * Affiche un message d'erreur en fonction de la langue passé en premier paramètre
 * @param {string} lang
 * @param {string} message
 */
function errorMSG(lang = "en", message) {
  console.log(
    boxen(bold(message), {
      borderStyle: "round",
      borderColor: "red",
      title: redBright(
        bold(
          lang === "en"
            ? "Error the currency does not exist"
            : lang === "fr"
            ? "Erreur La monnaie n'existe pas"
            : lang === "es"
            ? "Error La moneda no existe"
            : lang === "de"
            ? "Fehler Währung nicht existent"
            : lang === "it"
            ? "Errore Valuta non esistente"
            : "エラー Currency Not Existed（通貨が存在しません"
        )
      ),
      titleAlignment: "left",
      padding: 1,
      margin: 1,
      float: "center",
      width: 60,
    })
  );
}

export default errorMSG;
