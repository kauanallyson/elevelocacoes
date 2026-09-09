import Script from "next/script";

export function Gtag() {
	return (
		<>
			<Script
				src="https://www.googletagmanager.com/gtag/js?id=AW-18384450133"
				strategy="afterInteractive"
			/>
			<Script
				id="gtag-init"
				strategy="afterInteractive"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: required for gtag
				dangerouslySetInnerHTML={{
					__html: `	
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
                            
							gtag('config', 'AW-18384450133');
						`,
				}}
			/>
		</>
	);
}
