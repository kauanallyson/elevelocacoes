import { describe, expect, test } from "bun:test";
import type { Equipamento } from "@/data/equipamentos";
import {
	filtrarEquipamentos,
	isCategoriaId,
	toLowercaseWithoutAccent,
} from "./catalogo";

describe("toLowercaseWithoutAccent", () => {
	test("lowercases and strips accents", () => {
		expect(toLowercaseWithoutAccent("Andaime Metálico")).toBe(
			"andaime metalico",
		);
	});

	test("leaves already-plain text untouched", () => {
		expect(toLowercaseWithoutAccent("betoneira")).toBe("betoneira");
	});
});

describe("isCategoriaId", () => {
	test("accepts a known categoria id", () => {
		expect(isCategoriaId("energia")).toBe(true);
	});

	test("rejects an unknown value", () => {
		expect(isCategoriaId("inexistente")).toBe(false);
	});

	test("rejects null", () => {
		expect(isCategoriaId(null)).toBe(false);
	});
});

describe("filtrarEquipamentos", () => {
	const equipamentos: Equipamento[] = [
		{
			slug: "andaime-torre",
			nome: "Andaime Torre",
			categoria: "andaimes-escoramento",
			descricao: ["a", "b"],
			imagem: "/andaime.png",
		},
		{
			slug: "betoneira-400l",
			nome: "Betoneira 400L",
			categoria: "concreto",
			descricao: ["a", "b"],
			imagem: "/betoneira.png",
		},
	];

	test("returns every equipamento when there is no filter", () => {
		expect(filtrarEquipamentos(equipamentos, "", "todos")).toEqual(
			equipamentos,
		);
	});

	test("filters by categoria", () => {
		expect(filtrarEquipamentos(equipamentos, "", "concreto")).toEqual([
			equipamentos[1],
		]);
	});

	test("filters by busca, ignoring case and accents", () => {
		expect(filtrarEquipamentos(equipamentos, "ANDAIME", "todos")).toEqual([
			equipamentos[0],
		]);
	});

	test("combines busca and categoria", () => {
		expect(
			filtrarEquipamentos(equipamentos, "betoneira", "andaimes-escoramento"),
		).toEqual([]);
	});
});
