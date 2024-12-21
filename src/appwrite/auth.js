import { Account, Client, ID } from "appwrite";
import conf from "../conf/conf"
export class AuthService{
    client = new Client();
    account;
    constructor(){
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.projectId)
        
        this.account=new Account(this.client)
    }

    async createAccount({name,email,password}){
       try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            console.log(userAccount);
            
            return this.createVerification();
       } catch (error) {
           return error.message
       }
    }

    async verifyEmail({userId,secret}){
        try {
            const response = await this.account.updateVerification(userId,secret);
            return response;
        } catch (error) {
            return error.message;
        }
    }

    async createVerification(){
        try {
            const response = await this.account.createVerification('http://localhost:5173/verify');
            console.log(response);
            
            return response;
        } catch (error) {
            return error.message;
        }
    }
    

    async login({email,password}){
        try {
            const session = await this.account.createEmailPasswordSession(email,password);
            return session;
        } catch (error) {
            return error.message;
        }
    }
}

const authService = new AuthService();

export default authService;