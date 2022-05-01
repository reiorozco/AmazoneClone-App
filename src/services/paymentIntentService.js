import http from "./httpServices";

export function getClientSecret(items) {
  return http.post("/create-payment-intent", { items });
}
