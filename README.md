# Nettside til Os Kodeklubb

Laget en enkel nettside for Os Kodeklubb, bygget på [SvelteKit](https://kit.svelte.dev/)

Det er for tiden fortsatt i beta, men føles relativt stabilt etter en stund med bruk.

Forskjellen mellom SvelteKit og Svelte ser hovedsakelig ut til å være at SvelteKit har:

- SSR (server-side rendering)
- Routing

## Opprette prosjektet lokalt

Dersom du ønsker å teste ut dette prosjektet lokalt, kan du første [`clone´](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) prosjektet lokalt.

Naviger så inn i mappen som inneholder filene i dette repoet og så kjører du disse kommandoene i terminalen

```bash
# installerer dependencies
npm install

# starter opp serveren lokalt
npm run dev

# eller start opp serveren, og den åpner siden i nettleseren din
npm run dev -- --open
```

Standard er `localhost:3000`, men porten kan endres til noe annet om ønskelig.

## Produksjon

Dersom man ønsker å teste ut hvordan siden ser ut i produksjon kan man gjøre følgende:

```bash
# bygger siden for produksjon
npm run build

# viser en forhåndsvisning av hvordan produksjonen vil se ut om man laster den opp til en server
npm run preview
```

Om man ønsker å laste denne opp, kan man bruke f.eks. [Netlify](https://www.netlify.com/) (denne har jeg hovedsakelig brukt) eller [Vercel](https://vercel.com/)

> Husk at man må installere riktig adapter for å kunne `deploye` til eksemplene ovenfor
