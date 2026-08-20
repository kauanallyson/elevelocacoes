import fs from "node:fs";
import path from "node:path";
import { EQUIPAMENTOS, type Equipamento } from "@/data/equipamentos";

export type EquipamentoComFoto = Equipamento & { temFoto: boolean };

function temFoto(slug: string) {
  return fs.existsSync(
    path.join(process.cwd(), "public", "produtos", `${slug}.webp`),
  );
}

export function equipamentosComFoto(
  equipamentos: Equipamento[] = EQUIPAMENTOS,
): EquipamentoComFoto[] {
  return equipamentos.map((equipamento) => ({
    ...equipamento,
    temFoto: temFoto(equipamento.slug),
  }));
}
