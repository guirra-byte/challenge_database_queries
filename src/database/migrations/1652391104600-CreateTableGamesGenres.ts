import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableGamesGenres1652391104600 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query('CREATE TABLE "genres" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT IS NULL)')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
