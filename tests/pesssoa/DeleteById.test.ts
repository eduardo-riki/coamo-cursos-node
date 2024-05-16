import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Pessoa - Delete By ID", () => {
  it("Deletar registro", async () => {
    const res1 = await testServer.delete("/pessoa/1");

    expect(res1.statusCode).toEqual(StatusCodes.OK);
  });

  it("ERRO - Deletar registro", async () => {
    const res1 = await testServer.delete("/pessoa/0");

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
  });
});
