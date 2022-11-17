# Coindesk via node.js

J'apprends à utiliser le shebang mis à disposition par nodeJS via un petit projet qui était avant tout un projet de démonstration issue
de la plateform Udemy et initié par **Boris Flesch** (_merci à toi_).

Je tiens également à remercier la plateforme de **DYMA.fr** qui m'a permis d'acquérir un bon niveau en Javascript.

Je me permet de vous transmettre [un lien d'affiliation](https://dyma.fr/r/5d52bd274e7aec730eb90fde) que vous retrouverez dans le programme via un QR Code.

J'ai entièrement repris le projet en m'en inspirant afin de lui ajouter énormément de features.

1. Ajout de couleur grâce à la dépendance **colorette**
2. Ajout de bordure qui rende les projets dans la console avec bien plus de classe grâce à **boxen**
3. Ajout de quelque QR Code grâce à la dépendance **qrcode-terminal**
4. Ajout d'une aide comme on peut le trouver sur nos commande unix grâce à la dépendance **command-line-usage**
5. En fonction des message de succès ou d'erreur, j'utilise une icône sympa mise à disposition de la dépendance **log-symbols**
6. Mise en forme de l'aide grâce à la dépendance **columnify**
7. Utilisation de la dépendance **axios** afin d'utiliser l'api de **Coindesk**

## Impératif

> Il vous faut impératiement **Node** d'installer sur votre OS.

_et c'est tout!_

## Droits d'exécution du programme

Une fois le projet télécharger et que vous vous êtes bien déplacer dans le répertoire en question,
il faudra lui administrer les droits d'exécution afin de pouvoir exécuter le programme.

```sh
# Sur ubuntu et sur mac (à tester je n'ai pas de mac)...
chmod a+x btc.js
```
Sur windows il faudra utiliser le programme CMDER afin de lui administrer les droits.
l'invite de commande est à chié...

## Exécution du programme

Ainsi une fois les droits octroyés, pour lancer le programme il suffira d'exécuter la commande suivante:

```sh
# exécution du programme sur unix
./btc.js

# exécution du programme sur windows
node --no-warnings ./btc.js
```

> Le rendu sur windows laisse à désiré mais il fonctionne.


## Des arguments ?

En effet il est possible de lancer quelques arguments. Je vais vous enumérer toutes les routes possibles.

> Attention les traductions sont issues de la plateforme deepl.com et donc ne parlant pas les autres langues je me dis qu'elles peuvent-être toutes erronés.

```sh

# ======================================================================
#  PROGRAMME SANS OPTION OU DEVISE
# ======================================================================

# Pour obtenir la valeur du bitcoin avec pour devise USD en anglais par défaut.
./btc

# ======================================================================
#  PROGRAMME AVEC LA LANGUE PASSEE EN OPTION
# ======================================================================

# Pour obtenir la valeur du bitcoin avec pour devise USD en anglais par défaut.
./btc -en
./btc -us

# Pour obtenir la valeur du bitcoin avec pour devise USD en français.
./btc -fr
# Pour obtenir la valeur du bitcoin avec pour devise USD en espagnol.
./btc -es
# Pour obtenir la valeur du bitcoin avec pour devise USD en allemand.
./btc -de
# Pour obtenir la valeur du bitcoin avec pour devise USD en italien.
./btc -it
# Pour obtenir la valeur du bitcoin avec pour devise USD en japonais.
./btc -jp

# ======================================================================
#  PROGRAMME AVEC LA DEVISE DE PASSEE EN OPTION SANS LANGUE
# ======================================================================

# Pour obtenir la valeur du bitcoin avec pour devise EUR en anglais par défaut.
./btc -eur
# Pour obtenir la valeur du bitcoin avec pour devise GBP en anglais par défaut.
./btc -gbp
# Pour obtenir la valeur du bitcoin avec pour devise USD en anglais par défaut.
./btc -usd

# ======================================================================
#  PROGRAMME AVEC LA DEVISE EUR DE PASSEE EN OPTION AVEC UNE LANGUE
# ======================================================================

# Pour obtenir la valeur du bitcoin avec pour devise EUR en anglais par défaut.
./btc -eur -en
./btc -eur -us
# Pour obtenir la valeur du bitcoin avec pour devise EUR en français.
./btc -eur -fr
# Pour obtenir la valeur du bitcoin avec pour devise EUR en espagnol.
./btc -eur -es
# Pour obtenir la valeur du bitcoin avec pour devise EUR en allemand.
./btc -eur -de
# Pour obtenir la valeur du bitcoin avec pour devise EUR en italien.
./btc -eur -it
# Pour obtenir la valeur du bitcoin avec pour devise EUR en japonais.
./btc -eur -jp

# ======================================================================
#  PROGRAMME AVEC LA DEVISE GBP DE PASSEE EN OPTION AVEC UNE LANGUE
# ======================================================================

# Pour obtenir la valeur du bitcoin avec pour devise GBP en anglais par défaut.
./btc -gbp -en
./btc -gbp -us
# Pour obtenir la valeur du bitcoin avec pour devise GBP en français.
./btc -gbp -fr
# Pour obtenir la valeur du bitcoin avec pour devise GBP en espagnol.
./btc -gbp -es
# Pour obtenir la valeur du bitcoin avec pour devise GBP en allemand.
./btc -gbp -de
# Pour obtenir la valeur du bitcoin avec pour devise GBP en italien.
./btc -gbp -it
# Pour obtenir la valeur du bitcoin avec pour devise GBP en japonais.
./btc -gbp -jp

# ======================================================================
#  PROGRAMME AVEC LA DEVISE USD DE PASSEE EN OPTION AVEC UNE LANGUE
# ======================================================================

# Pour obtenir la valeur du bitcoin avec pour devise USD en anglais par défaut.
./btc -usd -en
./btc -usd -us
# Pour obtenir la valeur du bitcoin avec pour devise USD en français.
./btc -usd -fr
# Pour obtenir la valeur du bitcoin avec pour devise USD en espagnol.
./btc -usd -es
# Pour obtenir la valeur du bitcoin avec pour devise USD en allemand.
./btc -usd -de
# Pour obtenir la valeur du bitcoin avec pour devise USD en italien.
./btc -usd -it
# Pour obtenir la valeur du bitcoin avec pour devise USD en japonais.
./btc -usd -jp

# ======================================================================
#  OPTION --HELP + LANGUE?
# ======================================================================

# Pour obtenir de l'aide en anglais par défaut.
./btc --help
./btc --help -en
./btc --help -us
# Pour obtenir de l'aide en français.
./btc --help -fr
# Pour obtenir de l'aide en espagnol.
./btc --help -es
# Pour obtenir de l'aide en allemand.
./btc --help -de
# Pour obtenir de l'aide en italien.
./btc --help -it
# Pour obtenir de l'aide en japonais. (Oui petit délire perso)
./btc --help -jp

# ======================================================================
#  OPTION --AUTHOR + LANGUE?
# ======================================================================

# Pour obtenir des informations sur l'auteur en anglais par défaut.
./btc --author
./btc --author -en
./btc --author -us
# Pour obtenir des informations sur l'auteur en français.
./btc --author -fr
# Pour obtenir des informations sur l'auteur en espagnol.
./btc --author -es
# Pour obtenir des informations sur l'auteur en allemand.
./btc --author -de
# Pour obtenir des informations sur l'auteur en italien.
./btc --author -it
# Pour obtenir des informations sur l'auteur en japonais.
./btc --author -jp

# ======================================================================
#  OPTION --SOURCE + LANGUE?
# ======================================================================

# Pour obtenir les sources en anglais par défaut.
./btc --source
./btc --source -en
./btc --source -us
# Pour obtenir les sources en français.
./btc --source -fr
# Pour obtenir les sources en espagnol.
./btc --source -es
# Pour obtenir les sources en allemand.
./btc --source -de
# Pour obtenir les sources en italien.
./btc --source -it
# Pour obtenir les sources en japonais.
./btc --source -jp
```
