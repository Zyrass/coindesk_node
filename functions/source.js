// dependancies
import {
  bold,
  cyan,
  italic,
  white,
} from "colorette";
import boxen from "boxen";

import myQrCode from "./qrCode.js";
import language from "../lang/texts.json" assert { type: "json" };

function why(lang = "en") {
  console.log(
    boxen(
      bold(
        cyan(
          lang === "en" || lang === undefined
            ? language.texts.en.source.why.content
            : lang === "fr"
            ? language.texts.fr.source.why.content
            : lang === "es"
            ? language.texts.es.source.why.content
            : lang === "de"
            ? language.texts.de.source.why.content
            : lang === "it"
            ? language.texts.it.source.why.content
            : lang === "jp"
            ? language.texts.jp.source.why.content
            : null
        )
      ),
      {
        margin: 1,
        padding: 1,
        borderStyle: "bold",
        title:
          lang === "en" || lang === undefined
            ? language.texts.en.source.why.title
            : lang === "fr"
            ? language.texts.fr.source.why.title
            : lang === "es"
            ? language.texts.es.source.why.title
            : lang === "de"
            ? language.texts.de.source.why.title
            : lang === "it"
            ? language.texts.it.source.why.title
            : lang === "jp"
            ? language.texts.jp.source.why.title
            : null,
        titleAlignment: "left",
        width: 60,
        float: "center",
      }
    )
  );
}

/**
 * Affiche ma philosophie dans le développement informatique.
 * Par défaut, la langue est en anglais.
 * @param {string} lang
 */
function philosophie(lang = "en") {
  console.log(
    boxen(
      white(
        italic(
          lang === "en" || lang === undefined
            ? language.texts.en.source.philosophie.content
            : lang === "fr"
            ? language.texts.fr.source.philosophie.content
            : lang === "es"
            ? language.texts.es.source.philosophie.content
            : lang === "de"
            ? language.texts.de.source.philosophie.content
            : lang === "it"
            ? language.texts.it.source.philosophie.content
            : lang === "jp"
            ? language.texts.jp.source.philosophie.content
            : null
        )
      ),
      {
        float: "center",
        width: 60,
        padding: 1,
        margin: {
          bottom: 2,
        },
        title:
          lang === "en" || lang === undefined
            ? language.texts.en.source.philosophie.title
            : lang === "fr"
            ? language.texts.fr.source.philosophie.title
            : lang === "es"
            ? language.texts.es.source.philosophie.title
            : lang === "de"
            ? language.texts.de.source.philosophie.title
            : lang === "it"
            ? language.texts.it.source.philosophie.title
            : lang === "jp"
            ? language.texts.jp.source.philosophie.title
            : null,
        titleAlignment: "left",
      }
    )
  );
}

/**
 * Affiche la raison pour laquelle cette application existe.
 * Par défaut, la langue est en anglais.
 * @param {string} lang
 */
function source(lang = "en") {
  if (lang === "en" || lang === undefined) {
    why();
    philosophie();
    myQrCode.udemyBorisFlesch();
  } else if (lang === "fr") {
    why("fr");
    philosophie("fr");
    myQrCode.udemyBorisFlesch("fr");
  } else if (lang == "es") {
    why("es");
    philosophie("es");
    myQrCode.udemyBorisFlesch("es");
  } else if (lang == "de") {
    why("de");
    philosophie("de");
    myQrCode.udemyBorisFlesch("de");
  } else if (lang == "it") {
    why("it");
    philosophie("it");
    myQrCode.udemyBorisFlesch("it");
  } else if (lang == "jp") {
    why("jp");
    philosophie("jp");
    myQrCode.udemyBorisFlesch("jp");
  }
}

export default source;
