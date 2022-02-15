export class User {
    static login: string;
  static public_repos: number;
  static avatar_url: string;
  static html_url: string;
    constructor(public login: string, public public_repos: number, public avatar_url: string, public html_url: string, public created_at: Date) {}
}
