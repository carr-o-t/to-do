import { LoginSchema } from "../lib/validations/auth";

export namespace Main {
  export interface Task {
    id: string;
    title: string;
    priority: "high" | "medium" | "low";
  }

  export interface WeatherAPIRes {
    current: {
      temperature: number;
      weather_icons: string[];
      weather_descriptions: string[];
    };
  }

  export type LoginT = z.infer<typeof LoginSchema>;
}
