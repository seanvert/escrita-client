import { Schema, model } from 'mongoose'
import { textSchema, TextInterface } from './Text'

export interface UserInterface {
	nome: string;
	email: string;
	textos: [{
		nome: string,
		conteudo: string,
	}];
	avatar?: string;
}

const userSchema = new Schema<UserInterface> ({
	nome: {type: String, required: true},
	email: {type: String, required: true},
	textos: [
		{
			nome: {type: String},
			conteudo: {type: String}
		}
	],
	avatar: String
});

const User = model('User', userSchema);

export { User, userSchema }
