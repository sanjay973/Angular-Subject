import { Actor } from "actor";

export class ProductSerializer {
  public actorsSerializer(json: any): Actor[] {
    var actors: Actor[] = [];
    if (json && json.data && ('project_actors_hash' in json.data)) {
      for (var key in json.data.project_actors_hash) {
        actors.push(new Actor(
          key,
          json.data.project_actors_hash[key].user_id,
          json.data.project_actors_hash[key].user_login,
          json.data.project_actors_hash[key].role,
          json.data.project_actors_hash[key].status,
          json.data.project_actors_hash[key].created_at,
          json.data.project_actors_hash[key].allocation_percentage,
          json.data.project_actors_hash[key].start_date,
          json.data.project_actors_hash[key].name,
          json.data.project_actors_hash[key].image
        ));
      }
    }
    return actors;
  }
}
