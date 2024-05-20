import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Usuário - SignUp", () => {
  it("Cadastro de Usuário", async () => {
    const res1 = await testServer.post("/usuario/signUp").send({
      nome: "Eduardo",
      email: "eduardo@gmail.com",
      senha: "123456",
    });

    expect(res1.statusCode).toEqual(StatusCodes.OK);
  });
});
