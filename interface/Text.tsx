import { Schema, model } from 'mongoose'
import { userSchema, UserInterface } from './User'

// TODO pegar o usuário por ID
export interface TextInterface {
	nome: string;
	conteudo: string;
	dono?: {
		nome: string,
		email: string,
	};
}

const textSchema = new Schema<TextInterface> ({
	nome: {type: String, required: true},
	conteudo: {type: String, required: true},
	dono: {
		nome: {type: String},
		email: {type: String},
	},
});
var Text = model('Text', textSchema);

export { Text, textSchema }
