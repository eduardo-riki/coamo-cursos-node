import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Pessoa - Create", () => {
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
      .post("/pessoa")
      .set({ Authorization: `bearer ${accessToken}` })
      .send({
        nomeCompleto: "Dino da Silva Sauro",
        email: "dino@gmail.com",
        cidadeId: 5,
      });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
  });
});
