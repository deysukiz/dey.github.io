import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styles: []
})
export class PublicationsComponent implements OnInit {

  publicationList: any [] = [];

  constructor() { }

  ngOnInit() {
    this.publicationList = [
      {
        year: 2017,
        description: 'Cibrian, F. L., Peña, O., <strong\>Ortega, D.</strong>, & Tentori, M. (2017). BendableSound: An elastic multisensory surface using touch-based interactions to assist children with severe autism during music therapy. International Journal of Human-Computer Studies, 107,22-37.'
      },
      {
        year: 2015,
        description: 'Cibrian, F. L., <strong\>Ortega, D. H.</strong>, Escobedo, L., & Tentori, M. (2015, December). Reflections from a Long-term Deployment Study to Design Novel Interactive Surfaces for Children with Autism. In Ambient Intelligence for Health (pp. 167-176). Springer, Cham.'
      },
      {
        year: 2015,
        description: '<strong\>Ortega, D.</strong>, Cibrian, F. L., & Tentori, M. (2015, October). BendableSound: A fabric-based interactive surface to promote free play in children with autism. In Proceedings of the 17th International ACM SIGACCESS Conference on Computers & Accessibility (pp. 315-316). ACM.'
      },
      {
        year: 2014,
        description: 'Peña, O., <strong\>Ortega, D.</strong>, Barreras, E., Balestrini, M., & Tentori, M. (2014, November). Integration of physical and digital media to allow older adults collectively share narratives during reading groups. In Proceedings of the 5th Mexican Conference on Human-Computer Interaction (p. 53). ACM.'
      }
    ];
  }

}
