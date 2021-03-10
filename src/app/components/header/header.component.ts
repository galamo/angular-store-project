import { Component } from "@angular/core"


interface IColorTheme {
    label: string
    value: string
}

@Component({
    selector: 'header-app', //html tag - use with <header-app></header-app>
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
    public title: string
    public center: string
    public color: string = "blue"
    public products = ["Milk", "Eggs", "Bread", "Coke", "Water"];
    public showElement: boolean = false;
    public colors: Array<IColorTheme> = [{ label: "unicorn", value: "pink" },
    { label: "purple&indigo", value: "purple" },
    { label: "default", value: "blue" }]
    constructor() {
        this.title = "Store Application"
        this.center = ""
    }

    changeHeader(newTitle: string) {
        this.title = newTitle
        this.center = "width:300px;margin:auto auto"
    }

    changeColor(color: string) {
        this.color = color
    }
    showPanel() {
        this.showElement = !this.showElement;
    }
}