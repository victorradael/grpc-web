import { HeroById, Hero } from "../proto/service_pb";
import { HeroesServiceClient } from "../proto/service_grpc_web_pb";

export async function getAllOpenSearchDataAssets() {
  let message = {};
  const client = new HeroesServiceClient("0.0.0.0:50051", null, null);
  const request = new HeroById();
  await client.findOne(request, {}, function (err, response) {
    message = response;
  });

  return { message };
}
