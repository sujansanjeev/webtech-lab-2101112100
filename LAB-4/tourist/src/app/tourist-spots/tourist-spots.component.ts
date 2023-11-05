import { Component } from '@angular/core';

@Component({
  selector: 'app-tourist-spots',
  templateUrl: './tourist-spots.component.html',
  styleUrls: ['./tourist-spots.component.css']
})
export class TouristSpotsComponent {
  searchText: string = '';
  touristSpots: any[] = [
    {
      name: 'Taj Mahal',
      image: 'https://media.istockphoto.com/id/519330110/photo/taj-mahal-agra-india-monument-of-love-in-blue-sky.jpg?s=612x612&w=0&k=20&c=Uma6Q7KduznA6jUKcSquFP1iHHiw8UXcZEYVLONrmaQ=',
      location: 'Agra, India'
    },
    {
      name: 'Lotus Temple',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuGBPvA9L4IV2i_msZeVTsErhWeuXUtFgvyg',
      location: 'New Delhi, India'
    },
    {
      name: 'Golden Temple',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_LkGrbfwztd9lczL_obx3ifKPcsWzLjneA',
      location: 'Amritsar, India'
    },
    {
      name: 'Eiffel Tower',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNM7Q2pDIDjR7bNsiUQ2RmxOF7RfZ_Xmoiw',
      location: 'Paris, France'
    },
    {
      name: 'Machu Picchu',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJMK10kyFmkxuXycCF90rWQEDNS3H5BC_e-Q',
      location: 'Cusco, Peru'
    },
    {
      name: 'Statue of Liberty',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE3njJw_8fqX0AbDZSqedofw6YI3ut5rXCqA  ',
      location: 'New York City, USA'
    },
    {
      name: 'Great Wall of China',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO6pvq7U6iD4mbYmH2exn2ceHNsXWnqhUJqg&usqp=CAU',
      location: 'China'
    },
    {
      name: 'Pyramids of Giza',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLtJxYJ6hDBHjFmwCwizf0oXNrj9wj6vmtaw',
      location: 'Cairo, Egypt'
    },
    {
      name: 'Santorini, Greece',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3tFJwAtVYk088nVgZilf0_QM3de0H2k4otg',
      location: 'Santorini, Greece'
    },
    
  ];

  get filteredSpots(): any[] {
    return this.touristSpots.filter(spot => spot.name.toLowerCase().includes(this.searchText.toLowerCase()));
  }
}
