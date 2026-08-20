import type { MetadataRoute } from "next";
import { EQUIPAMENTOS } from "@/data/equipamentos";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{ url: `${SITE_URL}/` },
		{ url: `${SITE_URL}/catalogo` },
		...EQUIPAMENTOS.map((equipamento) => ({
			url: `${SITE_URL}/catalogo/${equipamento.slug}`,
		})),
	];
}
