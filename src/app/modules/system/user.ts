export class User {

  constructor(
    public name: string,
    public  lastname: string,
    public  email: string,
    public username: string,
    public  password: string,
    public  id?: number
  ) {
    // alert('меня создали');
  }
}
