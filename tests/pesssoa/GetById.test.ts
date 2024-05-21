import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Pessoa - GetByID", () => {
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

  it("Selecionar registro", async () => {
    const res1 = await testServer
      .get("/pessoa/1")
      .set({ Authorization: `bearer ${accessToken}` });

    expect(res1.statusCode).toEqual(StatusCodes.OK);
  });

  it("ERRO - Selecionar registro", async () => {
    const res1 = await testServer
      .get("/pessoa/0")
      .set({ Authorization: `bearer ${accessToken}` });

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
  });
});
