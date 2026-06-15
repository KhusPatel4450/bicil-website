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

  const successMsg = `authorization:github:success:${JSON.stringify({ token, provider: "github" })}`;

  // Decap CMS uses a two-step handshake:
  // 1. Popup sends "authorizing:github" to opener
  // 2. Main window's handshakeCallback relays it back to popup
  // 3. Popup receives the relay, then sends the success message
  // Skipping step 1 causes the handshake listener to ignore the success message.
  const html = `<!doctype html><html><body><script>
    (function() {
      var successMsg = ${JSON.stringify(successMsg)};
      var provider = "github";
      function receiveMessage(e) {
        if (e.data === "authorizing:" + provider) {
          window.removeEventListener("message", receiveMessage, false);
          window.opener.postMessage(successMsg, e.origin);
          setTimeout(window.close, 1000);
        }
      }
      if (window.opener) {
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:" + provider, "*");
      }
    })();
  </script></body></html>`;

  return new NextResponse(html, { headers: { "Content-Type": "text/html" } });
}
