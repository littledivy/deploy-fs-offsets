import fs from "node:fs";
import { Buffer } from "node:buffer";

fs.open("test.txt", "r", (err, fd) => {
  fs.read(fd, Buffer.alloc(1024), 0, 1024, 0, (err, bytesRead, buffer) => {
	  console.log(buffer.toString());
  });
});
