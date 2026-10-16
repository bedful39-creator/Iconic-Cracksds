# Download directory

One file. This is what every download button on the site serves:

| File | Notes |
|---|---|
| `KryptonCracked-Universal-V3.8.jar` | The only build this site ships |

The filename is defined in `src/lib/brand.ts` (`builds[0].file`). If you
regenerate the jar, make sure it ends up with exactly this name — a doubled
extension like `.jar.jar` will 404 and the download button will silently do
nothing.

`robots.txt` disallows `/download/` so the binary is not crawled.
