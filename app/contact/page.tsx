"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Your custom Input component
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
      <div className="min-h-screen">
        {/* Contact Form Section */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto text-center mb-16"
            >
              <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
              <p className="text-xl text-muted-foreground">
                Let's discuss how we can enhance your workforce with AI
              </p>
            </motion.div>

            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="max-w-2xl mx-auto"
            >
              <form className="space-y-6">
                {/* Name Field */}
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      required
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                      type="text"
                      id="subject"
                      placeholder="Subject"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                      id="message"
                      placeholder="Your Message"
                      rows={6}
                      required
                      className="resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" size="lg" className="flex items-center">
                  Send Message <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Location",
                  content: "123 Innovation Drive\nTech City, TC 12345",
                },
                {
                  title: "Email",
                  content: "contact@makeithappen.ai\nsupport@makeithappen.ai",
                },
                {
                  title: "Phone",
                  content: "+1 (555) 123-4567\nMon-Fri 9AM-6PM EST",
                },
              ].map((info, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="text-center"
                  >
                    <h3 className="text-xl font-semibold mb-4">{info.title}</h3>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {info.content}
                    </p>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
  );
}
