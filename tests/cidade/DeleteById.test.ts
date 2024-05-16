import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Cidade - Delete By ID", () => {
  it("Deletar registro", async () => {  
    const res1 = await testServer.delete("/cidade/8")

    expect(res1.statusCode).toEqual(StatusCodes.OK);
  });

  it("ERRO - Deletar registro", async () => {
    const res1 = await testServer.delete("/cidade/0")

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
  });
});
