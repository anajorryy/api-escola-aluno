import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type AlunoDocument = HydratedDocument<Aluno>;

@Schema({
    timestamps: true,
})
export class Aluno {
    @Prop({
        required: true,
        type:String,
    })
    nome!: string;

    @Prop({
        required: true,
        type:Number,
        
    })
    idade!: number;

    @Prop({
        required: true,
        unique: true,
        type:String,
    })
    matricula!: string;

    @Prop({
        type:[String],
        required: true,
    })
    cursos!: string[];

    @Prop({
        type: Boolean,
        default:true,
    })
    ativo!: boolean;

    
}

export const AlunoSchema = SchemaFactory.createForClass(Aluno);