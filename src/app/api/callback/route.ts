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
    const html = `<!doctype html><html><body>
      <p>Auth error: ${error ?? "unknown"}</p>
      <script>if (window.opener) window.opener.postMessage(${msg}, "*");</script>
    </body></html>`;
    return new NextResponse(html, { headers: { "Content-Type": "text/html" } });
  }

  const msg = JSON.stringify(
    `authorization:github:success:${JSON.stringify({ token, provider: "github" })}`
  );

  // Debug version — stays open so you can see what happened
  const html = `<!doctype html><html><body style="font-family:monospace;padding:20px">
    <p id="s">Checking window.opener...</p>
    <script>
      (function() {
        var s = document.getElementById('s');
        if (!window.opener) {
          s.textContent = 'ERROR: window.opener is null — Chrome severed the reference during GitHub redirect.';
          s.style.color = 'red';
          return;
        }
        s.textContent = 'window.opener exists — sending token...';
        window.opener.postMessage(${msg}, "*");
        s.textContent = 'Token sent! You can close this window.';
        s.style.color = 'green';
      })();
    </script>
  </body></html>`;

  return new NextResponse(html, { headers: { "Content-Type": "text/html" } });
}
