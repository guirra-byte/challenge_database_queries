import { Entity, PrimaryColumn, Column, ManyToMany } from 'typeorm';
import { Game } from './Game';

@Entity("genres")
export class Genres {

  @PrimaryColumn('uuid')
  id: string
  //Identifier da Categoria de Games;

  @Column()
  title: string
  //Coluna de Título da Categoria

  @ManyToMany(() => Game, (game) => game.genres)
  games: Game[]
  //Lista dos Games presentes na Categoria
}