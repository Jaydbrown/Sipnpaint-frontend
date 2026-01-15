import { apiClient } from './api-client';
import { ContactFormData, BookingFormData } from './schemas';
    
export const submitContactForm = async (data: ContactFormData) => {
  const response = await apiClient.post('/contact', data);
  return response.data;
};

export const submitBooking = async (data: BookingFormData) => {
  const response = await apiClient.post('/bookings', data);
  return response.data;
};

export const getPackages = async () => {
  const response = await apiClient.get('/packages');
  return response.data;
};

export const getLocations = async () => {
  const response = await apiClient.get('/locations');
  return response.data;
};

export const getProducts = async () => {
  const response = await apiClient.get('/products');
  return response.data;
};

export const subscribeNewsletter = async (email: string) => {
  const response = await apiClient.post('/newsletter', { email });
  return response.data;
};