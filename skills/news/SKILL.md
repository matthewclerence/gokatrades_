# news — GokaTrades TCG News Briefing

## Invocation

Type as a plain message (not a `/slash` command):

```
news
```

Fetches the latest Pokémon TCG updates from approved sources and outputs a structured English briefing.

---

## Approved Sources (STRICT — no others)

Search these in order. Pull only from these URLs — do not cite or include information from other sources.

| Source | Focus |
|--------|-------|
| https://www.pokemon.com/us/pokemon-news | Official US announcements, product releases, competitive updates |
| https://www.pokemon-card.com/ | Official JP set reveals, promos, upcoming product info |
| https://asia.pokemon-card.com/id/ | Official Asia/Indonesia regional news |
| https://www.pokebeach.com/ | Set leaks, card reveals, tournament results |
| https://www.pokeguardian.com/ | International set spoilers and product news |
| https://www.tcgplayer.com/content/pokemon/articles | Market analysis, price movements |

---

## Output Format

Output a structured briefing in **English**. Use this exact structure:

```
## Pokemon TCG News — [Date]

### New Sets & Products
- [Bullet: set name, release date, key details]

### Card Reveals & Promos
- [Bullet: card name, set, notable mechanic or rarity]

### Competitive & Meta
- [Bullet: format changes, rotation, ban list, tournament results]

### Market
- [Bullet: significant price movements, supply/demand shifts]

### Upcoming
- [Bullet: confirmed future releases or events with dates]

---
Sources:
- [Title](URL)
```

- Use bullet points only — no long paragraphs
- Include the source URL for every piece of information
- If a category has no news, omit it entirely (do not write "Nothing to report")
- Dates should be written as Month DD, YYYY

---

## Execution Workflow

1. **WebSearch** each approved source for recent Pokémon TCG news (last 7 days preferred, last 30 days acceptable if recent news is sparse)
2. **Deduplicate** — if the same story appears on multiple sources, cite the most authoritative one (official sites first, then pokebeach/pokeguardian)
3. **Categorize** each item into the appropriate section
4. **Write the briefing** following the output format above
5. **List all sources** used at the bottom

Do not fabricate dates, card names, prices, or release information. If you cannot verify a detail from an approved source, omit it.
