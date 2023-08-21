import $api, { API_URL } from '../http/index.js';

export default class AuthService {
   static async signIn(value){
      const res = await $api.post('/signIn',value)
      const {accessToken} = res.data
      localStorage.setItem('accessToken',accessToken)
      return res
   }
   static async signUp(value){
      const ans =await $api.post('/signUp',value)
      return ans
   }
   static async rememberPassword(value){
      const ans =await $api.post('/rememberPassword',value)
      return ans
   }
   static async logOut(){
      const rez = await $api.post('/logOut');
      return rez;
   }
   static async refresh(){
      return await $api.post('/refresh');
   }
   static async getUsers(){
      const ans =  await $api.get('/users');
      return ans
   }
   static async checkAuthUser(){
      if(!localStorage.getItem('accessToken')) return {status:401}
      const response = await $api.get('/checkAuthUser');
      return response
   }
   static async aboutUser(){
      const ans = await $api.get('/aboutUser');
      return ans
   }
}