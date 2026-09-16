/*
 * Lead submission to the WebAppConsulting CRM.
 *
 * Ported from the sibling sites (Foods From The Edge is WebSiteId 31), which all post to the same endpoint and
 * differ only in `WEBSITE_ID`. Keeping the shape identical matters more than
 * tidying it: when the API changes, it changes for every site at once, and a
 * file that reads the same in each is the one that gets updated in each.
 *
 * The reCAPTCHA key here is the one ridessa, smartshelf and nuttybay share.
 * A v3 key only accepts tokens from domains listed against it in the reCAPTCHA
 * admin, so this site's domain has to be added there before this will verify.
 */

const RECAPTCHA_SITE_KEY = "6LcSZSAkAAAAAFxJ_WfOQl4itrBsLPDcVkGGRmtI";

/* Off for now, at the client's instruction.
 *
 * The key below is shared with the sibling sites, and a v3 key only accepts
 * tokens from the domains listed against it in the reCAPTCHA admin —
 * this site's domain is not one of them yet. Turning this on before that is added
 * would fail verification on every submission and reject real enquiries.
 *
 * Flip to true once the domain is registered; nothing else needs to change.
 * Until then the form posts without a token and the endpoint decides. */
const ENABLE_RECAPTCHA = false;

const LEAD_API_URL = "https://webapi.webappconsulting.com.au/api/contactus/save";
const WEBSITE_ID = "31";
const FORM_TYPE = "1";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

let recaptchaPromise: Promise<void> | null = null;

/** Preload reCAPTCHA so its badge is visible as soon as the page loads,
 *  instead of only appearing once a form is submitted. */
export function preloadRecaptcha(): void {
  if (ENABLE_RECAPTCHA) loadRecaptcha().catch(() => {});
}

export function loadRecaptcha(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("reCAPTCHA is only available in the browser."));
  }
  if (window.grecaptcha) return Promise.resolve();
  if (recaptchaPromise) return recaptchaPromise;

  recaptchaPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => {
      recaptchaPromise = null; // allow a retry on the next attempt
      reject(new Error("Could not load reCAPTCHA."));
    };
    document.head.appendChild(script);
  });
  return recaptchaPromise;
}

/** Reject if a promise hasn't settled within ms (so the form never hangs). */
function withTimeout<T>(p: Promise<T>, ms: number, message: string): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const id = setTimeout(() => reject(new Error(message)), ms);
    p.then(
      (v) => {
        clearTimeout(id);
        resolve(v);
      },
      (e) => {
        clearTimeout(id);
        reject(e);
      },
    );
  });
}

/** Resolve a fresh reCAPTCHA v3 token for the given action. */
function getRecaptchaToken(action = "submit"): Promise<string> {
  const token = new Promise<string>((resolve, reject) => {
    const gre = window.grecaptcha;
    if (!gre) {
      reject(new Error("reCAPTCHA is not ready."));
      return;
    }
    // ready()/execute() can in rare cases never settle (partial init) — the
    // timeout guarantees submitLead() rejects instead of hanging the form.
    gre.ready(() => {
      gre.execute(RECAPTCHA_SITE_KEY, { action }).then(resolve).catch(reject);
    });
  });
  return withTimeout(token, 12000, "reCAPTCHA timed out.");
}

export interface LeadData {
  fullName: string;
  email: string;
  phone: string;
  /** Free-text comment — the company, service and message fold into this. */
  comment: string;
}

/**
 * Submit a lead to the WebAppConsulting CRM with a reCAPTCHA token. Throws on
 * failure (load error, token error, or non-2xx response) so the caller can
 * surface an error and offer the visitor another way through.
 */
export async function submitLead(data: LeadData): Promise<void> {
  let token = "";
  if (ENABLE_RECAPTCHA) {
    await loadRecaptcha();
    token = await getRecaptchaToken("submit");
  }

  const payload = {
    FullName: data.fullName,
    Email: data.email,
    Phone: data.phone,
    Comment: data.comment,
    WebSiteId: WEBSITE_ID,
    FormType: FORM_TYPE,
    RecaptchaToken: token,
  };

  const res = await fetch(LEAD_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Failed to submit lead: ${res.statusText}`);
  }
}
