# elevelocacoes

Marketing and catalog site for Eleve Locações, a construction-equipment rental company in Sobral-CE.

## Language

**WhatsApp CTA**:
A call to action that sends the visitor to a WhatsApp chat pre-filled with a message. Always opens in a new tab and is tracked as a Meta Pixel `whatsapp` event. Implemented by `WhatsAppLink`.
_Avoid_: WhatsApp button, WhatsApp link (when referring to the concept, not the component)

**Equipamento**:
A single piece of rental equipment shown in the catalog (e.g. "Betoneira Monofásica 400L"). Belongs to exactly one **Categoria**.
_Avoid_: Product, item

**Categoria**:
A grouping of equipamentos in the catalog (e.g. "Andaimes e Escoramento"), used for filtering.
_Avoid_: Category (in code — the domain term stays in Portuguese, matching the codebase)
