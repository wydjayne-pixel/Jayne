import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { SiCredly } from "react-icons/si";

const CONTACT_EMAIL = "louiezjayneljulian@gmail.com";
const WEB3FORMS_ACCESS_KEY = "0076688d-8eee-4bb0-8d9a-6883e500e244";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        signal: controller.signal,
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: "Louiez Jayne Portfolio",
          subject: `Portfolio Contact: ${formData.subject}`,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      clearTimeout(timeoutId);

      const result = await response.json();

      if (!response.ok || result.success === false) {
        throw new Error(
          result.message || "Your message could not be sent. Please try again.",
        );
      }

      setStatus({
        type: "success",
        message: "Thank you for sending a message!",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      if (error.name === "AbortError") {
        setStatus({
          type: "error",
          message: "The request timed out. Please try again.",
        });
      } else {
        console.error("Contact form error:", error);
        setStatus({
          type: "error",
          message:
            error.message ||
            "Something went wrong. Please email me directly instead.",
        });
      }
    } finally {
      clearTimeout(timeoutId);
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/5 bg-[#1a1a1a] px-5 py-4 text-sm text-white placeholder-[#777] outline-none transition duration-200 focus:border-[#5b78ff]/50 disabled:cursor-not-allowed disabled:opacity-60";

  const contactItems = [
    {
      icon: Mail,
      label: "Email Me",
      lines: [{ text: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` }],
    },
    {
      icon: Phone,
      label: "Call Me",
      lines: [{ text: "09948952481", href: "tel:09948952481" }],
    },
    {
      icon: MapPin,
      label: "Location",
      lines: [{ text: "Malabon City, Metro Manila" }, { text: "Philippines" }],
    },
  ];

  const socialLinks = [
    {
      label: "Credly",
      href: "https://www.credly.com/users/louiez-jayne-julian",
      icon: <SiCredly size={23} />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/louiez-jayne-julian-089252306",
      icon: <FaLinkedin size={23} />,
    },
    {
      label: "Instagram",
      href: "https://instagram.com/lowestjayne",
      icon: <FaInstagram size={23} />,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/louiezjayne",
      icon: <FaFacebook size={23} />,
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden font-sans text-white selection:bg-blue-500/30">
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 pb-8 pt-6 sm:px-8 lg:px-12">
        <div className="page-transition grid grid-cols-1 items-start gap-8 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">
          {/* Left Column - Contact Information */}
          <aside className="flex flex-col gap-8">
            {/* Contact Info */}
            <section>
              <h2 className="mb-6 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#e7e7e7]">
                Contact Info
              </h2>

              <div className="flex flex-col gap-6">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label} className="flex items-center gap-5">
                      <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-[15px] border border-white/[0.025] bg-gradient-to-br from-[#1b1b1b] to-[#141414]">
                        <Icon
                          size={21}
                          strokeWidth={1.5}
                          className="text-[#ccc]"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#888]">
                          {item.label}
                        </p>

                        <div className="flex flex-col gap-0.5">
                          {item.lines.map((line, index) =>
                            line.href ? (
                              <a
                                key={index}
                                href={line.href}
                                className="break-words text-[13px] font-medium leading-[1.5] text-white transition hover:text-[#5b78ff]"
                              >
                                {line.text}
                              </a>
                            ) : (
                              <p
                                key={index}
                                className="text-[13px] font-medium leading-[1.5] text-white"
                              >
                                {line.text}
                              </p>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Social Info */}
            <section>
              <h2 className="mb-6 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#e7e7e7]">
                Social Info
              </h2>

              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-[54px] w-[54px] items-center justify-center rounded-full border border-white/[0.025] bg-gradient-to-br from-[#1b1b1b] to-[#141414] text-[#ccc] transition duration-300 hover:scale-105 hover:border-white/10 hover:bg-[#252525] hover:text-white"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </section>
          </aside>

          {/* Right Column - Contact Form */}
          <section className="relative min-w-0 overflow-hidden rounded-[25px] border border-white/[0.025] bg-gradient-to-br from-[#1b1b1b] to-[#141414] p-6 sm:p-10">
            {/* Decorative Line and Sparkle */}
            <svg
              className="pointer-events-none absolute right-8 top-0 h-[90px] w-8 text-[#777] sm:right-10 sm:h-[90px]"
              viewBox="0 0 32 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <line
                x1="16"
                y1="0"
                x2="16"
                y2="65"
                stroke="currentColor"
                strokeWidth="1.2"
              />

              <path
                d="M16 65C16 73 8 81 0 81C8 81 16 89 16 97C16 89 24 81 32 81C24 81 16 73 16 65Z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinejoin="round"
                transform="translate(0 -8)"
              />
            </svg>

            {/* Heading */}
            <h1 className="relative z-10 mb-8 mt-4 pr-5 text-3xl font-bold tracking-[-1px] sm:text-[40px] sm:tracking-[-1.5px]">
              Let&apos;s work <span className="text-[#5b78ff]">together.</span>
            </h1>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                autoComplete="name"
                required
                maxLength={100}
                placeholder="Name *"
                aria-label="Name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                className={inputClass}
              />

              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                maxLength={254}
                placeholder="Email *"
                aria-label="Email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className={inputClass}
              />

              <input
                type="text"
                name="subject"
                required
                maxLength={150}
                placeholder="Your Subject *"
                aria-label="Subject"
                value={formData.subject}
                onChange={handleChange}
                disabled={isSubmitting}
                className={inputClass}
              />

              <textarea
                name="message"
                required
                maxLength={5000}
                placeholder="Your Message *"
                aria-label="Message"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                rows={5}
                className={`${inputClass} min-h-[140px] resize-y`}
              />

              {/* Submission Feedback */}
              {status.message && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`rounded-xl border px-4 py-3 text-[13px] leading-relaxed ${
                    status.type === "success"
                      ? "border-green-500/20 bg-green-500/10 text-green-400"
                      : "border-red-500/20 bg-red-500/10 text-red-400"
                  }`}
                >
                  {status.message}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 flex min-h-[50px] w-full items-center justify-center rounded-xl border border-white/[0.025] bg-[#222] px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-[#5b78ff]/50 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending Message..." : "Send Message"}
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
