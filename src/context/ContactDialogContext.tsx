import { createContext, useContext, useState, type ReactNode } from 'react';

interface ContactDialogContextType {
  isContactOpen: boolean;
  openContact: () => void;
  closeContact: () => void;
}

const ContactDialogContext = createContext<ContactDialogContextType | undefined>(undefined);

export function ContactDialogProvider({ children }: { children: ReactNode }) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <ContactDialogContext.Provider
      value={{
        isContactOpen,
        openContact: () => setIsContactOpen(true),
        closeContact: () => setIsContactOpen(false),
      }}
    >
      {children}
    </ContactDialogContext.Provider>
  );
}

export function useContactDialog() {
  const context = useContext(ContactDialogContext);
  if (!context) {
    throw new Error('useContactDialog must be used within a ContactDialogProvider');
  }
  return context;
}
