import createHttp from './http.service';
class AuthService {
   constructor() {
      this.http = createHttp('/api/auth');
   }
   async createsignup(data) {
      return (await this.http.post('/register', data)).data;
   }
   async createlogin(data) {
      return (await this.http.post('/login', data)).data;
   }
   async setCookie(cname, cvalue, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      let expires = 'expires=' + d.toUTCString();
      document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
   }
   async getCookie(cname) {
      let name = cname + '=';
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for (let i = 0; i < ca.length; i++) {
         let c = ca[i];
         while (c.charAt(0) == ' ') {
            c = c.substring(1);
         }
         if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
         }
      }
      return '';
   }
}

export default new AuthService();
