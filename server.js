/* eslint-disable @typescript-eslint/no-require-imports */
const http = require("node:http");

const DEFAULT_TARGET = "https://katechnologies.de";

function getTarget() {
  const target = (process.env.TARGET_URL || DEFAULT_TARGET).trim();
  try {
    return new URL(target).toString().replace(/\/$/, "");
  } catch {
    throw new Error(
      `Invalid TARGET_URL: "${process.env.TARGET_URL}". Expected a full URL like https://katechnologies.de`,
    );
  }
}

const targetUrl = getTarget();
const port = Number.parseInt(process.env.PORT || "3000", 10);

const server = http.createServer((req, res) => {
  if (req.url === "/healthz") {
    res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
    res.end("ok");
    return;
  }

  const html = `<!doctype html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex,nofollow" />
    <title>Karam Azmy Media · Neue Adresse</title>
    <style>
      :root { color-scheme: dark; }
      body { margin: 0; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; background: #06070b; color: #fafafa; }
      .wrap { min-height: 100vh; display: grid; place-items: center; padding: 24px; }
      .card { width: min(880px, 100%); border: 1px solid rgba(255,255,255,0.10); background: rgba(255,255,255,0.04); border-radius: 24px; padding: 28px; backdrop-filter: blur(16px); }
      .badge { display: inline-flex; align-items: center; gap: 10px; font-size: 12px; padding: 6px 10px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.10); background: rgba(255,255,255,0.03); color: rgba(255,255,255,0.85); }
      .dot { width: 8px; height: 8px; border-radius: 999px; background: rgb(16 185 129); box-shadow: 0 0 18px rgba(16,185,129,0.6); }
      h1 { margin: 16px 0 0; font-size: clamp(28px, 4vw, 56px); letter-spacing: -0.02em; }
      p { margin: 16px 0 0; max-width: 60ch; color: rgba(255,255,255,0.72); line-height: 1.6; }
      a.btn { margin-top: 22px; display: inline-flex; align-items: center; justify-content: center; height: 48px; padding: 0 18px; border-radius: 999px; background: #fff; color: #000; font-weight: 700; text-decoration: none; }
      .sub { margin-top: 10px; font-size: 12px; color: rgba(255,255,255,0.45); }
    </style>
  </head>
  <body>
    <div class="wrap">
      <div class="card">
        <div class="badge"><span class="dot"></span>Neue Adresse</div>
        <h1>Wir sind umgezogen.</h1>
        <p>Karam Azmy Media findest du ab sofort unter <strong style="color:#fff">${targetUrl.replace(
          /</g,
          "&lt;",
        )}</strong>. Bitte aktualisiere deine Lesezeichen.</p>
        <a class="btn" href="${targetUrl}">Weiter zu KATechnologies →</a>
        <div class="sub">Keine automatische Weiterleitung.</div>
      </div>
    </div>
  </body>
</html>`;

  res.writeHead(200, {
    "content-type": "text/html; charset=utf-8",
    "cache-control": "no-store",
  });
  res.end(html);
});

server.listen(port, () => {
  console.log(`Server listening on :${port}`);
  console.log(`Target URL: ${targetUrl}`);
});
