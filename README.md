# Knihovny - Lekce 6

Cvičení do breakrooms pro kurz JavaScript 1 od Czechitas.

## 1. Základní validace

- Vytvořte prázdnou stránku, do které vložte knihovnu `validator.js` a svůj JavaScript `index.js`.
- Otevřete stránku v prohlížeči a v konzoli pomocí metody `validator.isEmail` ověřte svoji e-mailovou adresu.
- Pokud máte po ruce svoji **platební kartu**, ověřte v konzoli, že má platné číslo pomocí metody `isCreditCard`. Případně můžete otestovat kartu **4125010001000208**.
- Do těla stránky vložte prázdný odstavec, který bude zobrazovat zprávu pro uživatele.
```html
<p id="msg" class="msg"></p>
```

- Napojte do stránky váš vlastní javascriptový soubor.
- Pomocí funkce `prompt` **požádejte uživatele o jeho e-mail**. V případě, že jde o platný e-mail, zobrazte v připraveném odstavci zprávu „**E-mail v pořádku**“. V opačném případě zobrazte „**Neplatný e-mail**“.
- Pokud je e-mail platný, přidejte zároveň na odstavec CSS třídu `msg--valid`. V opačném případě použijte třídu `msg--invalid`. Přidejte do stránky soubor `style.css` a třídy nastylujte například tak, že `msg--valid` bude míz zelené pozadí a `msg--invalid` naopak červené.

```html
<!-- index.html -->
<link rel="stylesheet" href="style.css" />
```

```html
/* style.css */
.msg {
	color: white;
	padding: 10px;
}
.msg--valid {
	background-color: green;
}
.msg--invalid {
	background-color: red;
}
```