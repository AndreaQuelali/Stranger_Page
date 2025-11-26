import { useState } from "react";

const faqs = [
  {
    question: "¿De qué trata Stranger Things?",
    answer:
      "Stranger Things es una serie ambientada en los años 80 que mezcla misterio, ciencia ficción, terror y aventuras, siguiendo a un grupo de amigos que enfrentan criaturas y fenómenos provenientes del Otro Lado."
  },
  {
    question: "¿En qué año está ambientada la serie?",
    answer:
      "Stranger Things está ambientada principalmente en los años 80, comenzando en 1983 en la ciudad ficticia de Hawkins, Indiana."
  },
  {
    question: "¿Quién creó Stranger Things?",
    answer:
      "La serie fue creada por los Hermanos Duffer (Matt y Ross Duffer)."
  },
  {
    question: "¿Dónde puedo ver la serie?",
    answer:
      "Puedes ver Stranger Things exclusivamente en Netflix."
  },
  {
    question: "¿Habrá más temporadas?",
    answer:
      "Sí. La temporada 5 está confirmada como la última y se estrena el 26 de noviembre de 2025, pero también se están desarrollando proyectos derivados en el mismo universo."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-neutral-900 border border-neutral-700 rounded-xl overflow-hidden"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center px-6 py-4 text-left text-white hover:bg-neutral-800 transition"
          >
            <span className="font-semibold">{faq.question}</span>
            <span className="text-red-500 text-2xl">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>

          <div
            className={`text-neutral-300 transition-all duration-300 ${
              openIndex === index ? "max-h-40 opacity-100 p-6" : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
}
