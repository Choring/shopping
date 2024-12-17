export {}

declare global {
    // interface 이름 {} or type 이름 = {}

    type DummyProducts = {
        id: string;
        image: string;
        title: string;
        price: number;
        description: string;
    }[]
}