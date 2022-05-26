import { Injectable } from '@angular/core'

export interface DataItem {
  id: number
  name: string
  description: string,
  link: string,
  imageUrl: string,
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private items = new Array<DataItem>(
    {
      id: 1,
      name: 'NRG 89 FM',
      description: 'NRG Radio',
      link: 'https://stream.zeno.fm/x05fre6fmpeuv.mp3',
      imageUrl: ''
    },
  )

  getItems(): Array<DataItem> {
    return this.items
  }

  getItem(id: number): DataItem {
    return this.items.filter((item) => item.id === id)[0]
  }
}
