import { getRepository, Repository } from 'typeorm';

import { User } from '../../../users/entities/User';
import { Game } from '../../entities/Game';

import { IGamesRepository } from '../IGamesRepository';

export class GamesRepository implements IGamesRepository {
  private repository: Repository<Game>;

  constructor() {
    this.repository = getRepository(Game);
  }

  async findByTitleContaining(param: string): Promise<Game[]> {

    const findGames = await this
      .repository
      .createQueryBuilder()
      .where(`title ILIKE :title`, { title: `%${param}%` })
      .getMany();


    return findGames;
    // Complete usando query builder
  }

  async countAllGames(): Promise<[{ count: string }]> {
    return await this.repository.query(`SELECT COUNT(*) FROM games`); // Complete usando raw query
  }

  async findUsersByGameId(id: string): Promise<User[]> {

    const findUser = await this.repository
      .createQueryBuilder()
      .relation(Game, "users")
      .of(id)
      .loadMany();

    return findUser;

    // Complete usando query builder
  }
}

//Selecionar na tabela Users, todo o User que possuir um Id de Game igual ao passado como parâmetro;

