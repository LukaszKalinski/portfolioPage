import { Component, OnInit, Input } from '@angular/core';
import { TimelineItem } from 'src/app/classes/timeline.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
  education: TimelineItem[] = [];
  experience: TimelineItem[] = [];
  other: TimelineItem[] = [];
  @Input() show: string;
  showItem: TimelineItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.setEducation();
    this.setExperience();
    this.setOther();
    this.showItem = this.show === 'education' ? this.education : (this.show === 'experience' ? this.experience : this.other);
  }

  setEducation() {
    this.education.push(
      {
        header: 'AGH University of Science and Technology',
        date: '10.2018 - 06.2019',
        desc: '<b>Programming Mobile Devices</b>'
      });
    this.education.push(
      {
        header: 'AGH University of Science and Technology',
        date: '10.2016 - 06.2017',
        // tslint:disable-next-line: max-line-length
        desc: '<b>Project Management</b><br>Specialization: International Project Management, Prince2, IT Project Management, Industrial Project Management'
      });
    this.education.push(
      {
        header: 'Cracow University of Technology',
        date: '10.2009 - 05.2015',
        // tslint:disable-next-line: max-line-length
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
    this.other.push(
      {
        header: 'Raieurobud sp. z o.o.',
        date: '01-2019 - 12.2019',
        // tslint:disable-next-line: max-line-length
        desc: '<b>Managing Director</b><br>Co-creation and implementation of the company\'s strategy, preparation and participation in making investment decisions, making decisions regarding the direction of development of new services, maintaining current executive potential. Operational management and coordination of work activities of all departments in the company.'
      });
    this.other.push(
      {
        header: 'Raieurobud sp. z o.o.',
        date: '10.2018 - 01.2019',
        // tslint:disable-next-line: max-line-length
        desc: '<b>Project Manager</b><br>Operational management and coordination of executive department activities, supervision and coordination of the implementation of works on a given investment, including quality control, timeliness and budget of a given undertaking.'
      });
    this.other.push(
      {
        header: 'Grimbud sp. z o.o.',
        date: '02.2018 - 10.2018',
        // tslint:disable-next-line: max-line-length
        desc: '<b>Site Manager</b><br>Implementation of the construction of the Wadowicka Apartments investment at Wadowicka Street in Krakow (PUM around 1000 m2, value around 60 million PLN). Responsibilities of the site manager in accordance with the Construction Law.'
      });
    this.other.push(
      {
        header: 'DreamR',
        date: '07.2017 - present',
        // tslint:disable-next-line: max-line-length
        desc: '<b>Owner</b>'
      });
    this.other.push(
      {
        header: 'Pedrano Poland Construction sp. z o.o.',
        date: '12.2016 - 06.2017',
        // tslint:disable-next-line: max-line-length
        desc: '<b>Cost Manager</b><br>Implementation of the Cordia Cystersów Garden investment at Cystersów Street in Krakow (PUM around 25.000 m2, value around 120 million PLN). In terms of duties: creating investment budgets; analysis of technical documentation, optimization of solutions, preparation of bills; defining the scope of works for subcontractors in scope coordination; conducting negotiations, tenders for works; agreeing and preparing contractual documents; supervision and settlement of the budget of investments and subcontractors; supervision over the quality, timeliness of works and their coordination; OHS supervision.'
      });
    this.other.push(
      {
        header: 'Pedrano Poland Construction sp. z o.o.',
        date: '07.2015 - 12.2016',
        // tslint:disable-next-line: max-line-length
        desc: '<b>Site Engineer</b>'
      });
  }

}
