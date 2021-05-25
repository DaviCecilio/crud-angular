import { Component, OnInit } from '@angular/core'
import { HeaderService } from '@/components/templates/header/header.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor (private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  get title(): string {
    return this.headerService.headerData.title
  }

  get routeURL(): string {
    return this.headerService.headerData.routeUrl
  }

  get icon(): string {
    return this.headerService.headerData.icon
  }
}
