// dependancies
import help from "../functions/help.js";
import author from "../functions/author.js";
import source from "../functions/source.js";
import program from "../functions/program.js";
import myError from "../functions/errorMessages.js";

function AppRouting() {
  /**
   * -------------------------------------------------------------------------------
   *  Routes
   * -------------------------------------------------------------------------------
   *
   *    ./blc          by default language in english.
   *    ./blc -fr
   *    ./blc -es
   *    ./blc -de
   *    ./blc -it
   *    ./blc -jp
   *    ./blc -en
   *    ./blc -us
   *    ./blc -??     langages non prie en charge
   *
   *    ./blc -eur         by default language in english with devise EUR
   *    ./blc -eur -fr
   *    ./blc -eur -es
   *    ./blc -eur -de
   *    ./blc -eur -it
   *    ./blc -eur -jp
   *    ./blc -eur -en
   *    ./blc -eur -us
   *    ./blc -eur -??     langages non prie en charge
   *
   *    ./blc -gbp         by default language in english with devise GBP
   *    ./blc -gbp -fr
   *    ./blc -gbp -es
   *    ./blc -gbp -de
   *    ./blc -gbp -it
   *    ./blc -gbp -jp
   *    ./blc -gbp -en
   *    ./blc -gbp -us
   *    ./blc -gbp -??     langages non prie en charge
   *
   *    ./blc --help         by default language in english
   *    ./blc --help -fr
   *    ./blc --help -es
   *    ./blc --help -de
   *    ./blc --help -it
   *    ./blc --help -jp
   *    ./blc --help -en
   *    ./blc --help -us
   *    ./blc --help -??     langages non prie en charge
   *
   *    ./blc --author         by default language in english
   *    ./blc --author -fr
   *    ./blc --author -es
   *    ./blc --author -de
   *    ./blc --author -it
   *    ./blc --author -jp
   *    ./blc --author -en
   *    ./blc --author -us
   *    ./blc --author -??     langages non prie en charge
   *
   *    ./blc --source         by default language in english
   *    ./blc --source -fr
   *    ./blc --source -es
   *    ./blc --source -de
   *    ./blc --source -it
   *    ./blc --source -jp
   *    ./blc --source -en
   *    ./blc --source -us
   *    ./blc --source -??     langages non prie en charge
   *
   * -------------------------------------------------------------------------------
   */

  const check = {
    lang: {
      undefined: undefined,
      en: "-en",
      us: "-us",
      fr: "-fr",
      es: "-es",
      de: "-de",
      it: "-it",
      jp: "-jp",
    },
    option: {
      help: "--help",
      author: "--author",
      source: "--source",
    },
    devise: {
      eur: "-eur",
      gbp: "-gbp",
      usd: "-usd",
    },
  };

  let langSelected = check.lang;
  let optionSelected = check.option;
  let optionDevise = check.devise;

  if (!process.argv[3]) {
    switch (process.argv[2]) {
      case langSelected.undefined:
      case langSelected.en:
      case langSelected.us:
      case optionDevise.usd:
        program("usd", "en");
        break;
      case langSelected.fr:
        program("usd", "fr");
        break;
      case langSelected.es:
        program("usd", "es");
        break;
      case langSelected.de:
        program("usd", "de");
        break;
      case langSelected.it:
        program("usd", "it");
        break;
      case langSelected.jp:
        program("usd", "jp");
        break;
      case optionDevise.eur:
        program("eur", "en");
        break;
      case optionDevise.gbp:
        program("gbp", "en");
        break;
      case optionSelected.help:
        help();
        break;
      case optionSelected.author:
        author();
        break;
      case optionSelected.source:
        source();
        break;

      default:
        myError(
          "fr",
          `Désolé, mais "${process.argv[3]}" n'est pas reconnue dans le programme, utilise l'option --help pour savoir plus sur ce qu'il est possible de faire.`
        );
        break;
    }
  } else {
    switch (process.argv[3]) {
      case undefined:
      case "-en":
      case "-us":
        if (process.argv[2] === optionSelected.help) help();
        else if (process.argv[2] === optionSelected.author) author();
        else if (process.argv[2] === optionSelected.source) source();
        else if (process.argv[2] === optionDevise.eur) program("eur", "en");
        else if (process.argv[2] === optionDevise.gbp) program("gbp", "en");
        else if (process.argv[2] === optionDevise.usd) program("usd", "en");
        break;

      case "-fr":
        if (process.argv[2] === optionSelected.help) help("fr");
        else if (process.argv[2] === optionSelected.author) author("fr");
        else if (process.argv[2] === optionSelected.source) source("fr");
        else if (process.argv[2] === optionDevise.eur) program("eur", "fr");
        else if (process.argv[2] === optionDevise.gbp) program("gbp", "fr");
        else if (process.argv[2] === optionDevise.usd) program("usd", "fr");
        break;

      case "-es":
        if (process.argv[2] === optionSelected.help) help("es");
        else if (process.argv[2] === optionSelected.author) author("es");
        else if (process.argv[2] === optionSelected.source) source("es");
        else if (process.argv[2] === optionDevise.eur) program("eur", "es");
        else if (process.argv[2] === optionDevise.gbp) program("gbp", "es");
        else if (process.argv[2] === optionDevise.usd) program("usd", "es");
        break;

      case "-de":
        if (process.argv[2] === optionSelected.help) help("de");
        else if (process.argv[2] === optionSelected.author) author("de");
        else if (process.argv[2] === optionSelected.source) source("de");
        else if (process.argv[2] === optionDevise.eur) program("eur", "de");
        else if (process.argv[2] === optionDevise.gbp) program("gbp", "de");
        else if (process.argv[2] === optionDevise.usd) program("usd", "de");
        break;

      case "-it":
        if (process.argv[2] === optionSelected.help) help("it");
        else if (process.argv[2] === optionSelected.author) author("it");
        else if (process.argv[2] === optionSelected.source) source("it");
        else if (process.argv[2] === optionDevise.eur) program("eur", "it");
        else if (process.argv[2] === optionDevise.gbp) program("gbp", "it");
        else if (process.argv[2] === optionDevise.usd) program("usd", "it");
        break;

      case "-jp":
        if (process.argv[2] === optionSelected.help) help("jp");
        else if (process.argv[2] === optionSelected.author) author("jp");
        else if (process.argv[2] === optionSelected.source) source("jp");
        else if (process.argv[2] === optionDevise.eur) program("eur", "jp");
        else if (process.argv[2] === optionDevise.gbp) program("gbp", "jp");
        else if (process.argv[2] === optionDevise.usd) program("usd", "jp");
        break;

      default:
        myError(
          "fr",
          `Désolé, mais "${process.argv[3]}" n'est pas reconnue dans le programme, utilise l'option --help pour savoir plus sur ce qu'il est possible de faire.`
        );
        break;
    }
  }
}
export default AppRouting;
