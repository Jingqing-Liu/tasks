import { Song } from "./song";
import { Watch } from "./watch";

export interface Movie {
    title: string;
    creationyear: number;
    description: string;
    id: string;
    rating: number;
    soundtrack: Song[];
    watched: Watch;
}
