/**
 * Chatbot extension for MakeCode Arcade
 */
//% weight=100 color=#0078d7 icon="\uf27a" block="Chatbot"
namespace chatbot {
    let lastResponse = ""

    /**
     * Get a reply from the chatbot to your message.
     * @param message the message to send
     */
    //% block="chatbot reply to $message"
    //% message.defl="Hello"
    export function replyTo(message: string): string {
        if (message.toLowerCase().includes("hello")) {
            lastResponse = "Hi there! How can I help you?"
        } else if (message.toLowerCase().includes("how are you")) {
            lastResponse = "I'm just code, but I'm doing great!"
        } else {
            lastResponse = "Sorry, I didn't understand that."
        }
        return lastResponse
    }

    /**
     * Get the last chatbot response.
     */
    //% block="last chatbot response"
    export function lastChatbotResponse(): string {
        return lastResponse
    }
}
