import dec1 from "./../../assets/decorations/sunflower3.png";

const RSVP = () => {
  return (
    <section className="relative w-full bg-secondary" id="rsvp">
      <img
        src={dec1}
        alt="decoration element"
        className="absolute left-1/2 -top-14 -translate-x-1/2 w-[350px] h-[180px] z-10 -scale-y-100"
      />
      <div className="max-w-5xl mx-auto px-10 pb-12 pt-26">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-white">
          RSVP
        </h2>

        <div className="mb-6 rounded-lg border-l-4 border-destructive bg-primary/70 p-4 shadow ">
          <p>
            Моля, потвърдете присъствието си до{" "}
            <span className="font-bold text-destructive">30.04.2026 г.</span> –
            чрез тази форма или като се свържете с нас по предпочитания от вас
            начин.
          </p>
        </div>

        <form
          action="https://formsubmit.co/your@email.com"
          method="POST"
          className="space-y-6 bg-secondary px-6 max-w-xl mx-auto"
        >
          <div>
            <label className="block font-medium">
              Пълно име <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-white p-2"
            />
          </div>

          <div>
            <label className="block font-medium ">
              Имейл <span className="text-destructive">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-white p-2"
            />
          </div>

          <div>
            <label className="block font-medium">Телефон</label>
            <input
              type="tel"
              name="phone"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-white p-2"
            />
          </div>

          <div>
            <label className="block font-medium">Допълнителни детайли</label>
            <textarea
              name="details"
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-white p-2"
            />
          </div>

          <div className="flex items-center">
            <input
              id="vegetarian"
              name="vegetarian"
              type="checkbox"
              className="h-4 w-4 rounded accent-primary focus:ring-primary"
            />
            <label htmlFor="vegetarian" className="ml-2 block">
              Искам вегетарианско меню
            </label>
          </div>

          <div>
            <span className="block font-medium">
              Потвърждавате ли присъствие?
              <span className="text-destructive">*</span>
            </span>
            <div className="mt-2 space-x-6">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="attendance"
                  value="yes"
                  required
                  className="h-4 w-4 accent-primary focus:ring-primary"
                />
                <span className="ml-2">Да</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="attendance"
                  value="no"
                  required
                  className="h-4 w-4 accent-primary focus:ring-primary"
                />
                <span className="ml-2">Не</span>
              </label>
            </div>
          </div>

          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://yourdomain.com/thanks"
          />

          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-primary px-4 py-2 text-white font-semibold shadow hover:bg-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:cursor-pointer"
            >
              Изпрати
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RSVP;
