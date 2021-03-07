import { Component } from "@angular/core"

@Component({
    selector: 'header-app', //html tag - use with <header-app></header-app>
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
    public title: string
    public products = ["Milk", "Eggs", "Bread", "Coke", "Water"];
    constructor() {
        this.title = "Store Application"
    }

    changeHeader(newTitle: string) {
        this.title = newTitle
    }
}