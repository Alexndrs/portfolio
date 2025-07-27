# This is my first post

> Ceci est une citation

Ceci est une citation contenant une liste
> * Ceci est une citation 1
> * Ceci est une citation 2
> * Ceci est une citation 3

1. Premier point  
2. Deuxième point  
3. Troisième point

Une liste sans numéro
- petit a
- petit b
- petit c


```js
console.log("Hello World")
```

```bash
hi
```

---

## ✅ Sous-titre de niveau 2 (h2)

Et un paragraphe classique pour tester le rendu du texte normal.  
On peut aussi faire de la **mise en gras**, de *l’italique*, ou encore du ***gras + italique***.

Voici aussi du `inline code` dans une phrase.

---

### ✅ Titre h3

Un lien vers [Google](https://www.google.com) ou vers une [ancre locale](#checklists).

Un peu de HTML :
<p style="color:red">Texte rouge avec HTML</p>

---

#### ✅ Titre h4

Une image locale :

![Image Pokémon](/posts/first-post/generated_samples_grass_official.png)

Une image externe :

![Octocat](https://raw.githubusercontent.com/Alexndrs/multi-chatBot/main/demo.gif)

---

### 📝 Checklists

- [x] Ceci est fait  
- [ ] Ceci ne l’est pas

---

### 🧠 Bloc de code multi-langue

#### Python

```python
def hello(name):
    print(f"Hello, {name}")
```

#### C++

```cpp
#include <iostream>
int main() {
    std::cout << "Hello world!";
    return 0;
}
```

---

### 📊 Tableaux

| Nom        | Type      | Légendaire |
|------------|-----------|------------|
| Pikachu    | Électrik  | ❌         |
| Mew        | Psy       | ✅         |
| Dracaufeu  | Feu/Vol   | ❌         |

---

### 🧬 Math (avec remark-math et rehype-katex si activés)

Inline : $E = mc^2$  
Block :

```math
\int_{0}^{1} x^2 \, dx = \frac{1}{3}
```


$$\int_{0}^{1} x^2 \, dx = \frac{1}{3}$$

---

### 📦 Badges (style Shields.io)

[![PyTorch](https://img.shields.io/badge/PyTorch-2.x-EE4C2C?logo=pytorch&logoColor=white&style=flat-square)](https://pytorch.org)  
[![TypeScript](https://img.shields.io/badge/TypeScript-React-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

---

### 📚 Citation multi-ligne

> Ceci est une citation longue  
> sur plusieurs lignes  
> pour tester l’indentation.

---

### 🖼️ HTML avec plusieurs images côte à côte

<p align="center" style="display: flex; justify-content: center; gap: 10px;">
  <img src="https://placehold.co/200x150?text=Sample+1" width="30%" />
  <img src="https://placehold.co/200x150?text=Sample+2" width="30%" />
  <img src="https://placehold.co/200x150?text=Sample+3" width="30%" />
</p>

---

### 🧵 Code dans différents formats

<details>
<summary>Afficher un bloc de code</summary>

```ts
type User = {
  id: number;
  name: string;
};
```

</details>
