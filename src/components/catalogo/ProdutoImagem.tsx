"use client";

import Image from "next/image";
import { useState } from "react";
import WrenchIcon from "@/components/icons/WrenchIcon";

type Props = {
	src: string;
	alt: string;
	loading: "eager" | "lazy";
};

export default function ProdutoImagem({ src, alt, loading }: Props) {
	const [carregada, setCarregada] = useState(false);

	return (
		<>
			{!carregada ? (
				<div className="absolute inset-0 flex items-center justify-center">
					<WrenchIcon />
				</div>
			) : null}
			<Image
				src={src}
				alt={alt}
				fill
				loading={loading}
				className="h-full w-full object-cover"
				onLoad={() => setCarregada(true)}
			/>
		</>
	);
}
