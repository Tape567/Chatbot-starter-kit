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
/**
 * Chatbot extension for MakeCode Arcade
 */
//% weight=100 color=#0078d7 icon="\uf27a" block="Chatbot"
namespace chatbot {
    let sessionActive = false
    let lastResponse = ""
    let history: string[] = []

    /**
     * Start a new chat session.
     */
    //% block="start chatbot session"
    export function startSession(): void {
        sessionActive = true
        history = []
        lastResponse = "Chat session started!"
    }

    /**
     * End the chat session.
     */
    //% block="end chatbot session"
    export function endSession(): void {
        sessionActive = false
        lastResponse = "Chat session ended."
    }

    /**
     * Send a message to the chatbot and get a reply.
     * @param message the message to send
     */
    //% block="chatbot reply to $message"
    //% message.defl="Hello"
    export function replyTo(message: string): string {
        if (!sessionActive) {
            lastResponse = "Please start a chat session first."
        } else if (message.toLowerCase().includes("hello")) {
            lastResponse = "Hi there! How can I help you?"
        } else if (message.toLowerCase().includes("how are you")) {
            lastResponse = "I'm just code, but I'm doing great!"
        } else {
            lastResponse = "Sorry, I didn't understand that."
        }
        history.push("User: " + message)
        history.push("Bot: " + lastResponse)
        return lastResponse
    }

    /**
     * Get the last chatbot response.
     */
    //% block="last chatbot response"
    export function lastChatbotResponse(): string {
        return lastResponse
    }

    /**
     * Get the chat history as a single string.
     */
    //% block="chat history"
    export function chatHistory(): string {
        return history.join("\n")
    }

    /**
     * Check if a chat session is active.
     */
    //% block="is chatbot session active"
    export function isSessionActive(): boolean {
        return sessionActive
    }
}
