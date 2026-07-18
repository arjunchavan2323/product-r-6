import { Observable } from "rxjs";








export interface iCanDeactivate{
    CanDeactivate : () => boolean | Promise <boolean> | Observable <boolean>
}