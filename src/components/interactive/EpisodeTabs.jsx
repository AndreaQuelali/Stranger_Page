import { useState } from "react";

const seasons = {
  1: [
    { title: "Capítulo 1: La desaparición de Will Byers", desc: "El joven Will desaparece misteriosamente en Hawkins." },
    { title: "Capítulo 2: La rara de la calle Maples", desc: "Los chicos encuentran a Eleven, una niña con poderes." },
    { title: "Capítulo 3: Holly, Jolly", desc: "Joyce se comunica con su hijo a través de luces." },
    { title: "Capítulo 4: El cuerpo", desc: "Encuentran un cuerpo... pero algo no encaja." },
    {title:  "Capítulo 5: La pulga y el acróbata", desc: "Los chicos intentan rescatar a Will del Otro Lado."},
    { title: "Capítulo 6: El monstruo", desc: "Descubren la existencia del Demogorgon." },
    { title: "Capítulo 7: La bañera", desc: "Eleven usa sus poderes para localizar a Will." },
    { title: "Capítulo 8: El Otro Lado", desc: "Rescatan a Will y enfrentan al Demogorgon." },
  ],
  2: [
    { title: "Capítulo 1: MADMAX", desc: "Una nueva chica llega al pueblo. Y algo más también." },
    { title: "Capítulo 2: Truco o trato", desc: "Will sigue teniendo visiones del Mundo del Revés." },
    { title: "Capítulo 3: El renacuajo", desc: "La infección comienza a expandirse." },
    { title: "Capítulo 4: Will, el Sabio", desc: "Los científicos intentan entender sus visiones." },
    { title: "Capítulo 5: Dig Dug", desc: "Los chicos buscan una forma de detener la amenaza." },
    { title: "Capítulo 6: El espía", desc: "Descubren que Hopper está vivo." },
    { title: "Capítulo 7: La hermana perdida", desc: "Eleven encuentra a su hermana, Kali." },
    { title: "Capítulo 8: El Azotamentes", desc: "Enfrentan al Azotamentes en el Otro Lado" },
    { title: "Capítulo 8: El portal", desc: "Enfrentan a la criatura y cierran el portal." },
  ],
  3: [
    { title: "Capítulo 1: Suzie, ¿me recibes?", desc: "Regresa el verano… y nuevas amenazas." },
    { title: "Capítulo 2: Las ratas del centro comercial", desc: "Algo extraño sucede con los animales del pueblo." },
    { title: "Capítulo 3: La socorrista desaparecida", desc: "Max y Eleven investigan al Flayer." },
    { title: "Capítulo 4: La prueba del sauna", desc: "Descubren a un nuevo poseído." },
    { title: "Capítulo 5: Los desollados", desc: "El Flayer ataca a Billy y lo controla." },
    { title: "Capítulo 6: E Pluribus Unum", desc: "El grupo se une para enfrentar la amenaza." },
    { title: "Capítulo 7: La mordedura", desc: "Hopper y Joyce buscan ayuda en Rusia." },
    { title: "Capítulo 9: La batalla de Starcourt", desc: "La batalla final contra el Flayer y sus secuaces." },
  

  ],
  4: [
    { title: "Capítulo 1: El Club Fuego Infernal", desc: "Un nuevo asesino sobrenatural aparece: Vecna." },
    { title: "Capítulo 2: Maldición de Vecna", desc: "La investigación apunta a un nuevo terror." },
    { title: "Capítulo 3: El monstruo y la superheroína", desc: "Eleven enfrenta su pasado." },
    { title: "Capítulo 4: Querido Billy", desc: "Max corre contra el tiempo para sobrevivir." },
    { title: "Capítulo 5: El Proyecto Nina", desc: "Descubren más sobre los experimentos de Hawkins.",},
    { title: "Capítulo 6: El descenso", desc: "El grupo se adentra en el Mundo del Revés." },
    { title: "Capítulo 7: La masacre del Laboratorio Hawkins", desc: "Revelan la verdad detrás de los experimentos." },
    { title: "Capítulo 8: Papá", desc: "Once enfrenta a los militares y Hopper enfrenta su destino en Rusia." },
    { title: "Capítulo 9: El viaje astral", desc: "El enfrentamiento final con Vecna." },
  ],
};

export default function EpisodeTabs() {
  const [selected, setSelected] = useState(1);

  return (
    <div className="text-white">
      <div className="flex gap-4 justify-center mb-8">
        {[1, 2, 3, 4].map((season) => (
          <button
            key={season}
            onClick={() => setSelected(season)}
            className={`px-4 py-2 rounded-lg border transition
              ${
                selected === season
                  ? "border-red-500 text-red-500"
                  : "border-neutral-600 hover:border-red-500"
              }`}
          >
            Temporada {season}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 transition-opacity duration-300">
        {seasons[selected].map((ep, index) => (
          <div
            key={index}
            className="p-5 rounded-lg bg-neutral-900 border border-neutral-700 hover:border-red-500 transition"
          >
            <h3 className="text-lg font-semibold text-red-500 mb-2">{ep.title}</h3>
            <p className="text-neutral-300">{ep.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
