"use client"; // Mark this as a Client Component

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    topic: "",
    subject: "",
    description: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Basic validation for required fields
    if (
      !formData.firstName ||
      !formData.email ||
      !formData.subject ||
      !formData.description
    ) {
      setStatusMessage(
        "Please fill in all required fields: Name, Email, Subject, and Description."
      );
      setIsPopupVisible(true);
      return;
    }

    // Optional: Additional validation for email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatusMessage("Please enter a valid email address.");
      setIsPopupVisible(true);
      return;
    }

    try {
      const response = await fetch(
        "https://u-mail.co/api/pro-send-email/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.firstName,
            surname: formData.lastName,
            email: formData.email,
            topic: formData.topic,
            subject: formData.subject,
            description: formData.description,
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error: ${errorText}`);
      }

      const result = await response.json();

      setStatusMessage("Message sent successfully!");
      setIsPopupVisible(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        topic: "",
        subject: "",
        description: "",
      });
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage("An error occurred while sending the message.");
      setIsPopupVisible(true);
    }
  };

  return (
    <>
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="pb-12 text-center">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
                Contact us
              </h1>
              <div className="mx-auto max-w-3xl">
                <p className="text-xl text-indigo-200/65">
                  Have some questions? Feel free to reach out!
                </p>
              </div>
            </div>
            {/* Contact form */}
            <form className="mx-auto max-w-[640px]" onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div className="flex flex-col gap-x-6 gap-y-4 md:flex-row">
                  <div className="flex-1">
                    <label
                      className="mb-1 block text-sm font-medium text-indigo-200/65"
                      htmlFor="firstName"
                    >
                      Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      className="form-input w-full"
                      placeholder="Your name"
                      value={formData.firstName}
                      onChange={handleChange}
                      autoComplete="given-name"
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      className="mb-1 block text-sm font-medium text-indigo-200/65"
                      htmlFor="lastName"
                    >
                      Surname
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      className="form-input w-full"
                      placeholder="Your surname"
                      value={formData.lastName}
                      onChange={handleChange}
                      autoComplete="family-name"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-x-6 gap-y-4 md:flex-row">
                  <div className="flex-1">
                    <label
                      className="mb-1 block text-sm font-medium text-indigo-200/65"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input w-full"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-x-6 gap-y-4 md:flex-row">
                  <div className="flex-1">
                    <label
                      className="mb-1 block text-sm font-medium text-indigo-200/65"
                      htmlFor="subject"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      className="form-input w-full"
                      placeholder="Let us know how we can help"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="mb-1 block text-sm font-medium text-indigo-200/65"
                    htmlFor="description"
                  >
                    Full description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    className="form-textarea w-full text-gray-200"
                    placeholder="Add message here"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mt-8 flex w-full flex-col justify-between gap-5 md:flex-row md:items-center">
                
                <div>
                  <button
                    type="submit"
                    className="btn group w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
                  >
                    <span className="relative inline-flex items-center">
                      Send
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </button>
                </div>
              </div>
              {/* Popup Notification */}
              {isPopupVisible && (
                <div className="fixed top-4 right-4 z-50 w-96">
                  <div className="flex items-center justify-between bg-indigo-600 text-white px-4 py-3 rounded shadow-lg">
                    <span>{statusMessage}</span>
                    <button
                      onClick={() => setIsPopupVisible(false)}
                      className="text-white focus:outline-none"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
