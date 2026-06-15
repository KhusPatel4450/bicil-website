import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");

  if (!code) {
    return new NextResponse("Missing code", { status: 400 });
  }

  const res = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const { access_token: token, error } = await res.json();

  if (error || !token) {
    const msg = JSON.stringify(`authorization:github:error:${error ?? "unknown"}`);
    const html = `<!doctype html><html><body><script>
      if (window.opener) window.opener.postMessage(${msg}, "*");
      window.close();
    </script></body></html>`;
    return new NextResponse(html, { headers: { "Content-Type": "text/html" } });
  }

  const msg = JSON.stringify(
    `authorization:github:success:${JSON.stringify({ token, provider: "github" })}`
  );

  // Send token directly — Decap CMS 3.x does not send the handshake message back
  const html = `<!doctype html><html><body><script>
    (function() {
      var msg = ${msg};
      if (window.opener) {
        window.opener.postMessage(msg, "*");
        // Also support the older handshake protocol
        window.addEventListener("message", function(e) {
          window.opener.postMessage(msg, e.origin);
        }, false);
        window.opener.postMessage("authorizing:github", "*");
      }
      setTimeout(function() { window.close(); }, 2000);
    })();
  </script></body></html>`;

  return new NextResponse(html, { headers: { "Content-Type": "text/html" } });
}
