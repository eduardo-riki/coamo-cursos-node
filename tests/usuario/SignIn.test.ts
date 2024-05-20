import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Usuário - SignIn", () => {
  it("Login de Usuário", async () => {
    await testServer.post("/usuario/signUp").send({
      nome: "Eduardo",
      email: "eduardo@gmail.com",
      senha: "123456",
    });

    const res1 = await testServer.post("/usuario/signIn").send({
      email: "eduardo@gmail.com",
      senha: "123456",
    });

    expect(res1.statusCode).toEqual(StatusCodes.OK);
  });
});
