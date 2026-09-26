# App Game

A tiny browser game: read the original pitch behind a real app or startup, guess a real B2C use it actually became known for, then see the sourced reveal.

No build step, no backend, no dependencies — plain HTML/CSS/JS, deployed as a static site.

## Run locally

```
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Content

Rounds live in [`data.js`](data.js). Every "what actually happens" reveal is backed by a real reported source (news outlets, FBI data, company statements) cited inline — this is a trivia game about documented phenomena, not a how-to.
