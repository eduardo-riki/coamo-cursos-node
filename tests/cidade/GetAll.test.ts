import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Cidade - Get All", () => {
  it("Listar todos os registros", async () => {
    const res1 = await testServer.get("/cidade/listar");

    expect(res1.statusCode).toEqual(StatusCodes.OK);
    expect(res1.body.length).toBeGreaterThan(0);

    const res2 = await testServer.get("/cidade/listar?filter=Goio");

    expect(Number(res2.header["x-total-count"])).toBeGreaterThan(0);
    expect(res2.statusCode).toEqual(StatusCodes.OK);
    expect(res2.body.length).toBeGreaterThan(0);
  });
});
