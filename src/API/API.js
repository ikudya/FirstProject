import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "3d013325-f17a-4f7a-a36f-9d4f3c3d83e8"
    }
});

export const userAPI = {
    getUsers(currentPage = 1, pageSize=10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    getProfile(userId) {
        console.warn('Obsolate method. Please profileAPI jbject')
        return profileAPI.getProfile(userId);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status){
        return instance.put('profile/status', { status:status });
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    },

}