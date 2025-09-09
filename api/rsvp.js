const ENDPOINT = "https://api.web3forms.com/submit";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  if (!process.env.WEB3FORMS_ACCESS_KEY) {
    return res
      .status(500)
      .json({ ok: false, error: "Missing WEB3FORMS_ACCESS_KEY" });
  }

  try {
    let body = req.body;
    if (!body) {
      const chunks = [];
      for await (const chunk of req) chunks.push(chunk);
      const raw = Buffer.concat(chunks).toString("utf8");
      const ct = (req.headers["content-type"] || "").toLowerCase();
      if (ct.includes("application/json")) {
        try {
          body = JSON.parse(raw || "{}");
        } catch {
          body = {};
        }
      } else if (ct.includes("application/x-www-form-urlencoded")) {
        body = Object.fromEntries(new URLSearchParams(raw));
      } else {
        body = {};
      }
    }

    const { fullName, email, attendance, phone, details, subject, botcheck } =
      body;

    // Honeypot: if bots fill it, pretend success
    if (botcheck) return res.status(200).json({ ok: true });

    if (!fullName || !email || !attendance) {
      return res
        .status(400)
        .json({ ok: false, error: "Missing required fields" });
    }

    const payload = {
      access_key: process.env.WEB3FORMS_ACCESS_KEY, // stays secret on server
      subject: subject || "New RSVP from wedding site",
      replyto: "email",
      fullName,
      email,
      attendance,
      phone,
      details,
    };

    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), 10000);

    const r = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    }).finally(() => clearTimeout(t));

    const data = await r.json().catch(() => ({}));
    if (!r.ok || data?.success === false) {
      return res
        .status(502)
        .json({ ok: false, error: data?.message || "Upstream error" });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res
      .status(500)
      .json({
        ok: false,
        error: e?.name === "AbortError" ? "Timeout" : "Server error",
      });
  }
}
