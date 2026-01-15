import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface NavigationState {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

export const useNavigationStore = create<NavigationState>()(
  devtools(
    (set) => ({
      isMobileMenuOpen: false,
      toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
      closeMobileMenu: () => set({ isMobileMenuOpen: false }),
    }),
    { name: 'navigation-store' }
  )
);

interface BookingState {
  selectedPackage: string | null;
  selectedLocation: string | null;
  setSelectedPackage: (packageId: string) => void;
  setSelectedLocation: (locationId: string) => void;
  clearBooking: () => void;
}

export const useBookingStore = create<BookingState>()(
  devtools(
    persist(
      (set) => ({
        selectedPackage: null,
        selectedLocation: null,
        setSelectedPackage: (packageId) => set({ selectedPackage: packageId }),
        setSelectedLocation: (locationId) => set({ selectedLocation: locationId }),
        clearBooking: () => set({ selectedPackage: null, selectedLocation: null }),
      }),
      { name: 'booking-store' }
    ),
    { name: 'booking-store' }
  )
);

interface LocationFilterState {
  activeCity: 'lagos' | 'warri';
  setActiveCity: (city: 'lagos' | 'warri') => void;
}

export const useLocationFilterStore = create<LocationFilterState>()(
  devtools(
    (set) => ({
      activeCity: 'lagos',
      setActiveCity: (city) => set({ activeCity: city }),
    }),
    { name: 'location-filter-store' }
  )
);