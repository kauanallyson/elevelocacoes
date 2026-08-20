import type { Metadata } from "next";
import { Big_Shoulders, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import GoogleTag from "@/components/analytics/GoogleTag";
import Pixel from "@/components/analytics/Pixel";
import PixelEvents from "@/components/analytics/PixelEvents";
import CookieConsent from "@/components/cookies/CookieConsent";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";

const bigShoulders = Big_Shoulders({
	subsets: ["latin"],
	weight: ["700", "800"],
	variable: "--font-big-shoulders",
});

const plexSans = IBM_Plex_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-plex-sans",
});

const plexMono = IBM_Plex_Mono({
	subsets: ["latin"],
	weight: ["400", "500", "600"],
	variable: "--font-plex-mono",
});

export const metadata: Metadata = {
	...buildMetadata(),
	generator: "Next.js",
	icons: {
		icon: [
			{ url: "/favicon.svg", type: "image/svg+xml" },
			{ url: "/favicon.ico" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
		],
		apple: "/favicon-48x48.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang="pt-BR"
			data-scroll-behavior="smooth"
			className={`${bigShoulders.variable} ${plexSans.variable} ${plexMono.variable}`}
		>
			<head>
				<GoogleTag />
				<Pixel />
				<JsonLd />
			</head>
			<body className="font-sans scroll-smooth">
				{children}
				<PixelEvents />
				<CookieConsent />
			</body>
		</html>
	);
}
