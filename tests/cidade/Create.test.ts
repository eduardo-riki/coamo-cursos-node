import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Cidade - Create", () => {
  let accessToken = "";
  beforeAll(async () => {
    const email = "eduardo@gmail.com";
    await testServer
      .post("/usuario/signUp")
      .send({ nome: "Eduardo", email, senha: "123456" });
    const res = await testServer
      .post("/usuario/signIn")
      .send({ email, senha: "123456" });

    accessToken = res.body.accessToken;
  });

  it("Criar registro", async () => {
    const res1 = await testServer
      .post("/cidade")
      .set({ Authorization: `bearer ${accessToken}` })
      .send({
        nome: "Umuarama",
        estado: "Paraná",
      });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
  });
});
