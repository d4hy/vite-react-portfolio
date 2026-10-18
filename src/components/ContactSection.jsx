import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    emailjs.init({
      publicKey: import.meta.env.VITE_PUBLIC_KEY,
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formData);

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Oops! Something went wrong.\n" + (error?.text || JSON.stringify(error)));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
          I am open to software development opportunities across frontend, backend, and full-stack work, using React, Java/Spring Boot, Node.js/Express, and SQL. If you are hiring or have a project in mind, let&apos;s connect.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 text-left">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:davidhoang253@gmail.com" className="text-foreground/70 hover:text-primary transition-colors break-all">
                    davidhoang253@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+12532096172" className="text-foreground/70 hover:text-primary transition-colors">
                    +1 (253) 209-6172
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-foreground/70">Tacoma, WA</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/dvhyhoang/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="David Hoang on LinkedIn"
                  className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  <Linkedin aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/d4hy"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="David Hoang on GitHub"
                  className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  <Github aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border p-8 rounded-lg shadow-xs text-left">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                  onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="you@example.com"
                  onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                  onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                />
              </div>

              <button type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed")}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
