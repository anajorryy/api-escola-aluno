import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";
import { AlunosService } from "./alunos/alunos.service.js";
import { faker } from "@faker-js/faker/locale/pt_BR";

async function bootstrap () {
    const app = await NestFactory.createApplicationContext(AppModule);
    const alunosService = app.get(AlunosService);

    console.log('=== Iniciando a geração de alunos Fakes...');
    const cursos = [
        'Direito',
        'Medicina',
        'Engenharia Civil',
        'Matemática',
        'Administração',
        'Psicologia',
        'Enfermagem',
        'Farmácia',
        'Odontologia',
        'Nutrição',
        'Recursos Humanos',
        'redes de computadores',
        'engenharia de software',
        'fisioterapia'
    ];
    for (let i = 0; i < 100; i++) {
        const cursosAleatorios = faker.helpers.arrayElements (cursos, { min: 1, max: 3});
        const fakeAluno = {
            nome: faker.person.fullName(),
            idade: faker.number.int({
                min: 17, max: 99,
            }),
            matricula: faker.string.numeric(5),
            cursos: cursosAleatorios,
            ativo: true,
        };
        try{
            await alunosService.create(fakeAluno);
        } catch (error) {
            console.log(`Erro ao salvar ${fakeAluno.nome} - Matricula Duplicada`);
        }
            }

    console.log('Banco de dados populado com sucesso!');
    await app.close();
}

bootstrap();