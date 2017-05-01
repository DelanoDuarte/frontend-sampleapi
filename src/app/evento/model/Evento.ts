import { Participante } from 'app/participantes/model/Participante'

export class Evento {


    id: number;
    nome: String;
    observacoes: String;
    dataEvento; Date;
    finalizado: boolean;
    participantes: Array<Participante>;
}