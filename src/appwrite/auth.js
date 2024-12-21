import { Account, Client, ID } from "appwrite";
import conf from "../conf/conf"

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.projectId);
        
        this.account = new Account(this.client);
    }

    async createAccount({name, email, password}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                await this.createVerification();
            }
            return userAccount;
        } catch (error) {
            throw error;
        }
    }

    async verifyEmail({userId, secret}) {
        try {
            const response = await this.account.updateVerification(userId, secret);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async createVerification() {
        try {
            const response = await this.account.createVerification('http://localhost:5173/verifyemail/');
            return response;
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            if (!email || !password) {
                throw new Error('Email and password are required');
            }
            // Delete any existing sessions before creating a new one
            try {
                const currentSession = await this.account.getSession('current');
                if (currentSession) {
                    await this.account.deleteSession(currentSession.$id);
                }
            } catch (error) {
                // If no session exists, continue with login
                console.log(error);
            }
            const session = await this.account.createEmailPasswordSession(email, password);
            return session;
        } catch (error) {
            console.error('Login error:', error);
            throw new Error('Invalid email or password');
        }
    }

    async handleOAuthLogin() {
        try {
            // Delete any existing sessions before OAuth login
            try {
                const currentSession = await this.account.getSession('current');
                if (currentSession) {
                    await this.account.deleteSession(currentSession.$id);
                }
            } catch (error) {
                // If no session exists, continue with OAuth
            }
            return await this.account.createOAuth2Session(
                "google",
                'http://localhost:5173/',
                'http://localhost:5173/fail'
            );
        } catch (error) {
            console.error('OAuth login error:', error);
            throw new Error('Failed to login with Google');
        }
    }

    async logout({sessionId}) {
        try {
            if (!sessionId) {
                throw new Error('Session ID is required for logout');
            }
            await this.account.deleteSession(sessionId);
            return { success: true };
        } catch (error) {
            console.error('Logout error:', error);
            throw new Error('Failed to logout. Please try again.');
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;