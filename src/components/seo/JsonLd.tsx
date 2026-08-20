const jsonLd = {
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	name: "Eleve Locações de Equipamentos",
	image: "https://elevelocacoes.com.br/logo-eleve.png",
	telephone: "+5588999983050",
	email: "elevelocacoes@gmail.com",
	address: {
		"@type": "PostalAddress",
		streetAddress:
			"Rua Dr. Ronaldo Ponte Dias, 1279, Bairro Antônio Carlos Belchior",
		addressLocality: "Sobral",
		addressRegion: "CE",
		addressCountry: "BR",
	},
	areaServed: ["Sobral", "Preá"],
	openingHoursSpecification: {
		"@type": "OpeningHoursSpecification",
		dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
		opens: "07:30",
		closes: "17:00",
	},
	sameAs: ["https://www.instagram.com/elevelocacoes/"],
};

export default function JsonLd() {
	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: static, hard-coded structured data — no user input
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
}
