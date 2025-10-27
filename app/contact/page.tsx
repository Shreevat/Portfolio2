/* eslint-disable react/no-unescaped-entities */
import { Mail, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import ContactForm from "@/components/contact-form";
import { socialLinks } from "@/lib/constants";

export const metadata = {
  title: "Contact",
  description: "Get in touch with me",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen py-12 md:py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground">Get in Touch</h1>
          <p className="text-muted-foreground mt-2">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="p-6">
            <ContactForm />
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="mb-4 text-xl font-semibold text-foreground">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href="mailto:info@example.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a
                      href="tel:+1234567890"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-6">
              <h3 className="mb-4 text-xl font-semibold text-foreground">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href, name }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
