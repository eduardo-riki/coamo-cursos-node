import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Pessoa - Update By ID", () => {
  it("Editar registro", async () => {
    const res1 = await testServer.put("/pessoa/1").send({
      nomeCompleto: "Dino da Silva Sauro",
      email: "dino@gmail.com",
      cidadeId: 6,
    });

    expect(res1.statusCode).toEqual(StatusCodes.OK);
  });

  it("ERRO - Editar registro", async () => {
    const res1 = await testServer.put("/pessoa/0").send({
      nomeCompleto: "Errado",
      email: "errado@gmail.com",
      cidadeId: 1,
    });

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
  });
});
