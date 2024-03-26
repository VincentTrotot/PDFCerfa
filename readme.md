# PDFCerfa

Cette application permet à un utilisateur de remplir numériquement une demande de carte nationale d'identité ou de passeport via un formulaire.
Elle répond à un besoin rencontré par une collectivité : certains usagers ne souhaite pas utiliser le site ANTS pour faire la demande de papier d'identité et la collectivité en question était en pénurie de formulaires cerfas papier.

## L'architecture de l'application

Le développement de cette application avait pour but de me confronter à deux problématiques.
- La génération de fichier PDF
- L'utilisation de composant `React` dans une application `Symfony`

### La génération de fichier PDF

Pour cette problématique, mon approche n'a pas forcément mauvaise mais je pense qu'elle aurait pu être mieux.
Je suis parti avec l'idée de devoir modifier le fichier PDF déjà existant pour ajouter les informations entrée par l'utilisateur. Pour cela, j'ai choisi d'utiliser la bibliothèque `setasign/fpdi`.
Après coup m'est venu l'idée que j'aurai pu simplement créer un fichier PDF vierge, ajouter le cerfa comme une image et ajouter les infos de l'utilisateur par dessus.

### React dans Symfony

Certains champs étant conditionnés à d'autres, j'ai voulu utiliser `React` pour le formulaire, dans le but aussi d'être confronté à la configuration de `Webpack Encore` pour créer des composants React en `TypeScript` et les utiliser dans une application `Symfony`


## Évolutions

Parmi les évolutions à apporter, la prochaine sera sans doute de créer un contoller pour la gestion d'une page afin de permettre aux utilisateurs qui souhaitent héberger cette application d'avoir une page _Mentions légales_.

Bien sûr, il manque de la documentation pour chacun des composants `React` et des controlleurs `Symfony`, et il faudra configurer un prettier pour la partie TypeScript et un CodeSniffer pour la partie php.