export default function GoogleTag() {
	return (
		<>
			<script
				async
				src="https://www.googletagmanager.com/gtag/js?id=AW-18384450133"
			/>
			<script
				// biome-ignore lint/security/noDangerouslySetInnerHtml: static gtag config, no user input
				dangerouslySetInnerHTML={{
					__html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18384450133');`,
				}}
			/>
		</>
	);
}
