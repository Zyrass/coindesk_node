// dependancies
import {
  bold,
  cyan,
  greenBright,
  redBright,
  yellow,
  italic,
  magentaBright,
} from "colorette";
import boxen from "boxen";
import columnify from "columnify";

import myQrCode from "./qrCode.js";
import language from "../lang/texts.json" assert { type: "json" };

/**
 * Affiche les informations de l'auteur.
 * Par défaut la langue est en anglais.
 * @param {string} lang
 */
function auteur(lang = "en") {
  console.log(
    boxen(
      columnify(
        {
          "": "",
          nom: italic(bold(cyan("GUILLON"))),
          prenom: italic(bold(cyan("Alain"))),
          age: italic(bold(cyan(38))),
          formation: italic(
            bold(greenBright("Développeur fullstack RNCP de niveau 6"))
          ),
          statut: italic(
            bold(
              greenBright(
                lang === "en"
                  ? bold(language.texts.en.author.info.content.statut)
                  : lang === "fr"
                  ? bold(language.texts.fr.author.info.content.statut)
                  : lang === "es"
                  ? bold(language.texts.es.author.info.content.statut)
                  : lang === "de"
                  ? bold(language.texts.de.author.info.content.statut)
                  : lang === "it"
                  ? bold(language.texts.it.author.info.content.statut)
                  : lang === "jp"
                  ? bold(language.texts.jp.author.info.content.statut)
                  : null
              )
            )
          ),
          date: italic(
            bold(
              redBright(
                lang === "en"
                  ? bold(language.texts.en.author.info.content.date)
                  : lang === "fr"
                  ? bold(language.texts.fr.author.info.content.date)
                  : lang === "es"
                  ? bold(language.texts.es.author.info.content.date)
                  : lang === "de"
                  ? bold(language.texts.de.author.info.content.date)
                  : lang === "it"
                  ? bold(language.texts.it.author.info.content.date)
                  : lang === "jp"
                  ? bold(language.texts.jp.author.info.content.date)
                  : null
              )
            )
          ),
          academie: italic(bold(yellow("it-akademy.fr"))),
          mooc: italic(bold(magentaBright("Dyma.fr"))),
        },
        { columns: ["DESIGNATION", "INFORMATION_PERSONNEL"] }
      ),
      {
        padding: 1,
        margin: {
          top: 2,
        },
        float: "center",
        title:
          lang === "en"
            ? bold(language.texts.en.author.info.title)
            : lang === "fr"
            ? bold(language.texts.fr.author.info.title)
            : lang === "es"
            ? bold(language.texts.es.author.info.title)
            : lang === "de"
            ? bold(language.texts.de.author.info.title)
            : lang === "it"
            ? bold(language.texts.it.author.info.title)
            : lang === "jp"
            ? bold(language.texts.jp.author.info.title)
            : null,
        titleAlignment: "left",
        borderStyle: "round",
        borderColor: "gray",
        width: 60,
      }
    )
  );
}

/**
 * Affiche une simple description de comment je suis au quotidien.
 * Par défaut la langue est en anglais.
 * @param {string} lang
 */
function description(lang = "en") {
  console.log(
    boxen(
      lang === "en"
        ? italic(language.texts.en.author.description.content)
        : lang === "fr"
        ? italic(language.texts.fr.author.description.content)
        : lang === "es"
        ? italic(language.texts.es.author.description.content)
        : lang === "de"
        ? italic(language.texts.de.author.description.content)
        : lang === "it"
        ? italic(language.texts.it.author.description.content)
        : lang === "jp"
        ? italic(language.texts.jp.author.description.content)
        : null,
      {
        padding: 1,
        margin: {
          top: 2,
          bottom: 0,
        },
        borderColor: "gray",
        width: 60,
        float: "center",
        title:
          lang === "en"
            ? bold(language.texts.en.author.description.title)
            : lang === "fr"
            ? bold(language.texts.fr.author.description.title)
            : lang === "es"
            ? bold(language.texts.es.author.description.title)
            : lang === "de"
            ? bold(language.texts.de.author.description.title)
            : lang === "it"
            ? bold(language.texts.it.author.description.title)
            : lang === "jp"
            ? bold(language.texts.jp.author.description.title)
            : null,
        titleAlignment: "left",
      }
    )
  );
}

/**
 * Affiche un QR Code pour un lien d'affiliation vers la plateforme de Dyma.
 * Par défaut la langue est en anglais.
 * @param {string} lang
 */
function parrainageDyma(lang = "en") {
  lang === "en"
    ? myQrCode.affiliationDyma()
    : lang === "fr"
    ? myQrCode.affiliationDyma("fr")
    : lang === "es"
    ? myQrCode.affiliationDyma("es")
    : lang === "de"
    ? myQrCode.affiliationDyma("de")
    : lang === "it"
    ? myQrCode.affiliationDyma("it")
    : lang === "jp"
    ? myQrCode.affiliationDyma("jp")
    : null;
}

/**
 * Affiche des informations sur l'auteur du projet.
 * Par défaut, la langue est en anglais.
 * @param {string} lang
 */
function author(lang = "en") {
  if (lang === "en") {
    auteur();
    description();
    parrainageDyma();
  } else if (lang == "fr") {
    auteur("fr");
    description("fr");
    parrainageDyma("fr");
  } else if (lang == "es") {
    auteur("es");
    description("es");
    parrainageDyma("es");
  } else if (lang == "de") {
    auteur("de");
    description("de");
    parrainageDyma("de");
  } else if (lang == "it") {
    auteur("it");
    description("it");
    parrainageDyma("it");
  } else if (lang == "jp") {
    auteur("jp");
    description("jp");
    parrainageDyma("jp");
  }
}

export default author;
