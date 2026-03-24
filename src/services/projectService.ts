import type { Project } from "../types/project";

const API_URL = "/data/projects.json";

export async function fetchProjects(): Promise<Project[]> {
  try {
    const response = await fetch(API_URL);
    
    // HTTP durumunu kontrol et (Örn: 404 Not Found)
    if (!response.ok) {
      throw new Error(`Projeler yuklenemedi: ${response.status}`);
    }
    
    const data: Project[] = await response.json();
    return data;
    
  } catch (error) {
    console.error("Veri cekme hatasi:", error);
    throw error; // Hatayı, UI'da (App.tsx) göstermek için yukarı iletiyoruz
  }
}