import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableShoppingCar1652391072547 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query('CREATE TABLE "orders" ("id uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now() PRIMARY KEY ("id"))',);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
