import { Either } from "src/generics/Either";
import { Etiqueta } from "../Etiqueta";
import { EtiquetaId } from "../ValueObjects/EtiquetaId";

export interface IEtiqueta{
    crearEtiqueta(etiqueta: Etiqueta): Promise<Either<Error, EtiquetaId>>;
}