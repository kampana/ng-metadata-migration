import { Injectable } from "../panaya-decorators/panaya-decorators";

@Injectable("newService") 
export class NewService {

    returnHelloWorld() {
        return "New Component Here";
    }

    returnSearchText() {
        return "Search:";
    }
}