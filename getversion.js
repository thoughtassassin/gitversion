import { exec } from "node:child_process";
import util from "node:util";
import { EOL } from "node:os";
import fs from "node:fs";

const execAsync = util.promisify(exec);

const getVersion = async () => {
  const { stdout } = await execAsync("git tag");
  const versionList = stdout;
  const versionArray = versionList.toString().split(EOL);
  const version = versionArray[versionArray.length - 2];
  fs.writeFileSync("src/version.json", JSON.stringify({ version }));
};

getVersion();
