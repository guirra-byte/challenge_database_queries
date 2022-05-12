import { CreateDateColumn, Entity, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";
import { Game } from "../../games/entities/Game";
import { User } from "./User";

@Entity("orders")
export class Orders {

  @PrimaryColumn('uuid')
  id: string
  //Identifier da "Lista de compras"

  @ManyToMany(() => Game, (game) => game.id)
  shoppingCar: Game[]
  //Lista de Todos os Games no Shopping Car

  @OneToMany(() => User, (user) => user.id)
  user_id: User
  //Identifier de qual user esta lista Pertence

  @CreateDateColumn()
  created_at: Date

  @CreateDateColumn()
  updated_at: Date

}