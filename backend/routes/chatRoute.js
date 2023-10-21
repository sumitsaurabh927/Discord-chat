// const express = require("express");
import express from "express";
import { chatController } from "../controller/chat.js";

const router = express.Router();

router.post("/sendChat",chatController);

export default router;