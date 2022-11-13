// dependancies
import {
  bold,
  cyan,
  greenBright,
  redBright,
  gray,
  yellow,
  italic,
  cyanBright,
  magentaBright,
} from "colorette";
import boxen from "boxen";
import commandLineUsage from "command-line-usage";

/**
 * Permet d'afficher un encar contenant mes remerciements selon la langue passé en argument.
 * @param {string} lang
 */
function thanks(lang = "en") {
  const TEXTS_THANKS = {
    en: {
      message:
        "Thank you for taking the time to look at the help for this program which is very easy to use.",
    },
    fr: {
      message:
        "Merci d'avoir pris le temps de regarder l'aide pour ce programme qui s'avère très simple d'utilisation.",
    },
    es: {
      message:
        "Gracias por tomarse el tiempo de mirar la ayuda de este programa que es muy fácil de usar.",
    },
    de: {
      message:
        "Vielen Dank, dass Sie sich die Zeit genommen haben, die Hilfe für dieses Programm anzusehen, das sich als sehr benutzerfreundlich erwiesen hat.",
    },
    it: {
      message:
        "Grazie per aver dedicato del tempo alla guida di questo programma che è molto facile da usare.",
    },
    jp: {
      message:
        "とても使いやすいプログラムのヘルプをご覧いただき、ありがとうございます。",
    },
  };

  console.log(
    boxen(
      greenBright(
        `${
          lang === "en"
            ? TEXTS_THANKS.en.message
            : lang === "fr"
            ? TEXTS_THANKS.fr.message
            : lang === "es"
            ? TEXTS_THANKS.es.message
            : lang === "de"
            ? TEXTS_THANKS.de.message
            : lang === "it"
            ? TEXTS_THANKS.it.message
            : lang === "jp"
            ? TEXTS_THANKS.jp.message
            : null
        }`
      ),
      {
        borderColor: "yellowBright",
        float: "center",
        borderStyle: "bold",
        margin: {
          top: 2,
          bottom: 2,
        },
        padding: {
          top: 1,
          right: 2,
          bottom: 1,
          left: 2,
        },
        backgroundColor: "black",
        title: `${new Date().toLocaleDateString(
          `${lang === "jp" ? "ja-JP-u-ca-japanese" : lang}`,
          {
            weekday: "long",
            day: "numeric",
            year: "numeric",
            month: "long",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
          }
        )}`,
        titleAlignment: "left",
        width: 60,
      }
    )
  );
}

/**
 * Permet d'obtenir de l'aide sur le programme.
 * @param {string} lang 'en', 'fr', 'es', 'de', 'it', 'jp'
 */
function help(lang = "en") {
  // langues
  const TEXTS_HELP_EN = {
    description: `👉 Learning node with a simple project on bitcoin value recovery\n👉 using an API provided by Coindesk.\n\n${italic(
      "⭐ The 3 currencies recovered are:"
    )} ${gray("USD")}, ${gray("EUR")} et ${gray("GBP")}.`,
    // partie 2
    titleExemple: "Examples of uses",
    exemple1: "USD currency, and English program by default.",
    exemple2: "Program in English with the specified currency.",
    exemple3: "Program translated with the specified currency.",
    exemple4: " Executes the option entered in English.",
    exemple5: " Runs the translated input option.",
    // partie 3
    titleDevise: "Available currencies",
    usd: `${gray(
      italic("Displays the program with the dollar.         ( $ )")
    )}`,
    eur: `${gray(
      italic("Displays the program in Euro.                 ( € )")
    )}`,
    gbp: `${gray(
      italic("Displays the program with the pound sterling. ( £ )")
    )}`,
    // partie 4
    titleLanguage: "Supported languages",
    fr: `${gray(italic("Switches the program or help to French."))}`,
    es: `${gray(italic("Switches the program or help in Spanish."))}`,
    de: `${gray(italic("Switches the program or help to German."))}`,
    it: `${gray(italic("Switches the program or help to Italian."))}`,
    jp: `${gray(italic("Switches the program or help to Japanese."))}`,
    // partie 5
    titleOptions: "Options",
    help: `${gray(italic("Displays help for using this program."))}`,
    author: `${gray(
      italic("Displays information about the author of the program.")
    )}`,
    source: `${gray(italic("Where did I get the idea for this project..."))}`,
  };

  const TEXTS_HELP_FR = {
    description: `👉 Apprentissage de node via un projet simple sur la récupération de la\n👉 valeur du bitcoin via une API mis à disposition par Coindesk.\n\n${italic(
      "⭐ les 3 devises récupérées sont les suivantes:"
    )} ${gray("USD")}, ${gray("EUR")} et ${gray("GBP")}.`,
    // partie 2
    titleExemple: "Exemples d'utilisations",
    exemple1: "Devise USD, et programme en Anglais par défaut.",
    exemple2: "Programme en Anglais avec la devise spécifiée.",
    exemple3: "Programme traduit avec la devise spécifiée.",
    exemple4: " Exécute l'option saisie en Anglais.",
    exemple5: " Exécute l'option saisie traduite.",
    // partie 3
    titleDevise: "Les devises disponible",
    usd: `${gray(
      italic("Affiche le programme avec le dollar.         ( $ )")
    )}`,
    eur: `${gray(
      italic("Affiche le programme avec l'euro.            ( € )")
    )}`,
    gbp: `${gray(
      italic("Affiche le programme avec la livre sterling. ( £ )")
    )}`,
    // partie 4
    titleLanguage: "Langages supportés",
    fr: `${gray(italic("Passe le programme ou l'aide en Français."))}`,
    es: `${gray(italic("Passe le programme ou l'aide en Espagnol."))}`,
    de: `${gray(italic("Passe le programme ou l'aide en Allemand."))}`,
    it: `${gray(italic("Passe le programme ou l'aide en Italien."))}`,
    jp: `${gray(italic("Passe le programme ou l'aide en Japonais."))}`,
    // partie 5
    titleOptions: "Options",
    help: `${gray(italic("Affiche l'aide pour utiliser ce programme."))}`,
    author: `${gray(
      italic("Affiche des informations sur l'auteur du programme.")
    )}`,
    source: `${gray(italic("D'où m'est venur l'idée de ce projet..."))}`,
  };

  const TEXTS_HELP_ES = {
    description: `👉 Nodo de aprendizaje con un proyecto sencillo sobre la recuperación\n👉 del valor de bitcoin utilizando una API proporcionada por Coindesk.\n\n${italic(
      "⭐ Las 3 monedas recuperadas son:"
    )} ${gray("USD")}, ${gray("EUR")} et ${gray("GBP")}.`,
    // partie 2
    titleExemple: "Ejemplos de uso",
    exemple1: "Moneda USD, y programa en inglés por defecto.",
    exemple2: "Programa en inglés con la moneda especificada.",
    exemple3: "Programa traducido con la moneda especificada.",
    exemple4: " Ejecuta la opción introducida en inglés.",
    exemple5: " Ejecuta la opción introducida traducida.",
    // partie 3
    titleDevise: "Monedas disponibles",
    usd: `${gray(italic("Muestra el programa con el dólar.           ( $ )"))}`,
    eur: `${gray(italic("Muestra el programa en euros.               ( € )"))}`,
    gbp: `${gray(italic("Muestra el programa con la libra esterlina. ( £ )"))}`,
    // partie 4
    titleLanguage: "Idiomas soportados",
    fr: `${gray(italic("Cambia el programa o la ayuda al francés."))}`,
    es: `${gray(italic("Cambia el programa o la ayuda al español."))}`,
    de: `${gray(italic("Cambia el programa o la ayuda al alemán."))}`,
    it: `${gray(italic("Cambia el programa o la ayuda al italiano."))}`,
    jp: `${gray(italic("Cambia el programa o la ayuda al japonés."))}`,
    // partie 5
    titleOptions: "Opciones",
    help: `${gray(italic("Muestra la ayuda para usar este programa."))}`,
    author: `${gray(
      italic("Muestra información sobre el autor del programa.")
    )}`,
    source: `${gray(italic("De dónde saqué la idea para este proyecto..."))}`,
  };

  const TEXTS_HELP_DE = {
    description: `👉 Lernknoten mit einem einfachen Projekt zur Rückgewinnung von\n👉 Bitcoin-Werten unter Verwendung einer von Coindesk bereitgestellten API.\n\n${italic(
      "⭐ Die 3 wiederhergestellten Währungen sind:"
    )} ${gray("USD")}, ${gray("EUR")} et ${gray("GBP")}.`,
    // partie 2
    titleExemple: "Beispiele für Verwendungen",
    exemple1: "USD-Währung und englisches Programm als Standard.",
    exemple2: "Programm in Englisch mit der angegebenen Währung.",
    exemple3: "Programm übersetzt mit der angegebenen Währung.",
    exemple4: " Führt die eingegebene Option in Englisch aus.",
    exemple5: " Führt die übersetzte Eingabeoption aus",
    // partie 3
    titleDevise: "Verfügbare Währungen",
    usd: `${gray(
      italic("Zeigt das Programm mit dem Dollar an.         ( $ )")
    )}`,
    eur: `${gray(
      italic("Zeigt das Programm in Euro an.                ( € )")
    )}`,
    gbp: `${gray(
      italic("Zeigt das Programm mit dem Pfund Sterling an. ( £ )")
    )}`,
    // partie 4
    titleLanguage: "Unterstützte Sprachen",
    fr: `${gray(
      italic("Schaltet das Programm oder die Hilfe auf Französisch um.")
    )}`,
    es: `${gray(
      italic("Schaltet das Programm oder die Hilfe auf Spanisch um.")
    )}`,
    de: `${gray(
      italic("Schaltet das Programm oder die Hilfe auf Deutsch um.")
    )}`,
    it: `${gray(
      italic("Schaltet das Programm oder die Hilfe auf Italienisch um.")
    )}`,
    jp: `${gray(
      italic("Schaltet das Programm oder die Hilfe auf Japanisch um.")
    )}`,
    // partie 5
    titleOptions: "Optionen",
    help: `${gray(
      italic("Zeigt die Hilfe zur Verwendung dieses Programms an.")
    )}`,
    author: `${gray(
      italic("Zeigt Informationen über den Autor des Programms an")
    )}`,
    source: `${gray(italic("Woher habe ich die Idee für dieses Projekt..."))}`,
  };

  const TEXTS_HELP_IT = {
    description: `👉 Nodo di apprendimento con un semplice progetto sul recupero del valore dei\n👉 utilizzando un'API fornita da Coindesk.\n\n${italic(
      "⭐ Le 3 valute recuperate sono:"
    )} ${gray("USD")}, ${gray("EUR")} et ${gray("GBP")}.`,
    // partie 2
    titleExemple: "Esempi di utilizzo",
    exemple1: `USD e programma in inglese per predefinita.`,
    exemple2: "Programma in inglese con la valuta specificata.",
    exemple3: "Programma tradotto con la valuta specificata.",
    exemple4: " Esegue l'opzione inserita in inglese.",
    exemple5: " Esegue l'opzione di input tradotta",
    // partie 3
    titleDevise: "Valute disponibili",
    usd: `${gray(
      italic("Visualizza il programma con il dollaro.          ( $ )")
    )}`,
    eur: `${gray(
      italic("Visualizza il programma in euro.                 ( € )")
    )}`,
    gbp: `${gray(
      italic("Visualizza il programma con la sterlina inglese. ( £ )")
    )}`,
    // partie 4
    titleLanguage: "Lingue supportate",
    fr: `${gray(italic("Passa il programma o la guida in francese."))}`,
    es: `${gray(italic("Passa il programma o la guida in spagnolo."))}`,
    de: `${gray(italic("Passa il programma o la guida in tedesco."))}`,
    it: `${gray(italic("Passa il programma o la guida in italiano."))}`,
    jp: `${gray(italic("Passa il programma o la guida in giapponese."))}`,
    // partie 5
    titleOptions: "Opzioni",
    help: `${gray(italic("Visualizza la guida all'uso di questo programma."))}`,
    author: `${gray(
      italic("Visualizza informazioni sull'autore del programma")
    )}`,
    source: `${gray(italic("Dove ho preso l'idea per questo progetto..."))}`,
  };

  const TEXTS_HELP_JP = {
    description: `👉 Learning node with a simple project on bitcoin value recovery\n👉 using an API provided by Coindesk.\n\n${italic(
      "⭐ 回収された3通貨は:"
    )} ${gray("USD")}, ${gray("EUR")} et ${gray("GBP")}.`,
    // partie 2
    titleExemple: "使用例",
    exemple1: "通貨はUSD、デフォルトで英語のプログラム。",
    exemple2: "指定された通貨で英語のプログラム。",
    exemple3: "指定された通貨で翻訳されたプログラム。",
    exemple4: " 英語で入力されたオプションを実行します。",
    exemple5: " 翻訳された入力オプションを実行する。",
    // partie 3
    titleDevise: "利用可能な通貨",
    usd: `${gray(
      italic("ドルを使ったプログラムを表示します。         ( $ )")
    )}`,
    eur: `${gray(
      italic("ユーロで番組を表示します。                   ( € )")
    )}`,
    gbp: `${gray(
      italic("ポンド建てで番組を表示します。               ( £ )")
    )}`,
    // partie 4
    titleLanguage: "サポートされている言語",
    fr: `${gray(italic("Switches the program or help to French."))}`,
    es: `${gray(italic("プログラムまたはヘルプをスペイン語に切り替えます."))}`,
    de: `${gray(italic("プログラムまたはヘルプをドイツ語に切り替えます。"))}`,
    it: `${gray(italic("プログラムまたはヘルプをイタリア語に切り替えます。"))}`,
    jp: `${gray(italic("プログラムまたはヘルプを日本語に切り替えます。"))}`,
    // partie 5
    titleOptions: "オプション",
    help: `${gray(
      italic("このプログラムを使用するためのヘルプを表示します。")
    )}`,
    author: `${gray(italic("Displays the author of the program."))}`,
    source: `${gray(italic("Displays the author of the program."))}`,
  };

  // Partie 3
  const devisesDefinitions = [
    {
      description: `${gray(
        italic(
          `${
            lang === undefined || lang === "en"
              ? TEXTS_HELP_EN.usd
              : lang === "fr"
              ? TEXTS_HELP_FR.usd
              : lang === "es"
              ? TEXTS_HELP_ES.usd
              : lang === "de"
              ? TEXTS_HELP_DE.usd
              : lang === "it"
              ? TEXTS_HELP_IT.usd
              : lang === "jp"
              ? TEXTS_HELP_JP.usd
              : null
          }`
        )
      )}`,
      alias: `${cyan(bold("usd"))}`,
      type: Boolean,
    },
    {
      description: `${gray(
        italic(
          `${
            lang === undefined || lang === "en"
              ? TEXTS_HELP_EN.eur
              : lang === "fr"
              ? TEXTS_HELP_FR.eur
              : lang === "es"
              ? TEXTS_HELP_ES.eur
              : lang === "de"
              ? TEXTS_HELP_DE.eur
              : lang === "it"
              ? TEXTS_HELP_IT.eur
              : lang === "jp"
              ? TEXTS_HELP_JP.eur
              : null
          }`
        )
      )}`,
      alias: `${cyan(bold("eur"))}`,
      type: Boolean,
    },
    {
      description: `${gray(
        italic(
          `${
            lang === undefined || lang === "en"
              ? TEXTS_HELP_EN.gbp
              : lang === "fr"
              ? TEXTS_HELP_FR.gbp
              : lang === "es"
              ? TEXTS_HELP_ES.gbp
              : lang === "de"
              ? TEXTS_HELP_DE.gbp
              : lang === "it"
              ? TEXTS_HELP_IT.gbp
              : lang === "jp"
              ? TEXTS_HELP_JP.gbp
              : null
          }`
        )
      )}`,
      alias: `${cyan(bold("gbp"))}`,
      type: Boolean,
    },
  ];
  // partie 4
  const languesDefinitions = [
    {
      description: `${gray(
        italic(
          `${
            lang === undefined || lang === "en"
              ? TEXTS_HELP_EN.fr
              : lang === "fr"
              ? TEXTS_HELP_FR.fr
              : lang === "es"
              ? TEXTS_HELP_ES.fr
              : lang === "de"
              ? TEXTS_HELP_DE.fr
              : lang === "it"
              ? TEXTS_HELP_IT.fr
              : lang === "jp"
              ? TEXTS_HELP_JP.fr
              : null
          }`
        )
      )}`,
      alias: `${yellow(bold("fr"))}`,
      type: Boolean,
    },
    {
      description: `${gray(
        italic(
          `${
            lang === undefined || lang === "en"
              ? TEXTS_HELP_EN.es
              : lang === "fr"
              ? TEXTS_HELP_FR.es
              : lang === "es"
              ? TEXTS_HELP_ES.es
              : lang === "de"
              ? TEXTS_HELP_DE.es
              : lang === "it"
              ? TEXTS_HELP_IT.es
              : lang === "jp"
              ? TEXTS_HELP_JP.es
              : null
          }`
        )
      )}`,
      alias: `${yellow(bold("es"))}`,
      type: Boolean,
    },
    {
      description: `${gray(
        italic(
          `${
            lang === undefined || lang === "en"
              ? TEXTS_HELP_EN.de
              : lang === "fr"
              ? TEXTS_HELP_FR.de
              : lang === "es"
              ? TEXTS_HELP_ES.de
              : lang === "de"
              ? TEXTS_HELP_DE.de
              : lang === "it"
              ? TEXTS_HELP_IT.de
              : lang === "jp"
              ? TEXTS_HELP_JP.de
              : null
          }`
        )
      )}`,
      alias: `${yellow(bold("de"))}`,
      type: Boolean,
    },
    {
      description: `${gray(
        italic(
          `${
            lang === undefined || lang === "en"
              ? TEXTS_HELP_EN.it
              : lang === "fr"
              ? TEXTS_HELP_FR.it
              : lang === "es"
              ? TEXTS_HELP_ES.it
              : lang === "de"
              ? TEXTS_HELP_DE.it
              : lang === "it"
              ? TEXTS_HELP_IT.it
              : lang === "jp"
              ? TEXTS_HELP_JP.it
              : null
          }`
        )
      )}`,
      alias: `${yellow(bold("it"))}`,
      type: Boolean,
    },
    {
      description: `${gray(
        italic(
          `${
            lang === undefined || lang === "en"
              ? TEXTS_HELP_EN.jp
              : lang === "fr"
              ? TEXTS_HELP_FR.jp
              : lang === "es"
              ? TEXTS_HELP_ES.jp
              : lang === "de"
              ? TEXTS_HELP_DE.jp
              : lang === "it"
              ? TEXTS_HELP_IT.jp
              : lang === "jp"
              ? TEXTS_HELP_JP.jp
              : null
          }`
        )
      )}`,
      alias: `${yellow(bold("jp"))}`,
      type: Boolean,
    },
  ];
  // partie 5
  const optionDefinitions = [
    {
      name: `${greenBright(bold("help"))}`,
      description: `${gray(
        italic(
          `${
            lang === undefined || lang === "en"
              ? TEXTS_HELP_EN.help
              : lang === "fr"
              ? TEXTS_HELP_FR.help
              : lang === "es"
              ? TEXTS_HELP_ES.help
              : lang === "de"
              ? TEXTS_HELP_DE.help
              : lang === "it"
              ? TEXTS_HELP_IT.help
              : lang === "jp"
              ? TEXTS_HELP_JP.help
              : null
          }`
        )
      )}`,
      type: Boolean,
    },
    {
      name: `${greenBright(bold("author"))}`,
      description: `${gray(
        italic(
          `${
            lang === undefined || lang === "en"
              ? TEXTS_HELP_EN.author
              : lang === "fr"
              ? TEXTS_HELP_FR.author
              : lang === "es"
              ? TEXTS_HELP_ES.author
              : lang === "de"
              ? TEXTS_HELP_DE.author
              : lang === "it"
              ? TEXTS_HELP_IT.author
              : lang === "jp"
              ? TEXTS_HELP_JP.author
              : null
          }`
        )
      )}`,
      type: Boolean,
      defaultOption: true,
    },
    {
      name: `${greenBright(bold("source"))}`,
      description: `${gray(
        italic(
          `${
            lang === undefined || lang === "en"
              ? TEXTS_HELP_EN.source
              : lang === "fr"
              ? TEXTS_HELP_FR.source
              : lang === "es"
              ? TEXTS_HELP_ES.source
              : lang === "de"
              ? TEXTS_HELP_DE.source
              : lang === "it"
              ? TEXTS_HELP_IT.source
              : lang === "jp"
              ? TEXTS_HELP_JP.source
              : null
          }`
        )
      )}`,
      type: Boolean,
      defaultOption: true,
    },
    
  ];

  const sections = [
    //partie 1
    {
      header: "📌 - Bitcoin Coindesk Application",
      content:
        lang === undefined || lang === "en"
          ? TEXTS_HELP_EN.description
          : lang === "fr"
          ? TEXTS_HELP_FR.description
          : lang === "es"
          ? TEXTS_HELP_ES.description
          : lang === "de"
          ? TEXTS_HELP_DE.description
          : lang === "it"
          ? TEXTS_HELP_IT.description
          : lang === "jp"
          ? TEXTS_HELP_JP.description
          : null,
    },
    // partie 2
    {
      header: `📝 - ${
        lang === undefined || lang === "en"
          ? TEXTS_HELP_EN.titleExemple
          : lang === "fr"
          ? TEXTS_HELP_FR.titleExemple
          : lang === "es"
          ? TEXTS_HELP_ES.titleExemple
          : lang === "de"
          ? TEXTS_HELP_DE.titleExemple
          : lang === "it"
          ? TEXTS_HELP_IT.titleExemple
          : lang === "jp"
          ? TEXTS_HELP_JP.titleExemple
          : null
      }`,
      content: `${magentaBright(bold("./blc.js"))}                    ${gray(
        italic(
          `${
            lang === undefined || lang === "en"
              ? TEXTS_HELP_EN.exemple1
              : lang === "fr"
              ? TEXTS_HELP_FR.exemple1
              : lang === "es"
              ? TEXTS_HELP_ES.exemple1
              : lang === "de"
              ? TEXTS_HELP_DE.exemple1
              : lang === "it"
              ? TEXTS_HELP_IT.exemple1
              : lang === "jp"
              ? TEXTS_HELP_JP.exemple1
              : null
          }`
        )
      )}\n${magentaBright(bold("./blc.js"))} ${cyanBright(
        bold("[DEVISE]")
      )}           ${gray(
        italic(
          `${
            lang === undefined || lang === "en"
              ? TEXTS_HELP_EN.exemple2
              : lang === "fr"
              ? TEXTS_HELP_FR.exemple2
              : lang === "es"
              ? TEXTS_HELP_ES.exemple2
              : lang === "de"
              ? TEXTS_HELP_DE.exemple2
              : lang === "it"
              ? TEXTS_HELP_IT.exemple2
              : lang === "jp"
              ? TEXTS_HELP_JP.exemple2
              : null
          }`
        )
      )}\n${magentaBright(bold("./blc.js"))} ${cyanBright(
        bold("[DEVISE]")
      )} ${yellow(bold("[LANG]"))}    ${gray(
        italic(
          `${
            lang === undefined || lang === "en"
              ? TEXTS_HELP_EN.exemple3
              : lang === "fr"
              ? TEXTS_HELP_FR.exemple3
              : lang === "es"
              ? TEXTS_HELP_ES.exemple3
              : lang === "de"
              ? TEXTS_HELP_DE.exemple3
              : lang === "it"
              ? TEXTS_HELP_IT.exemple3
              : lang === "jp"
              ? TEXTS_HELP_JP.exemple3
              : null
          }`
        )
      )}\n\n${magentaBright(bold("./blc.js"))} ${greenBright(
        bold("[OPTION]")
      )}          ${gray(
        italic(
          `${
            lang === undefined || lang === "en"
              ? TEXTS_HELP_EN.exemple4
              : lang === "fr"
              ? TEXTS_HELP_FR.exemple4
              : lang === "es"
              ? TEXTS_HELP_ES.exemple4
              : lang === "de"
              ? TEXTS_HELP_DE.exemple4
              : lang === "it"
              ? TEXTS_HELP_IT.exemple4
              : lang === "jp"
              ? TEXTS_HELP_JP.exemple4
              : null
          }`
        )
      )}\n${magentaBright(bold("./blc.js"))} ${greenBright(
        bold("[OPTION]")
      )} ${yellow(bold("[LANG]"))}   ${gray(
        italic(
          `${
            lang === undefined || lang === "en"
              ? TEXTS_HELP_EN.exemple5
              : lang === "fr"
              ? TEXTS_HELP_FR.exemple5
              : lang === "es"
              ? TEXTS_HELP_ES.exemple5
              : lang === "de"
              ? TEXTS_HELP_DE.exemple5
              : lang === "it"
              ? TEXTS_HELP_IT.exemple5
              : lang === "jp"
              ? TEXTS_HELP_JP.exemple5
              : null
          }`
        )
      )}`,
    },
    // partie 3
    {
      header: `💲 - ${
        lang === undefined || lang === "en"
          ? TEXTS_HELP_EN.titleDevise
          : lang === "fr"
          ? TEXTS_HELP_FR.titleDevise
          : lang === "es"
          ? TEXTS_HELP_ES.titleDevise
          : lang === "de"
          ? TEXTS_HELP_DE.titleDevise
          : lang === "it"
          ? TEXTS_HELP_IT.titleDevise
          : lang === "jp"
          ? TEXTS_HELP_JP.titleDevise
          : null
      }`,
      optionList: devisesDefinitions,
      tableOptions: {
        columns: [
          {
            name: "option",
            noWrap: true,
            padding: { left: "  ", right: "" },
            width: 15,
          },
          {
            name: "description",
            width: 70,
          },
        ],
      },
    },
    // partie 4
    {
      header: `🏳 - ${
        lang === undefined || lang === "en"
          ? TEXTS_HELP_EN.titleLanguage
          : lang === "fr"
          ? TEXTS_HELP_FR.titleLanguage
          : lang === "es"
          ? TEXTS_HELP_ES.titleLanguage
          : lang === "de"
          ? TEXTS_HELP_DE.titleLanguage
          : lang === "it"
          ? TEXTS_HELP_IT.titleLanguage
          : lang === "jp"
          ? TEXTS_HELP_JP.titleLanguage
          : null
      }`,
      optionList: languesDefinitions,
      tableOptions: {
        columns: [
          {
            name: "option",
            noWrap: true,
            padding: { left: "  ", right: "" },
            width: 15,
          },
          {
            name: "description",
            width: 70,
          },
        ],
      },
    },
    // partie 5
    {
      header: `🔧 - ${
        lang === undefined || lang === "en"
          ? TEXTS_HELP_EN.titleOptions
          : lang === "fr"
          ? TEXTS_HELP_FR.titleOptions
          : lang === "es"
          ? TEXTS_HELP_ES.titleOptions
          : lang === "de"
          ? TEXTS_HELP_DE.titleOptions
          : lang === "it"
          ? TEXTS_HELP_IT.titleOptions
          : lang === "jp"
          ? TEXTS_HELP_JP.titleOptions
          : null
      }`,
      optionList: optionDefinitions,
      tableOptions: {
        columns: [
          {
            name: "option",
            noWrap: true,
            padding: { left: "  ", right: "" },
            width: 15,
          },
          {
            name: "description",
            width: 70,
          },
        ],
      },
    },
  ];

  const usage = commandLineUsage(sections);
  console.log(
    boxen(usage, {
      padding: 2,
      float: "center",
      title: bold("Comment utiliser le programme btc.js"),
      titleAlignment: "left",
      borderStyle: "round",
      borderColor: "white",
      margin: {
        top: 2,
      },
    })
  );

  if (lang === "en") {
    thanks("en");
  } else if (lang == "fr") {
    thanks("fr");
  } else if (lang == "es") {
    thanks("es");
  } else if (lang == "de") {
    thanks("de");
  } else if (lang == "it") {
    thanks("it");
  } else if (lang == "jp") {
    thanks("jp");
  }
}

export default help;
