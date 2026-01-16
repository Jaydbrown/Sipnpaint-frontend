import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { contactFormSchema, ContactFormData } from '@/lib/schemas';
import { submitContactForm } from '@/lib/api';
import Button from '@/components/ui/Button';

const ContactPage = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const mutation = useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => {
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  const contactOptions = [
    {
      title: 'Call Us',
      description: 'Speak directly with our team during business hours (Mon-Sat, 9AM-6PM)',
      link: 'tel:+2347089403978',
      linkText: '+234 708 940 3978',
    },
    {
      title: 'Email Us',
      description: 'Send us a message and we\'ll respond within 24 hours',
      link: 'mailto:hello@sipnpaint.com',
      linkText: 'hello@sipnpaint.com',
    },
    {
      title: 'WhatsApp',
      description: 'Quick questions? Chat with us on WhatsApp',
      link: 'https://wa.me/2347089403978',
      linkText: 'Message on WhatsApp',
    },
    {
      title: 'Visit Us',
      description: 'Stop by any of our Lagos or Warri locations',
      link: '#locations',
      linkText: 'View Locations',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="min-h-[70vh] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6 lg:px-16 py-24 bg-gradient-to-br from-lavender-100/40 to-paper-warm/60">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-coral text-sm font-semibold tracking-[3px] uppercase mb-6 pb-2 border-b-2 border-coral inline-block">
            Get In Touch
          </div>
          <h1 className="text-5xl lg:text-6xl font-light text-purple-800 mb-6 leading-tight">
            Let's Create<br />
            <span className="font-semibold text-coral italic">Something Together</span>
          </h1>
          <p className="text-xl text-text-main leading-relaxed max-w-xl">
            Have questions? Want to book a session? Ready to support our Girl Child Initiative? We'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px]"
        >
          <img
            src="assets/image1.png"
            alt="Contact us"
            className="w-full h-full object-cover shadow-card"
          />
        </motion.div>
      </section>

      {/* Contact Options */}
      <section className="py-24 px-6 lg:px-12 bg-paper-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-coral text-sm font-semibold tracking-[3px] uppercase mb-4">
              Ways To Reach Us
            </div>
            <h2 className="text-4xl font-light text-purple-800">
              Choose Your Preferred Method
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-paper-white p-10 shadow-card hover:shadow-card-hover transition-all text-center"
              >
                <h3 className="text-xl font-semibold text-purple-800 mb-4">
                  {option.title}
                </h3>
                <p className="text-text-muted mb-4 leading-relaxed">
                  {option.description}
                </p>
                <a
                  href={option.link}
                  className="text-purple-600 font-medium hover:text-coral transition-colors"
                >
                  {option.linkText}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-[#F8FAFC]/40 to-paper-warm/60">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-coral text-sm font-semibold tracking-[3px] uppercase mb-4">
              Send A Message
            </div>
            <h2 className="text-4xl font-light text-purple-800 mb-4">
              We're Listening
            </h2>
            <p className="text-lg text-text-muted">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-paper-white p-12 shadow-card"
          >
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-4 bg-mint/20 text-purple-800 rounded border-l-4 border-mint"
              >
                Thank you! We'll be in touch soon.
              </motion.div>
            )}

            <div className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-main mb-2 tracking-wide">
                  Full Name *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border-2 border-text-main/20 bg-paper-warm focus:border-purple-600 focus:bg-paper-white transition-all outline-none"
                />
                {errors.name && (
                  <p className="text-coral text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-main mb-2 tracking-wide">
                  Email Address *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border-2 border-text-main/20 bg-paper-warm focus:border-purple-600 focus:bg-paper-white transition-all outline-none"
                />
                {errors.email && (
                  <p className="text-coral text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text-main mb-2 tracking-wide">
                  Phone Number
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border-2 border-text-main/20 bg-paper-warm focus:border-purple-600 focus:bg-paper-white transition-all outline-none"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-main mb-2 tracking-wide">
                  What's This About? *
                </label>
                <select
                  {...register('subject')}
                  id="subject"
                  className="w-full px-4 py-3 border-2 border-text-main/20 bg-paper-warm focus:border-purple-600 focus:bg-paper-white transition-all outline-none"
                >
                  <option value="">Select a topic...</option>
                  <option value="booking">Book A Painting Session</option>
                  <option value="materials">Art Materials Purchase</option>
                  <option value="girlchild">Girl Child Initiative</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="volunteer">Volunteer Opportunity</option>
                  <option value="other">Other</option>
                </select>
                {errors.subject && (
                  <p className="text-coral text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-main mb-2 tracking-wide">
                  Your Message *
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-text-main/20 bg-paper-warm focus:border-purple-600 focus:bg-paper-white transition-all outline-none resize-vertical"
                />
                {errors.message && (
                  <p className="text-coral text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                isLoading={mutation.isPending}
                disabled={mutation.isPending}
              >
                Send Message
              </Button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;