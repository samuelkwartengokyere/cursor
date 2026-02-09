
"use client";

import { useState } from "react";

export default function SendEmail() {
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!subject || !message) return;

        setStatus("sending");
        setErrorMessage("");

        try {
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ subject, message }),
            });

            if (res.ok) {
                setStatus("success");
                setSubject("");
                setMessage("");
            } else {
                const data = await res.json();
                setErrorMessage(data.error || "Failed to send emails");
                setStatus("error");
            }
        } catch (error) {
            setErrorMessage("An unexpected error occurred");
            setStatus("error");
        }
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md mt-10">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Send Bulk Email</h1>

            {status === "success" && (
                <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md">
                    Emails sent successfully!
                </div>
            )}

            {status === "error" && (
                <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
                    {errorMessage}
                </div>
            )}

            <form onSubmit={handleSend} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border text-black"
                        placeholder="Enter email subject"
                        required
                        disabled={status === "sending"}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={6}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border text-black"
                        placeholder="Type your message here..."
                        required
                        disabled={status === "sending"}
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === "sending"}
                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${status === "sending"
                            ? "bg-indigo-400 cursor-not-allowed"
                            : "bg-indigo-600 hover:bg-indigo-700"
                        } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                >
                    {status === "sending" ? "Sending..." : "Send to All Contacts"}
                </button>
            </form>
        </div>
    );
}
