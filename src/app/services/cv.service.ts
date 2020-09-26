
import { Injectable } from '@angular/core';

@Injectable()
export class CvService {


  private curriculum: Cv[] =
  [
    {
      title: 'Workshop for kids: "First steps in Microsoft Word"',
      description: '(Comitán, Chiapas, México)',
      type: 'Career',
      initial_year: 2019
    },
    {
      title: 'Missionary Work',
      description: 'I served a year as a missionary of The light of the world church',
      type: 'Religious',
      initial_year: 2018,
      final_year: 2019
    },
    {
      title: 'Information Technology consultant',
      description: 'Consultant for “Iniciativa Salud Mesoamérica” a public-private initiative managed by the Inter-American Development Bank (IADB) and the Institute of health of Chiapas" State (ISECH) in Chiapas, Mexico.',
      type: 'Career',
      initial_year: 2016,
      final_year: 2018
    },
    {
      title: 'Co-Organizer of workshop “Hacer para aprender”',
      description: 'Workshop of  basic electronic for kids in Comitán, Chiapas, México.',
      type: 'Others',
      initial_year: 2017
    },
    {
      title: 'Internship in EDIS Interactive',
      description: 'Efecto Digital Interactivo, S.A. DE C.V (EDIS Interactive) at Puebla, Mexico.  http://edis.mx/',
      type: 'Others',
      initial_year: 2015
    },
    {
      title: 'Scholarship',
      description: 'CONACYT Graduate Fellowship',
      type: 'Award',
      initial_year: 2013,
      final_year: 2015
    },
    {
      title: 'M.Sc. in Computer Science',
      description: 'Computer Science Department, CICESE',
      type: 'Education',
      initial_year: 2013,
      final_year: 2015
    },
    {
      title: 'Adjunct professor at Instituto Tecnológico de Comitán',
      description: 'Undergraduate level classes: Web entrepreneurs, \n Computing Simulation and \n Hosting management',
      type: 'Career',
      initial_year: 2013
    },
    {
      title: 'B. Sc. in Computer Systems Engineering',
      description: 'Instituto Tecnológico de Comitán',
      type: 'Education',
      initial_year: 2005,
      final_year: 2009
    }
  ];
    constructor() {
        console.log('servicio listo para usarse');
    }

    getCv() {
        return this.curriculum;
    }
}

export interface Cv {
    title: string;
    description: string;
    type: string;
    initial_year: number;
    final_year?: number;
}
