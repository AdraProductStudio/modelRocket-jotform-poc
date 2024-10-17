import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

let token = null;

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

const getToken = async () => {
    try {
        const username = "matsuri";
        const password = "fc153ac36455604c6a6bcb3e22c0a4debfb746d59ad4a33a4b0d50f315206958d78da64e88957993e537e5ef235537a65ac0bc8fbaa725ae3e8e151617e82b81";

        const basicAuth = "Basic " + btoa(`${username}:${password}`);

        const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/gettoken`,
            {
                headers: {
                    Authorization: basicAuth,
                },
            }
        );

        if (response.data.error_code === 200) {
            Cookies.set("token", response.data.data.token);
        }
    } catch (error) {
        console.error("Error getting token:", error);
        throw error;
    }
};

axiosInstance.interceptors.response.use(
    (response) => {
        if (response.data.error_code === 0 || response.data.error_code === 200) {
            // toast.success(response.data.message);
        } else {
            // toast.error(response.data.message);
        }
        return response;
    },
    async (error) => {
        try {
            const originalRequest = error.config;
            if (error.response && error.response.status === 401 && error.response.data.msg === "Token has expired") {
                originalRequest._retry = true;
                
                toast.error("Session expired, please try again...!");
                await getToken();
                return axiosInstance(originalRequest);
            }
        } catch (err) {
            return Promise.reject(error);
        }
    }
);

axiosInstance.interceptors.request.use(
    (config) => {
        if (Cookies.get("token")) {
            token = Cookies.get("token");
        }
        config.headers.Authorization = `Bearer ${token}`;


        if (config.data instanceof FormData) {
            config.headers['Content-Type'] = 'multipart/form-data';
        } else {
            config.headers['Content-Type'] = 'application/json';
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;