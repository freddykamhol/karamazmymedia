/* eslint-disable @typescript-eslint/no-require-imports */
const http = require("node:http");

const DEFAULT_TARGET = "https://katechnologies.de";

function getTargetBase() {
  const target = (process.env.REDIRECT_TARGET || DEFAULT_TARGET).trim();
  try {
    return new URL(target);
  } catch {
    throw new Error(
      `Invalid REDIRECT_TARGET: "${process.env.REDIRECT_TARGET}". Expected a full URL like https://katechnologies.de`,
    );
  }
}

function buildLocation(targetBase, reqUrl) {
  const incoming = new URL(reqUrl || "/", "http://localhost");
  const next = new URL(targetBase.href);
  next.pathname = incoming.pathname;
  next.search = incoming.search;
  return next.toString();
}

const targetBase = getTargetBase();
const port = Number.parseInt(process.env.PORT || "3000", 10);

const server = http.createServer((req, res) => {
  if (req.url === "/healthz") {
    res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
    res.end("ok");
    return;
  }

  const location = buildLocation(targetBase, req.url);
  res.writeHead(308, {
    Location: location,
    "cache-control": "public, max-age=3600",
    "content-type": "text/plain; charset=utf-8",
  });
  res.end(`Redirecting to ${location}\n`);
});

server.listen(port, () => {
  console.log(`Redirect server listening on :${port}`);
  console.log(`Redirect target: ${targetBase.href}`);
});
