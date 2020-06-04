export class Email {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public subject: string,
    public message: string,
    public date: number,
    public isRead: boolean = false,
  ) {}
}
