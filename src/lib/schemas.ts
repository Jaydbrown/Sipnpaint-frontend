import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const bookingFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  package: z.enum(['starter', 'standard', 'premium']),
  date: z.string().min(1, 'Please select a date'),
  attendees: z.number().min(1, 'At least 1 attendee required'),
  location: z.string().min(1, 'Please select a location'),
  message: z.string().optional(),
});

export type BookingFormData = z.infer<typeof bookingFormSchema>;

export const packageSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  duration: z.string(),
  attendees: z.string(),
  features: z.array(z.string()),
  badge: z.string().optional(),
  color: z.string(),
});

export type Package = z.infer<typeof packageSchema>;

export const locationSchema = z.object({
  id: z.string(),
  name: z.string(),
  city: z.enum(['lagos', 'warri']),
  address: z.string(),
  hours: z.string(),
  phone: z.string(),
  image: z.string(),
  icon: z.string(),
});

export type Location = z.infer<typeof locationSchema>;

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  description: z.string(),
  image: z.string(),
  category: z.string(),
  features: z.array(z.string()).optional(),
});

export type Product = z.infer<typeof productSchema>;