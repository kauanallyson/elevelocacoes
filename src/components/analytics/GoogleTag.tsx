import Script from "next/script";

export default function GoogleTag() {
	return (
		<>
			<Script
				strategy="beforeInteractive"
				async
				src="https://www.googletagmanager.com/gtag/js?id=AW-18384450133"
			/>
			<Script id="google-tag-init" strategy="beforeInteractive">
				{`window.dataLayer = window.dataLayer || [];
				function gtag() { dataLayer.push(arguments); }
				gtag("js", new Date());
				gtag("config", "AW-18384450133");
				`}
			</Script>
		</>
	);
}
