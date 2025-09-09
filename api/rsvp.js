const ENDPOINT = "https://api.web3forms.com/submit";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const { fullName, email, attendance, phone, details, subject, botcheck } =
      req.body || {};

    // Honeypot
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

    const r = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await r.json().catch(() => ({}));
    if (!r.ok || data?.success === false) {
      return res
        .status(502)
        .json({ ok: false, error: data?.message || "Upstream error" });
    }

    return res.status(200).json({ ok: true });
  } catch {
    return res.status(500).json({ ok: false, error: "Server error" });
  }
}
