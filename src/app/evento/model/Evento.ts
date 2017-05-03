import { Participante } from 'app/participantes/model/Participante'

export class Evento {


    id: number;
    nome: String;
    observacoes: String;
    dataEvento; Date;
    participantes: Array<Participante>;
}