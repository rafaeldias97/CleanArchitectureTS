import {
  makeLoadLastRankingController,
  makeClientController,
} from "@/main/factories";
import { adaptRoute } from "@/main/adapters";

import { Router } from "express";

export default (router: Router): void => {
  router.post("/machine", adaptRoute(makeLoadLastRankingController()));
  router.post("/client", adaptRoute(makeClientController()));
};
