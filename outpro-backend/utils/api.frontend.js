// src/services/api.js
// Drop this file into your React Vite project.
// Set VITE_API_URL=http://localhost:5000/api in your .env

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// ── Helper ────────────────────────────────────────────────────────────────────
const request = async (endpoint, options = {}) => {
  const token = localStorage.getItem("outpro_token");

  const config = {
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  const res = await fetch(`${BASE_URL}${endpoint}`, config);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }
  return data;
};

// ── Auth ──────────────────────────────────────────────────────────────────────
export const authAPI = {
  login: (credentials) =>
    request("/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    }),

  getMe: () => request("/auth/me"),

  changePassword: (passwords) =>
    request("/auth/change-password", {
      method: "PUT",
      body: JSON.stringify(passwords),
    }),
};

// ── Enquiries (Contact / Plan Event Form) ─────────────────────────────────────
export const enquiryAPI = {
  // Called from your contact/plan-event form
  submit: (formData) =>
    request("/enquiries", {
      method: "POST",
      body: JSON.stringify(formData),
    }),

  // Admin dashboard
  getAll: (params = {}) => {
    const qs = new URLSearchParams(params).toString();
    return request(`/enquiries?${qs}`);
  },

  getById: (id) => request(`/enquiries/${id}`),

  update: (id, updates) =>
    request(`/enquiries/${id}`, {
      method: "PUT",
      body: JSON.stringify(updates),
    }),

  delete: (id) =>
    request(`/enquiries/${id}`, { method: "DELETE" }),

  getStats: () => request("/enquiries/stats/summary"),
};

// ── Events / Portfolio ────────────────────────────────────────────────────────
export const eventsAPI = {
  getAll: (params = {}) => {
    const qs = new URLSearchParams(params).toString();
    return request(`/events?${qs}`);
  },

  getBySlug: (slug) => request(`/events/${slug}`),

  create: (data) =>
    request("/events", { method: "POST", body: JSON.stringify(data) }),

  update: (id, data) =>
    request(`/events/${id}`, { method: "PUT", body: JSON.stringify(data) }),

  delete: (id) =>
    request(`/events/${id}`, { method: "DELETE" }),
};

// ── Testimonials ──────────────────────────────────────────────────────────────
export const testimonialsAPI = {
  getAll: (featured = false) =>
    request(`/testimonials${featured ? "?featured=true" : ""}`),

  create: (data) =>
    request("/testimonials", { method: "POST", body: JSON.stringify(data) }),

  update: (id, data) =>
    request(`/testimonials/${id}`, { method: "PUT", body: JSON.stringify(data) }),

  delete: (id) =>
    request(`/testimonials/${id}`, { method: "DELETE" }),
};

// ── Services ──────────────────────────────────────────────────────────────────
export const servicesAPI = {
  getAll: () => request("/services"),

  update: (key, data) =>
    request(`/services/${key}`, { method: "PUT", body: JSON.stringify(data) }),
};

// ── Stats (Homepage counters) ─────────────────────────────────────────────────
export const statsAPI = {
  get: () => request("/stats"),
  update: (data) =>
    request("/stats", { method: "PUT", body: JSON.stringify(data) }),
};
