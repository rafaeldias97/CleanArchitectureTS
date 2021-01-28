import "module-alias/register";
import app from "@/main/config/app";
import env from "@/main/config/env";
import { MongoHelper } from "@/infra/data-sources/mongo-helper";

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    app.listen(env.port, () =>
      console.log(`Server running at http://localhost:${env.port}`)
    );
  })
  .catch(console.error);
