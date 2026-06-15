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
      try { var bc = new BroadcastChannel('decap_cms_auth'); bc.postMessage({msg:${msg}}); bc.close(); } catch(e){}
      if (window.opener) window.opener.postMessage(${msg}, "*");
      window.close();
    </script></body></html>`;
    return new NextResponse(html, { headers: { "Content-Type": "text/html" } });
  }

  const msg = JSON.stringify(
    `authorization:github:success:${JSON.stringify({ token, provider: "github" })}`
  );

  const html = `<!doctype html><html><body><script>
    (function() {
      var msg = ${msg};
      // Primary: BroadcastChannel (works even if window.opener is blocked)
      try {
        var bc = new BroadcastChannel('decap_cms_auth');
        bc.postMessage({ msg: msg });
        bc.close();
      } catch(e) {}
      // Fallback: direct postMessage
      if (window.opener) {
        window.opener.postMessage(msg, "*");
      }
      setTimeout(function() { window.close(); }, 500);
    })();
  </script></body></html>`;

  return new NextResponse(html, { headers: { "Content-Type": "text/html" } });
}
