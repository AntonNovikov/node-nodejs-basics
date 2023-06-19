import { writeFile } from "fs/promises";

const create = async () => {
  const data = "I am fresh and young";
  try {
    await writeFile("./src/fs/files/fresh.txt", data);
  } catch (err) {
    if (err.code === "EEXIST") {
      throw new Error("FS operation failed");
    }
  }
};

await create();
