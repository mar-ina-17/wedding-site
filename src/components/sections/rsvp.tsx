import { useState } from "react";

const RSVP = () => {
  const targetEmail =
    import.meta.env.VITE_FORMSUBMIT_EMAIL || "marina.workplace@gmail.com";
  const formAction = `https://formsubmit.co/ajax/${targetEmail}`; // note /ajax

  const [showSuccess, setShowSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const closeSuccess = () => setShowSuccess(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      // optional: keep these if you want
      formData.set("_subject", "New RSVP from wedding site");
      formData.set("_captcha", "false");

      const res = await fetch(formAction, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) {
        const txt = await res.text().catch(() => "");
        throw new Error(txt || `Request failed: ${res.status}`);
      }

      form.reset();
      setShowSuccess(true);
    } catch (err: any) {
      setError("Неуспешно изпращане. Моля, опитайте отново.");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative w-full bg-secondary" id="rsvp">
      <img
        src="/images/decorations/sunflower3.webp"
        alt=""
        role="presentation"
        loading="lazy"
        decoding="async"
        className="absolute left-1/2 -top-14 -translate-x-1/2 w-[350px] h-[180px] z-10 -scale-y-100"
      />

      <div className="max-w-5xl mx-auto px-10 pb-12 pt-26">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-white">
          RSVP
        </h2>

        <form
          onSubmit={onSubmit}
          className="space-y-6 bg-secondary px-6 max-w-xl mx-auto"
        >
          <input
            type="hidden"
            name="_subject"
            value="New RSVP from wedding site"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />

          <div>
            <label className="block font-medium">
              Име и фамилия <span className="text-destructive">*</span>
            </label>
            <input
              name="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-white p-2"
            />
          </div>

          <div>
            <label className="block font-medium">Телефон</label>
            <input
              type="tel"
              name="phone"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-white p-2"
            />
          </div>

          <div>
            <label className="block font-medium">Допълнителни детайли</label>
            <textarea
              name="details"
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-white p-2"
            />
          </div>

          <div className="flex items-center">
            <input
              id="vegetarian"
              name="vegetarian"
              type="checkbox"
              value="Yes"
              className="h-4 w-4 rounded accent-primary"
            />
            <label htmlFor="vegetarian" className="ml-2">
              Искам вегетарианско меню
            </label>
          </div>

          <div>
            <span className="block font-medium">
              Потвърждавате ли присъствие?{" "}
              <span className="text-destructive">*</span>
            </span>
            <div className="mt-2 space-x-6">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="attendance"
                  value="Yes"
                  required
                  className="h-4 w-4 accent-primary"
                />
                <span className="ml-2">Да</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="attendance"
                  value="No"
                  required
                  className="h-4 w-4 accent-primary"
                />
                <span className="ml-2">Не</span>
              </label>
            </div>
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-md bg-primary px-4 py-2 text-white font-semibold shadow disabled:opacity-60"
          >
            {submitting ? "Изпращане..." : "Изпрати"}
          </button>
        </form>

        {showSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={closeSuccess}
              role="button"
              aria-hidden
            />

            {/* Modal */}
            <div
              className="
        relative z-10 w-full max-w-md
        rounded-2xl p-6 text-center
        shadow-2xl border border-border
        bg-[var(--chart-3)]
      "
            >
              {/* Icon */}
              <div
                className="
          mx-auto mb-4 flex h-14 w-14 items-center justify-center
          rounded-full bg-white/70 shadow-sm
        "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent-foreground)"
                  strokeWidth={2.5}
                  className="h-7 w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2">
                Благодарим!
              </h3>

              <p className="mb-6 text-sm text-foreground/80">
                Вашето потвърждение беше изпратено успешно.
              </p>

              <button
                onClick={closeSuccess}
                className="
          inline-flex w-full items-center justify-center
          rounded-lg bg-primary px-4 py-2.5
          text-primary-foreground font-semibold shadow
          hover:brightness-105
          focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
          transition
        "
              >
                Затвори
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RSVP;
