import dec1 from "@/assets/decorations/sunflower2.png";
import icon1 from "@/assets/icons/icon1.png";
import icon2 from "@/assets/icons/icon2.png";
import icon3 from "@/assets/icons/icon3.png";

const scheduleItems = [
  {
    icon: icon1,
    title: "Църковен ритуал",
    hour: "15:30",
    link: "https://maps.app.goo.gl/WBGhY7CWvutVvQH67",
    text: "Храм “Св.Троица”, ж.к. Гео Милев,  ул.Манастирска 45, гр.София",
  },
  {
    icon: icon2,
    title: "Коктейл и изнесен ритуал",
    hour: "17:30",
    link: "https://maps.app.goo.gl/7vgpc4XUfxPWQZqG7",
    text: "Пасарел Лейк Клуб",
  },
  {
    icon: icon3,
    title: "Празнична вечеря",
    hour: "19:30",
    link: "https://maps.app.goo.gl/7vgpc4XUfxPWQZqG7",
    text: "Пасарел Лейк Клуб",
  },
];

const Schedule = () => {
  return (
    <section className="w-full bg-accent relative" id="schedule">
      <img
        src={dec1}
        alt="decoration element"
        className="absolute -right-4 -top-14 w-[230px] h-[200px] -scale-y-100 "
      />
      <div className="max-w-5xl mx-auto px-10 py-12">
        <h2 className="text-3xl font-extrabold text-white mb-4 text-center">
          Програма
        </h2>
        <h5 className="font-secondary text-center mb-8 text-primary">
          22.05.2026
        </h5>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scheduleItems.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[100px_1fr] items-center gap-4"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-[100px] h-[100px] object-contain justify-self-center"
              />
              <div>
                <h3 className="text-2xl font-bold text-primary">{item.hour}</h3>
                <h4 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h4>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 underline hover:text-black"
                >
                  {item.text}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
