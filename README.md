# Calcul de surface d'eau maximale stockée entre les batiments
## _La logique_
Pour aborder cette question, nous devons d'abord comprendre le phénomène des bâtiments qui retiennent l'eau.

Un bâtiment ne peut retenir l'eau que lorsqu'il y a des bâtiments plus élevés à sa gauche et à sa droite car l'eau sera piégée entre ces 2 bâtiments.

On peut donc facilement en déduire que la quantité d'eau qu'un bloc peut contenir est égale au minimum de la hauteur maximale présente sur les moitiés gauche et droite moins la hauteur du bloc actuel.

## Algorithm
Pour résoudre ce problème de manière programmatique, nous allons représenter les hauteurs des bâtiments comme un tableau contenant dans le même ordre que les bâtiments la hauteur correspondante.

### Solution simple
La façon la plus simple de trouver les bâtiments les plus hauts à gauche et à droite de chaque bâtiment et de calculer la surface d'eau piégée comme décrit ci-dessus, nous devons parcourire le tableau et à chaque fois parcourire le tableau à nouveau deux fois en gardant la valeur de la hauteur du bâtiment actuel, pour trouver la hauteur maximale à droite et à gauche.

### Compléxité 
Dans cette solution, nous avons un ensemble d'instructions et 3 boucles (2 d'entre elles sont imbriquées). La complexité temporelle est donc O(n²), avec n la taille de tableau (nombre des batiments). Et la complexité spaciale est O(1) car nous avons pas besoin d'un espace extra.
## Solution Optimale
La première solution est simple, elle fait l'affaire, mais elle n'est pas optimale. Pour la rendre optimale, nous devons donc traverser le tableau une seule fois. Pour ce faire, un outil toujours utilisé lorsque nous devons rechercher une paire de valeurs dans un tableau sans utiliser de tableaux imbriqués est d'utiliser deux pointeurs.

Nous désignons deux pointeurs indexL et indexR à partir de deux extrémités du tableau. Et nous conservons à chaque fois les valeurs de batiments max à droite (rightMax) et à gauche (leftMax).
Si le leftMax actuel est inférieur au rightMax, nous pouvons calculer correctement l'eau à indexL, mais pas l'eau à indexR.

Examinons le cas où leftMax < rightMax. Nous supposons que leftMax est l'hauteur d'un batiment situé à gauche de la batiment à indexL.

Puisque leftMax < rightMax, la quantité d'eau à indexL peut être déterminée à ce moment, quelles que soient les hauteurs à droite (car le batiment le plus haut à droit ne peut pas etre inférieur à rightMax). Et la quantité est le max entre  0 et la difference entre leftMax et l'hauteur de notre batiment indexL.

(Meme principe pour rightMax>=leftMax)


### Compléxité 
Dans cette solution, nous avons éliminé l'utilisation de boucles imbriquées, on fait un seul parcours donc la compléxité temporelle est O(n) et la compléxité spaciale et encore O(1)

## Cas de test
On utilise POSTMAN pour les tests
### Test 1 : tableau vide
![](/docs/assets/Captures/Test1.PNG)

### Test 2 : tableau simple
![](/docs/assets/Captures/Test2.PNG)

### Test 3 : tableau simple
![](/docs/assets/Captures/Test3.PNG)

### Test 4 : tableau simple
![](/docs/assets/Captures/Test4.PNG)

### Test 5 : tableau complexe
![](/docs/assets/Captures/Test5.PNG)

### Test 6 : tableau complexe
![](/docs/assets/Captures/Test6.PNG)

### jest Result 
![](/docs/assets/Captures/Jest.PNG)

## Utilisation

Installez toutes les dépendances nécessaires
```console
npm i
```

Démarrer le serveur

```console
npm run dev
```

Pour exécuter les tests
```console
npm t
```
