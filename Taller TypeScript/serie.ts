export class Serie {
    id: number;
    name: string;
    producer: string;
    seasons: number;
    summary: string;
    link: string;
    img: string;
  
    constructor(id: number,name: string, producer: string, seasons: number, summary: string, link: string, img: string) {
      this.id = id;
      this.name = name;
      this.producer = producer;
      this.seasons = seasons;
      this.summary = summary;
      this.link = link;
      this.img = img;
    }
  }