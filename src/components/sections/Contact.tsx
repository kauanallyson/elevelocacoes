import type { ComponentType } from "react";
import MapPinIcon from "@/components/icons/MapPinIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import MailIcon from "@/components/icons/MailIcon";
import ClockIcon from "@/components/icons/ClockIcon";
import Link from "@/components/ui/Link";

const ENDERECO =
  "Av. Isabela Moreira Gomes, 91 - Loja 2 - Das Nações, Sobral - CE, 62053-820";
const TELEFONE = [{ numero: "(88) 99998-3050", tel: "+5588999983050" }];
const INSTAGRAM = "https://www.instagram.com/elevelocacoes/";

type ContatoItem =
  | { label: string; type: "text"; value: string; Icon: ComponentType }
  | { label: string; type: "phones"; value: typeof TELEFONE; Icon: ComponentType }
  | {
      label: string;
      type: "link";
      value: { href: string; text: string };
      Icon: ComponentType;
    };

const contatoItems: ContatoItem[] = [
  { label: "Endereço", type: "text", value: ENDERECO, Icon: MapPinIcon },
  { label: "Whatsapp", type: "phones", value: TELEFONE, Icon: WhatsAppIcon },
  {
    label: "Instagram",
    type: "link",
    value: { href: INSTAGRAM, text: "@elevelocacoes" },
    Icon: InstagramIcon,
  },
  {
    label: "E-mail",
    type: "link",
    value: {
      href: "mailto:elevelocacoes@gmail.com",
      text: "elevelocacoes@gmail.com",
    },
    Icon: MailIcon,
  },
  {
    label: "Horários",
    type: "text",
    value: "Segunda a sexta, 7h30 às 12h e 13h30 às 17h",
    Icon: ClockIcon,
  },
];

export default function Contact() {
  return (
    <section id="contato" className="bg-graphite-900 py-8 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Contato
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-white sm:text-4xl">
            Fale com um de nossos atendentes
          </h2>

          <dl className="mt-8 space-y-6 text-sm">
            {contatoItems.map(({ label, type, value, Icon }) => (
              <div className="flex gap-3" key={label}>
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-graphite-700 text-accent">
                  <Icon />
                </span>
                <div>
                  <dt className="font-mono uppercase tracking-wide text-graphite-300">
                    {label}
                  </dt>
                  {type === "text" && <dd className="mt-1 text-graphite-100">{value}</dd>}
                  {type === "link" && (
                    <dd className="mt-1">
                      <Link href={value.href}>{value.text}</Link>
                    </dd>
                  )}
                  {type === "phones" && (
                    <dd className="mt-1 flex flex-col gap-1">
                      {value.map((telefone) => (
                        <Link href={`tel:${telefone.tel}`} key={telefone.tel}>
                          {telefone.numero}
                        </Link>
                      ))}
                    </dd>
                  )}
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="aspect-4/3 max-h-80 overflow-hidden rounded-md border border-graphite-700 lg:max-h-none">
          <iframe
            title="Localização da Eleve Locações no Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4909.590913257385!2d-40.32587682414844!3d-3.680347142931439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7eac745db806fab%3A0x4d7a2865a9fc0836!2zRWxldmUgTG9jYcOnw7VlcyBlIFNlcnZpw6dvcyB8IFNvYnJhbA!5e1!3m2!1spt-BR!2sbr!4v1785884243830!5m2!1spt-BR!2sbr"
            className="block h-full w-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}
