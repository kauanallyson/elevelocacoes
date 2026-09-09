"use client";

import { useEffect } from "react";
import { track } from "@/lib/tracking";

export default function HomeViewConversion() {
	useEffect(() => {
		track("home_viewed");
	}, []);

	return null;
}
