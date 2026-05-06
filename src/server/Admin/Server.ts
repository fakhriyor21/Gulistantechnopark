import axios from "axios";
import { API_ORIGIN } from "@/lib/apiOrigin";

interface LoginAdmin {
  phone: string;
  password: string;
}

const baseURL = `${API_ORIGIN}/api`;

function unwrapNewsList(payload: unknown): unknown[] {
  if (Array.isArray(payload)) return payload;
  if (!payload || typeof payload !== "object") return [];
  const p = payload as Record<string, unknown>;
  if (Array.isArray(p.message)) return p.message;
  if (Array.isArray(p.data)) return p.data;
  if (Array.isArray(p.news)) return p.news;
  return [];
}

function unwrapNewsItem(payload: unknown): unknown {
  if (!payload || typeof payload !== "object" || Array.isArray(payload))
    return null;
  const p = payload as Record<string, unknown>;
  const inner = p.message ?? p.data;
  if (inner && typeof inner === "object" && !Array.isArray(inner)) return inner;
  if ("id" in p || "title" in p) return p;
  return null;
}

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
    const payload = response.data;
    const message = unwrapNewsList(payload);
    return typeof payload === "object" && payload !== null
      ? { ...payload, message }
      : { message };
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
    const payload = response.data;
    const message = unwrapNewsItem(payload);
    return typeof payload === "object" && payload !== null
      ? { ...payload, message }
      : { message };
  } catch (error) {
    console.log(error);
  }
};
export { loginAdmin, otpCheck, addNews, getNews, deleteNews, getByNews };
