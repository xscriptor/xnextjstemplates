import type { Lang } from "@/app/[lang]/dictionaries";

export type Book = {
  title: string;
  year: string;
  role: string;
  description: string;
  tags: string[];
};

export type Excerpt = {
  title: string;
  source: string;
  text: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

export function getContent(lang: Lang) {
  const books: Book[] =
    lang === "en"
      ? [
          {
            title: "The Geometry of Silence",
            year: "2024",
            role: "Novel",
            description:
              "A lyrical story about memory, inheritance, and the quiet violence of omissions.",
            tags: ["Fiction", "Literary", "Family"]
          },
          {
            title: "Notes on the Edge of Light",
            year: "2022",
            role: "Essays",
            description:
              "A collection of short essays on craft, city life, and the ethics of attention.",
            tags: ["Essay", "Craft", "Culture"]
          },
          {
            title: "The Night Index",
            year: "2020",
            role: "Poetry",
            description:
              "Poems as a catalog of nocturnal images: fragile, precise, and luminous.",
            tags: ["Poetry", "Minimal", "Imagery"]
          }
        ]
      : [
          {
            title: "La geometría del silencio",
            year: "2024",
            role: "Novela",
            description:
              "Una historia lírica sobre memoria, herencia y la violencia tranquila de lo que no se dice.",
            tags: ["Ficción", "Literaria", "Familia"]
          },
          {
            title: "Notas al borde de la luz",
            year: "2022",
            role: "Ensayos",
            description:
              "Una colección de ensayos breves sobre oficio, ciudad y la ética de la atención.",
            tags: ["Ensayo", "Oficio", "Cultura"]
          },
          {
            title: "Índice nocturno",
            year: "2020",
            role: "Poesía",
            description:
              "Poemas como un catálogo de imágenes nocturnas: frágiles, precisas, luminosas.",
            tags: ["Poesía", "Minimal", "Imágenes"]
          }
        ];

  const excerpts: Excerpt[] =
    lang === "en"
      ? [
          {
            title: "On Beginnings",
            source: "Essay · Notes on the Edge of Light",
            text:
              "Every beginning is an agreement with uncertainty. The first line is not a door; it is a vow: to stay long enough for meaning to arrive."
          },
          {
            title: "City as Draft",
            source: "Column · 2023",
            text:
              "The city revises itself overnight. Morning is a new paragraph: fresh noise, clean shadows, the same fears rearranged."
          },
          {
            title: "Fragment for a Night Train",
            source: "Poem · The Night Index",
            text:
              "Between stations, the dark keeps its own ledger. I read it by reflection: a face, a window, a moving stitch of light."
          }
        ]
      : [
          {
            title: "Sobre los comienzos",
            source: "Ensayo · Notas al borde de la luz",
            text:
              "Todo comienzo es un pacto con la incertidumbre. La primera línea no es una puerta; es un voto: quedarse el tiempo suficiente para que llegue el sentido."
          },
          {
            title: "La ciudad como borrador",
            source: "Columna · 2023",
            text:
              "La ciudad se corrige a sí misma durante la noche. La mañana es un párrafo nuevo: ruido fresco, sombras limpias, los mismos temores reordenados."
          },
          {
            title: "Fragmento para un tren nocturno",
            source: "Poema · Índice nocturno",
            text:
              "Entre estaciones, la oscuridad lleva su propia contabilidad. La leo por reflejo: un rostro, una ventana, una puntada móvil de luz."
          }
        ];

  const testimonials: Testimonial[] =
    lang === "en"
      ? [
          {
            quote:
              "A voice that can be both intimate and precise. Her pages breathe.",
            name: "Literary Magazine",
            detail: "Interview · 2024"
          },
          {
            quote:
              "A rare balance: craft without rigidity, emotion without excess.",
            name: "Editor",
            detail: "Blurb · 2022"
          },
          {
            quote:
              "A workshop that leaves you with tools — and with courage.",
            name: "Student",
            detail: "Creative writing · 2023"
          }
        ]
      : [
          {
            quote:
              "Una voz que puede ser íntima y precisa a la vez. Sus páginas respiran.",
            name: "Revista literaria",
            detail: "Entrevista · 2024"
          },
          {
            quote:
              "Un equilibrio raro: oficio sin rigidez, emoción sin exceso.",
            name: "Editora / Editor",
            detail: "Reseña · 2022"
          },
          {
            quote:
              "Un taller que te deja herramientas… y también coraje.",
            name: "Estudiante",
            detail: "Escritura creativa · 2023"
          }
        ];

  return { books, excerpts, testimonials };
}

