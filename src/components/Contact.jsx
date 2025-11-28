import { useState, useRef } from "react"
import { useEffect } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { toast } from "./ui/use-toast"
import { useTheme } from "./theme-provider"
import emailjs from "@emailjs/browser"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { theme } = useTheme()
  const formRef = useRef();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values) {
    setIsSubmitting(true)
    
    try {
      // Send email using EmailJS
      const response = await emailjs.sendForm(
        "service_qz4k4dj", // Replace with your EmailJS service ID
        "template_eqqwafd", // Replace with your EmailJS template ID
        formRef.current,
        "euR6k35JV2W9ALU3h" // Replace with your EmailJS public key
      );

      if (response.status === 200) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        })
        form.reset()
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      toast({
        title: "Message failed to send",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top on page load or refresh
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-md">
        <motion.h2
          className="text-4xl font-bold mb-4 mt-5 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h2>
        <motion.div
          className={`p-8 rounded-2xl shadow-lg border ${
            theme === "dark" ? "bg-zinc-800 border-zinc-900" : "bg-white border-zinc-300"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Form {...form}>
            <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="John Doe" 
                        className={`${
                          theme === "dark" 
                            ? "bg-zinc-900 text-gray-100 border-zinc-600 focus:border-yellow-500 focus:ring-yellow-500" 
                            : "bg-gray-50 text-gray-900 border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                        }`}
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="john@example.com" 
                        className={`${
                          theme === "dark" 
                            ? "bg-zinc-900 text-zinc-100 border-gray-600 focus:border-yellow-500 focus:ring-yellow-500" 
                            : "bg-gray-50 text-gray-900 border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                        }`}
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your project..." 
                        className={`min-h-[120px] ${
                          theme === "dark" 
                            ? "bg-zinc-900 text-zinc-100 border-gray-600" 
                            : "bg-gray-50 text-gray-900 border-gray-300"
                        }`}
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className={`w-full transition-colors ${
                  theme === "dark"
                    ? "bg-yellow-500 hover:bg-yellow-600 text-gray-900"
                    : "bg-yellow-500 hover:bg-yellow-600 text-white"
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  )
}