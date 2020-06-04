import { Subject } from 'rxjs';
import { Project } from '../classes/project.model';

export class MenuService {
  isMenuItemChanged = new Subject<string>();
  private menuItem = 'Home';
  isSelectedProjectChanged = new Subject<Project>();
  private selectedProject = null;
  isContactClickedChanged = new Subject<boolean>();
  private isContactClicked = false;

  updateMenuItem(name: string) {
    this.menuItem = name;
    this.isMenuItemChanged.next(this.menuItem);
  }

  getMenuItem() {
    return this.menuItem;
  }

  updateSelectedProject(project: Project) {
    this.selectedProject = project;
    this.isSelectedProjectChanged.next(this.selectedProject);
  }

  getSelectedProject() {
    return this.selectedProject;
  }

  updateIsContactClicked(is: boolean) {
    this.isContactClicked = is;
    this.isContactClickedChanged.next(this.isContactClicked);
  }

  getIsContactClicked() {
    return this.isContactClicked;
  }
}
