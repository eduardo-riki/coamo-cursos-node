import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Pessoa - Update By ID", () => {
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

  it("Editar registro", async () => {
    const res1 = await testServer
      .put("/pessoa/1")
      .set({ Authorization: `bearer ${accessToken}` })
      .send({
        nomeCompleto: "Dino da Silva Sauro",
        email: "dino@gmail.com",
        cidadeId: 6,
      });

    expect(res1.statusCode).toEqual(StatusCodes.OK);
  });

  it("ERRO - Editar registro", async () => {
    const res1 = await testServer
      .put("/pessoa/0")
      .set({ Authorization: `bearer ${accessToken}` })
      .send({
        nomeCompleto: "Errado",
        email: "errado@gmail.com",
        cidadeId: 1,
      });

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
  });
});
