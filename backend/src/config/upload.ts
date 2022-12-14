import multer from "multer";
import path from "path";

export default {
    storage: multer.diskStorage({
        //__dirname -> diretorio atual = /src/config
        destination: path.join(__dirname, "..", "..", "uploads"), //vai para pasta de upload
        filename: (request, file, cb) => {
            const fileName = `${Date.now()}-${file.originalname}`;
            cb(null, fileName);
        }
    })
}