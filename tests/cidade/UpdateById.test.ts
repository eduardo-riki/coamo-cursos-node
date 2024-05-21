import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Cidade - Update By ID", () => {
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
      .put("/cidade/9")
      .set({ Authorization: `bearer ${accessToken}` })
      .send({
        nome: "Ubiratã",
        estado: "Paraná",
      });

    expect(res1.statusCode).toEqual(StatusCodes.OK);
  });

  it("ERRO - Editar registro", async () => {
    const res1 = await testServer
      .put("/cidade/0")
      .set({ Authorization: `bearer ${accessToken}` })
      .send({
        nome: "Go",
      });

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
  });
});
