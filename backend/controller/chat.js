import { chat } from "../novu/novu.js"

export const chatController = async (req, res) => {
    const { chatMsg } = req.body;
    // console.log(chatMsg);
    try {
        await chat(chatMsg);
        res.status(201).json({ message: "Message sent successfully" });
    } catch (error) {
        console.log("notifController error:", error);
        res.status(500).json({ message: error.message })
    }
}