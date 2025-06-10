import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect, useRef } from "react";
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
      publicKey: import.meta.env.VITE_PUBLIC_KEY, // double check this value is correct
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    /* A Promise is a special JavaScript object used to handle asynchronous operations which sendForm returns.
     * Both then and and async are used to handle promises.
     * .then is used for chaining while async makes it look synchronous.
     */
    try {
      await emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formData);

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Oops! Something went wrong.\n" + (err?.text || JSON.stringify(err)));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-foreground mb-12 max-w-2xl mx-auto">I’m actively seeking new roles where I can contribute my technical skills and creativity. If you’re hiring or have a project in mind, let’s connect and explore how I can help bring your ideas to life..</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a href="mailto:davidhoang253@gmail.com" className="text-foreground hover:text-primary transition-colors">
                    davidhoang253@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a href="tel:+12532096172" className="text-muted-foreground hover:text-primary transition-colors">
                    +1 (253) 209-6172
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">Tacoma, WA US</a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/dvhyhoang/" target="_blank">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form  className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {" "}
                  Your Name
                </label>
                <input type="text" id="name" name="name" required value={formData.name} className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="David Hoang..." onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {" "}
                  Your Email
                </label>
                <input type="email" id="email" name="email" required value={formData.email} className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="john@gmail.com" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {" "}
                  Your Message
                </label>
                <textarea id="message" name="message" required value={formData.message} className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Hello, I'd like to talk about..." onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
              </div>

              <button type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
