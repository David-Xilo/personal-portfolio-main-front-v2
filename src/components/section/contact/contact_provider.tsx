import { createContext, useContext, type ReactNode } from 'react';
import type {ContactInfo} from "../../../api/types.ts";
import {useApiGet} from "../../../api/use_api_get.tsx";


interface ContactContextType {
    status: 'loading' | 'success' | 'error';
    contact: ContactInfo | null;
    error: string;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const ContactProvider = ({ children }: { children: ReactNode }) => {
    const contactPath = '/contact';
    const { status, message: contact, error } = useApiGet<ContactInfo>(contactPath, null);

    return (
        <ContactContext.Provider value={{ status, contact, error }}>
            {children}
        </ContactContext.Provider>
    );
};

export const useContact = () => {
    const context = useContext(ContactContext);
    if (context === undefined) {
        throw new Error('useContact must be used within a ContactProvider');
    }
    return context;
};
