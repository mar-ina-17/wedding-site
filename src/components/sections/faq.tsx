import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    question: "Кога и къде започва церемонията?",
    answer: (
      <>
        Церемонията ще започне на 22.05.2026г. в 16:00 в храм “Св. Троица”,
        София.{" "}
        <span className="text-destructive font-semibold">
          Молим ви да бъдете там 10-15 минути по-рано
        </span>
        , за да имате време да влезнете преди младоженците и да се настаните.
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2665.5760793071604!2d23.364178799999998!3d42.684714299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85e985705a89%3A0x5cdddac577bf5b5a!2sHram%20%22Sveta%20Troitsa%22!5e1!3m2!1sen!2sbg!4v1757321185606!5m2!1sen!2sbg"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </>
    ),
  },
  {
    question: "Какво да облека?",
    answer: (
      <>
        Няма дрескод – облечете се така, както ви е най-удобно и приятно. Ако
        все пак искате да сте в тон с нашите слънчеви цветове – ето палитрата:
        <ul
          className="flex items-center gap-3 mt-2 "
          role="list"
          aria-label="Color palette"
        >
          <li>
            <button
              className="h-10 w-10 rounded-full bg-[#B8D4E7] border border-black/10 shadow-inner ring-2 ring-white transition transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B8D4E7]"
              aria-label="Light blue #B8D4E7"
              title="#B8D4E7"
            ></button>
          </li>
          <li>
            <button
              className="h-10 w-10 rounded-full bg-[#9EB5CC] border border-black/10 shadow-inner ring-2 ring-white transition transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#9EB5CC]"
              aria-label="Blue #9EB5CC"
              title="#9EB5CC"
            ></button>
          </li>
          <li>
            <button
              className="h-10 w-10 rounded-full bg-[#C9D7C6] border border-black/10 shadow-inner ring-2 ring-white transition transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C9D7C6]"
              aria-label="Pale green #C9D7C6"
              title="#C9D7C6"
            ></button>
          </li>
          <li>
            <button
              className="h-10 w-10 rounded-full bg-[#8E996D] border border-black/10 shadow-inner ring-2 ring-white transition transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8E996D]"
              aria-label="Olive green #8E996D"
              title="#8E996D"
            ></button>
          </li>
          <li>
            <button
              className="h-10 w-10 rounded-full bg-[#EDCD60] border border-black/10 shadow-inner ring-2 ring-white transition transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#EDCD60]"
              aria-label="Golden yellow #EDCD60"
              title="#EDCD60"
            ></button>
          </li>
          <li>
            <button
              className="h-10 w-10 rounded-full bg-[#C68C44] border border-black/10 shadow-inner ring-2 ring-white transition transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C68C44]"
              aria-label="Warm ochre #C68C44"
              title="#C68C44"
            ></button>
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Какъв подарък да купя? Да донеса ли цветя? ",
    answer: (
      <>
        За да не ви затрудняваме в избора на подарък и за да не получим 3
        сервиза за чай с английската кралица, хладилник и бойлер, ще се радваме
        на финансов принос в плик! А вместо цветя, за които уверяваме ви, сме се
        погрижили, изненадайте ни с бутилка любимо вино или любима книга! 🍷📚
      </>
    ),
  },
  {
    question: "Какъв е транспортът?",
    answer: (
      <>
        До храма можете да стигнете с кола, такси или автобус 72. След това
        мястото на събитието - Пасарел Лейк Клуб - е на 20 минути от София с
        кола. На място има паркинг с капацитет от около 20 парко места. За да се
        насладите на празника без притеснения, има опции за Drink&amp;Drive с
        фиксирана цена, както и безпроблемно пътуване с такси от/до избран
        адрес.
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2671.36595612107!2d23.4802121!3d42.5496022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa7f0f29c4ec75%3A0x9633c93788b82bd1!2sPasarel%20Lake%20Club!5e1!3m2!1sen!2sbg!4v1757324272036!5m2!1sen!2sbg"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </>
    ),
  },
  {
    question: "Има ли възможност за настаняване?",
    answer: (
      <>
        Пасарел Лейк Клуб не е хотел, но разполага с 4 двойни стаи за тези от
        вас, които биха желали да пренощуват на място. Ако искате да запазите
        стая, моля свържете се с нас, за да проверим наличността и да ви
        съдействаме с организацията.
      </>
    ),
  },
  {
    question: "Кой се грижи за фотографията и музиката?",
    answer: (
      <>
        За красивите спомени ще се погрижи страхотният ни фотограф 📸 - Влади{" "}
        <a
          href="https://www.instagram.com/vladiy.g?igsh=MXExYnR6eHdoeTM1Zw=="
          className="text-primary underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          @vladiy.g
        </a>
        , за настроението и танците 🎶 – нашия диджей - DJ Явор{" "}
        <a
          href="tel:+359898471690"
          className="text-primary underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          +359 898471690
        </a>
      </>
    ),
  },
];

const FAQ = () => {
  return (
    <section className="w-full bg-accent/90" id="faq">
      <div className="max-w-5xl mx-auto px-10 py-12">
        <h2 className="text-3xl font-extrabold mb-12 text-center">
          Вашите въпроси
        </h2>

        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
