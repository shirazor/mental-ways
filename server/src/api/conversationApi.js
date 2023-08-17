import { AsyncRouter } from "express-async-router";
import { getPopulatedConversation } from '../controllers/conversationController.js';

const conversationRoute = AsyncRouter();
const { get } = conversationRoute;

get("/:id/populated", (req, res) => getPopulatedConversation(req.params.id));

export default conversationRoute;
