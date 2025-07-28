import { useCallback } from 'react';

interface WhatsAppConfig {
    phoneNumber?: string;
    defaultMessage?: string;
}

export const useWhatsApp = ({
    phoneNumber = "5493518042042",
    defaultMessage = "",
}: WhatsAppConfig) => {
    const sendMessage = useCallback(
        (message: string = defaultMessage) => {
            // Limpiar el mensaje para URL
            const encodedMessage = encodeURIComponent(message);

            // Crear URL de WhatsApp
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

            // Abrir en nueva ventana
            window.open(whatsappUrl, "_blank");
        },
        [phoneNumber, defaultMessage]
    );

    const sendCustomMessage = useCallback(
        (customMessage: string) => {
            const encodedMessage = encodeURIComponent(customMessage);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            window.open(whatsappUrl, "_blank");
        },
        [phoneNumber]
    );

    return {
        sendMessage,
        sendCustomMessage,
        phoneNumber,
    };
};