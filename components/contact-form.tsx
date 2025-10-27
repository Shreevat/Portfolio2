"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Form submission logic eta
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="firstName" className="text-sm font-medium">
            First Name*
          </Label>
          <Input
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            className="mt-2"
            required
          />
        </div>
        <div>
          <Label htmlFor="lastName" className="text-sm font-medium">
            Last Name*
          </Label>
          <Input
            id="lastName"
            type="text"
            placeholder="Enter your last name"
            className="mt-2"
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email" className="text-sm font-medium">
          Email*
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="mt-2"
          required
        />
      </div>

      <div>
        <Label htmlFor="subject" className="text-sm font-medium">
          Subject*
        </Label>
        <Input
          id="subject"
          type="text"
          placeholder="How can we help?"
          className="mt-2"
          required
        />
      </div>

      <div>
        <Label htmlFor="message" className="text-sm font-medium">
          Message*
        </Label>
        <Textarea
          id="message"
          placeholder="Enter your message"
          rows={5}
          className="mt-2"
          required
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Sending..." : "Send Inquiry"}
      </Button>
    </form>
  );
}
