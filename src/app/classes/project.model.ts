import { ProjectStack } from './stack.model';

export class Project {
  constructor(
    public name: string,
    public pictureUrl: string[],
    public codeUrl: string,
    public liveUrl: string,
    public desc: string,
    public stack: ProjectStack = null,
    public idName: string,
    public descHTML: string = null,
  ) {}
}
