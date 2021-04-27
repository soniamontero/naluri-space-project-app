import http from "./httpService";
import URI from "urijs";

export function getPi() {
  const uri = new URI("http://localhost:8000/");
  return http.get(uri.toString());
}