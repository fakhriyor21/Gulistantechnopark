import axios from "axios";
import { API_ORIGIN } from "@/lib/apiOrigin";

interface LoginAdmin {
  phone: string;
  password: string;
}

const baseURL = `${API_ORIGIN}/api`;

const loginAdmin = async ({ phone, password }: LoginAdmin) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = {
    phone,
    password,
  };
  try {
    const response = await axios.post(`${baseURL}/login`, body, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const otpCheck = async ({ phone, code }: { phone: string; code: string }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = {
    phone,
    code,
  };
  try {
    const response = await axios.post(`${baseURL}/otp`, body, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const addNews = async ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = {
    title,
    content,
  };
  try {
    const response = await axios.post(`${baseURL}/add-news`, body, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getNews = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.get(`${baseURL}/all-news`, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteNews = async (id: number) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.delete(`${baseURL}/delete-news/${id}`, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getByNews = async (id: number) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.get(`${baseURL}/all-news-by-id/${id}`, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export { loginAdmin, otpCheck, addNews, getNews, deleteNews, getByNews };
