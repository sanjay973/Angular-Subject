import { Actor } from "actor";
import { ReplaySubject } from "rxjs";

export class ModelViewLocator {
    projectActors=new ReplaySubject<Actor[]>(1);
}
