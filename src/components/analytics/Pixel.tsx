import { CONSENT_CHANGED_EVENT, CONSENT_KEY } from "@/lib/consent";

export default function Pixel() {
	return (
		<script
			id="meta-pixel-init"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: static pixel loader, no user input
			dangerouslySetInnerHTML={{
				__html: `function iniciarMetaPixel() {
  if (window._metaPixelIniciado) return;
  window._metaPixelIniciado = true;

  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod
        ? n.callMethod.apply(n, arguments)
        : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js",
  );
  fbq("init", "1761995821596014");
  fbq("track", "PageView");
}

if (localStorage.getItem("${CONSENT_KEY}") === "granted") {
  iniciarMetaPixel();
}

window.addEventListener("${CONSENT_CHANGED_EVENT}", () => {
  if (localStorage.getItem("${CONSENT_KEY}") === "granted") {
    iniciarMetaPixel();
  }
});
`,
			}}
		/>
	);
}
