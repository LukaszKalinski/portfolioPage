import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { TimelineItem } from 'src/app/classes/timeline.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.sass'],
  animations: [
    trigger('thingsappear', [
      state('in', style({
        opacity: 1,
      })),
      transition('void => *', [
        style({
          opacity: 0,
        }),
        animate(1000)
      ]),
    ]),
  ]
})

export class TimelineComponent implements OnInit {
  @Input() show: string;
  education: TimelineItem[] = [];
  experience: TimelineItem[] = [];
  other: TimelineItem[] = [];
  showItem: TimelineItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.setEducation();
    this.setExperience();
    this.setOther();
    this.showItem = this.show === 'education' ? this.education : (this.show === 'experience' ? this.experience : this.other);
  }

  setEducation() {
    const e = this.education;
    e.push(
      {
        header: 'AGH University of Science and Technology',
        date: '10.2018 - 06.2019',
        desc: '<b>Programming Mobile Devices</b>'
      });
    e.push(
      {
        header: 'AGH University of Science and Technology',
        date: '10.2016 - 06.2017',
        // tslint:disable-next-line: max-line-length
        desc: '<b>Project Management</b><br>Specialization: International Project Management, Prince2, IT Project Management, Industrial Project Management'
      });
    e.push(
      {
        header: 'Cracow University of Technology',
        date: '10.2009 - 05.2015',
        desc: '<b>Civil Engineering</b><br>Specialization: Building and Engineering Constructions'
      });
  }

  setExperience() {
    this.experience.push(
      {
        header: 'Capgemini Polska sp. z o.o.',
        date: '12.2019 - present',
        // tslint:disable-next-line: max-line-length
        desc: '<b>Junior ServiceNow Developer</b><br>Develop and technical assistance with ServiceNow Platform functionalities f.e:<br>- overall coverage of integration with external systems,<br>- overall coverage of objects like forms, tables, modules, widgets, scripts, notifications,<br>- overall troubleshooting of platform.'
      });
  }

  setOther() {
    const o = this.other;
    o.push(
      {
        header: 'Raieurobud sp. z o.o.',
        date: '01-2019 - 12.2019',
        // tslint:disable-next-line: max-line-length
        desc: '<b>Managing Director</b><br>Co-creation and implementation of the company\'s strategy, preparation and participation in making investment decisions, making decisions regarding the direction of development of new services, maintaining current executive potential. Operational management and coordination of work activities of all departments in the company.'
      });
    o.push(
      {
        header: 'Raieurobud sp. z o.o.',
        date: '10.2018 - 01.2019',
        // tslint:disable-next-line: max-line-length
        desc: '<b>Project Manager</b><br>Operational management and coordination of executive department activities, supervision and coordination of the implementation of works on a given investment, including quality control, timeliness and budget of a given undertaking.'
      });
    o.push(
      {
        header: 'Grimbud sp. z o.o.',
        date: '02.2018 - 10.2018',
        // tslint:disable-next-line: max-line-length
        desc: '<b>Site Manager</b><br>Implementation of the construction of the Wadowicka Apartments investment at Wadowicka Street in Krakow (PUM around 1000 m2, value around 60 million PLN). Responsibilities of the site manager in accordance with the Construction Law.'
      });
    o.push(
      {
        header: 'DreamR',
        date: '07.2017 - present',
        desc: '<b>Owner</b>'
      });
    o.push(
      {
        header: 'Pedrano Poland Construction sp. z o.o.',
        date: '12.2016 - 06.2017',
        // tslint:disable-next-line: max-line-length
        desc: '<b>Cost Manager</b><br>Implementation of the Cordia Cystersów Garden investment at Cystersów Street in Krakow (PUM around 25.000 m2, value around 120 million PLN). In terms of duties: creating investment budgets; analysis of technical documentation, optimization of solutions, preparation of bills; defining the scope of works for subcontractors in scope coordination; conducting negotiations, tenders for works; agreeing and preparing contractual documents; supervision and settlement of the budget of investments and subcontractors; supervision over the quality, timeliness of works and their coordination; OHS supervision.'
      });
    o.push(
      {
        header: 'Pedrano Poland Construction sp. z o.o.',
        date: '07.2015 - 12.2016',
        desc: '<b>Site Engineer</b>'
      });
  }

}
